/**
 * Utilizza questo widget per disegnare i checkbox delle tassonomie, utenti, argomenti,
 * o anche passando un Array di oggetti {label: 'Test 1', value: 'test1'}
 */
import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Input, FormGroup, Label, Collapse } from 'design-react-kit';
import { values } from 'lodash';
import cx from 'classnames';

const messages = defineMessages({
  show_all: {
    id: 'search_checkbox_show_all',
    defaultMessage: 'Mostra tutto',
  },
  hide_all: {
    id: 'search_checkbox_hide_all',
    defaultMessage: 'Nascondi',
  },
  search_to: {
    id: 'search_checkbox_search_to',
    defaultMessage: 'Cerca per',
  },
  default_title: {
    id: 'search_checkbox_default_title',
    defaultMessage: 'argomenti',
  },
  active_filters: {
    id: 'search_checkbox_active_filters',
    defaultMessage: '{filterNumber} filtri attivati',
  },
});

const SearchCheckbox = ({
  setFilters,
  filters, // options selected
  filterKey, // for example 'users'
  options, // options list
  sectionTitle = null, // (anche tutto minuscolo)
  collapsable = false,
  showActiveOptions = false, // show number of checkbox selected
}) => {
  const intl = useIntl();

  const [collapse, setCollapse] = useState(true);

  const title = sectionTitle
    ? sectionTitle
    : intl.formatMessage(messages.default_title);

  let activeOptions = values(options).filter((t) => t.value).length;

  const onChangeField = (value, checked) => {
    let array = [...filters[filterKey]];
    if (checked) {
      array.push(value);
    } else {
      array.splice(array.indexOf(value), 1);
    }
    // set your Filters
    setFilters({ ...filters, [filterKey]: array });
  };

  const getOptionsChunks = (options) => {
    const size = Object.keys(options).length;
    if (size > 10) {
      let visibleOptions = [];
      let hidedOptions = [];
      const keys_visible = Object.keys(options).slice(0, 10);
      const keys_hide = Object.keys(options).slice(10, size);

      keys_visible.forEach((key) => {
        visibleOptions.push(options[key]);
      });

      keys_hide.forEach((key) => {
        hidedOptions.push(options[key]);
      });

      return [visibleOptions, hidedOptions];
    }
    return [options];
  };

  const optionChunks = getOptionsChunks(options);

  const drawOptions = (options) => (
    <>
      {options.map((item, index) => (
        <FormGroup check tag="div" key={item.value + index}>
          <Input
            id={item.value + index}
            type="checkbox"
            checked={filters[filterKey].indexOf(item.value) >= 0}
            onChange={(e) => onChangeField(item.value, e.currentTarget.checked)}
            aria-controls={'search-results-region-' + sectionTitle}
            aria-label={`${intl.formatMessage(messages.search_to)} ${title} ${
              item.label
            }`}
          />
          <Label
            check
            for={item.value + index}
            tag="label"
            widths={['xs', 'sm', 'md', 'lg', 'xl']}
          >
            {item.label}
          </Label>
        </FormGroup>
      ))}
    </>
  );

  return (
    <>
      <h6 className="text-uppercase">
        {/* SECTION TITLE */}
        {title}

        {/* NUMBER OF CHECKBOX SELECTED */}
        {showActiveOptions && (
          <span
            className={cx('badge bg-secondary ms-3', {
              'visually-hidden': activeOptions === 0,
            })}
            aria-live="polite"
            aria-label={intl.formatMessage(messages.active_filters, {
              filterNumber: activeOptions,
            })}
          >
            {activeOptions}
          </span>
        )}
      </h6>
      <div className="form-check mt-4">
        {/* TO DO: se serve, attivare anche il 'seleziona tutto' */}

        {/* CHECKBOX */}
        {drawOptions(optionChunks[0])}
        {collapsable && optionChunks[1] && (
          <>
            <Collapse isOpen={!collapse} id="collapseOptions">
              {drawOptions(optionChunks[1])}
            </Collapse>
            <div className="mt-4">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setCollapse((prev) => !prev);
                }}
                className="fw-bold"
                data-toggle="collapse"
                href="#collapseOptions"
                role="button"
                aria-expanded="false"
                aria-controls="collapseList"
                aria-label={intl.formatMessage(
                  collapse ? messages.show_all : messages.hide_all,
                )}
              >
                {intl.formatMessage(
                  collapse ? messages.show_all : messages.hide_all,
                )}
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchCheckbox;
