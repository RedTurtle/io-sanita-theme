/* CUSTOMIZATIONS:
  - Agid styling
  - Use with more plone.app.querystring.date operations
*/
import React, { useState } from 'react';
import { Icon } from 'io-sanita-theme/components';
import { injectIntl } from 'react-intl';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { compose } from 'redux';
import { connect } from 'react-redux';
import qs from 'query-string';
import { DateRange } from 'io-sanita-theme/components';

const DateRangeFacet = (props) => {
  const { facet, isEditMode, onChange, value, intl, lang } = props;
  const moment = props.moment.default;

  const [focused, setFocused] = useState(null);
  return (
    <div className="daterange-facet">
      <h6 className="mb-3 columnTextTitle">
        {facet?.title ?? facet?.field?.label}
      </h6>
      <div className="date-time-widget-wrapper">
        <div className="date-input">
          <DateRange
            startDate={value && value[0] ? moment(value[0]) : null}
            startDateId={`${facet['@id']}-start-date`}
            endDate={value && value[1] ? moment(value[1]) : null}
            endDateId={`${facet['@id']}-end-date`}
            numberOfMonths={1}
            disabled={isEditMode}
            displayFormat={moment.localeData(lang).longDateFormat('L')}
            onDatesChange={({ startDate, endDate }) => {
              onChange(facet.field.value, [
                startDate ? startDate.format('YYYY-MM-DD') : null,
                endDate ? endDate.format('YYYY-MM-DD') : null,
              ]);
            }}
            isOutsideRange={() => false}
          />
        </div>
      </div>
    </div>
  );
};

// CUSTOMIZATION to make it actually work as intended
// Terrificante modo di prendere l'op reale e non le abbreviazioni
// inspiegabili e buggose di chi ha fatto il blocco Search,
// piuttosto che riscriverlo da capo.
// D'altronde, nel codice originale e' pieno di todo...
DateRangeFacet.stateToValue = (state) => {
  const { facetSettings, selectedValue, searchData = {} } = state;
  if (typeof selectedValue === 'string') {
    const queryIndex = searchData?.query?.find(
      (q) => q.i === facetSettings?.field?.value,
    );
    if (queryIndex) {
      if (queryIndex?.o?.includes('date.largerThan'))
        return [selectedValue, null];
      else if (queryIndex?.o?.includes('date.lessThan'))
        return [null, selectedValue];
      else if (queryIndex?.o?.includes('date.between')) return selectedValue;
    }
    return [null, null];
  } else return selectedValue || [null, null];
};

// CUSTOMIZATION to make it actually work as intended
// Terrificante modo di prendere l'op reale e non le abbreviazioni
// inspiegabili e buggose di chi ha fatto il blocco Search,
// piuttosto che riscriverlo da capo.
// D'altronde, nel codice originale e' pieno di todo...
DateRangeFacet.valueToQuery = ({ value, facet }) => {
  if (typeof value === 'string') {
    const params = qs.parse(window.location.hash);
    // Cannot guess, make it fail grracefully at least
    if (!params) return null;

    const facetQuery = JSON.parse(params?.query || '[]')?.find(
      (q) => q.i === facet.field.value,
    );
    const facetOperation = facetQuery?.o ?? '';
    return {
      i: facet.field.value,
      o: facetOperation.replace('paqo', 'plone.app.querystring.operation'),
      v: value,
    };
  } else if (Array.isArray(value)) {
    if (value[0] && !value[1])
      return {
        i: facet.field.value,
        o: 'plone.app.querystring.operation.date.largerThan',
        v: value[0],
      };
    else if (!value[0] && value[1])
      return {
        i: facet.field.value,
        o: 'plone.app.querystring.operation.date.lessThan',
        v: value[1],
      };
    else if (!value[0] && !value[1]) return null;
    else
      return {
        i: facet.field.value,
        o: 'plone.app.querystring.operation.date.between',
        v: value,
      };
  }

  return null;
};

export default compose(
  injectLazyLibs(['moment']),
  connect((state) => ({
    lang: state.intl.locale,
  })),
  injectIntl,
)(DateRangeFacet);
