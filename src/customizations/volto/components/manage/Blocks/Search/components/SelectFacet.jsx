/*
 * original: https://raw.githubusercontent.com/plone/volto/19.4.1/packages/volto/src/components/manage/Blocks/Search/components/SelectFacet.jsx
 *
 * CUSTOMIZATIONS:
 * - Agid styling: the facet title is shown as an h6 above io-sanita-theme's
 *   SelectInput, which replaces the semantic-ui Select
 * - the accessible name is passed as `label`, because SelectInput ignores
 *   aria-label; without a title or field label SelectInput falls back to its
 *   own translated default label
 */
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  selectFacetSchemaEnhancer,
  selectFacetStateToValue,
  selectFacetValueToQuery,
} from '@plone/volto/components/manage/Blocks/Search/components/base';
import { SelectInput } from 'io-sanita-theme/components';

const messages = defineMessages({
  select: {
    id: 'Select…',
    defaultMessage: 'Select…',
  },
});

const SelectFacet = (props) => {
  const { facet, choices, isMulti, onChange, value, isEditMode } = props;
  const intl = useIntl();
  const v = Array.isArray(value) && value.length === 0 ? null : value;
  return (
    <div className="select-facet">
      <h6 className="mb-3 columnTextTitle">
        {facet?.title || facet?.field?.label}
      </h6>

      <div className="bootstrap-select-wrapper">
        {/* <label htmlFor={facet['@id']}>
          {facet?.title || facet?.field?.label || ''}
        </label> */}
        {/* Cannot style with props because the kit is... the kit. Resorting to div[class*='-ValueContainer'] */}
        <SelectInput
          placeholder={
            facet?.title ??
            (facet?.field?.label || intl.formatMessage(messages.select))
          }
          label={facet?.title ?? facet?.field?.label}
          id={facet['@id']}
          options={choices}
          isDisabled={isEditMode}
          onChange={(data) => {
            if (data) {
              onChange(
                facet.field.value,
                isMulti ? data.map(({ value }) => value) : data.value,
              );
            } else {
              // data has been removed
              onChange(facet.field.value, isMulti ? [] : '');
            }
          }}
          isMulti={facet.multiple}
          isClearable={true}
          value={v}
          isSearchable={true}
        />
      </div>
    </div>
  );
};

SelectFacet.schemaEnhancer = selectFacetSchemaEnhancer;
SelectFacet.stateToValue = selectFacetStateToValue;
SelectFacet.valueToQuery = selectFacetValueToQuery;

export default SelectFacet;
