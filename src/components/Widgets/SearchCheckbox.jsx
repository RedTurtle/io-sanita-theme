/**
 * Utilizza questo widget per disegnare i checkbox delle tassonomie, utenti, argomenti,
 * o anche passando un Array di oggetti {label: 'Test 1', value: 'test1'}
 */
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { defineMessages, useIntl } from 'react-intl';
import { Input, FormGroup, Label, Collapse, Button } from 'design-react-kit';
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
  selectAll: {
    id: 'search_checkbox_select_all',
    defaultMessage: 'Seleziona tutti o nessuno',
  },
});

const SearchCheckbox = ({
  setFilters,
  filters = {}, // options selected
  filterKey, // for example 'users'
  options, // options list
  sectionTitle = null, // (anche tutto minuscolo)
  collapsable = false,
  toggleAll = false,
  toggleAll_aria,
  showActiveOptions = false, // show number of checkbox selected
  ariaControls,
  collapsableAfter = 10,
}) => {
  const intl = useIntl();
  const uid = uuid();

  const [collapse, setCollapse] = useState(collapsable);

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

  const toggleAllItems = () => {
    if (collapsable) {
      setCollapse(false);
    }
    let select_all = false;
    options.forEach((o) => {
      //se c'è qualche elemento che non è ceckato
      if (filters?.[filterKey]?.indexOf(o.value) < 0) {
        select_all = true;
      }
    });

    let array = select_all
      ? options.reduce((acc, o) => {
          acc.push(o.value);
          return acc;
        }, [])
      : [];
    setFilters({ ...filters, [filterKey]: array });
  };

  const getOptionsChunks = (options) => {
    const size = options.length;
    if (size > collapsableAfter) {
      let visibleOptions = options.slice(0, collapsableAfter);
      let hidedOptions = options.slice(collapsableAfter, size);

      return [visibleOptions, hidedOptions];
    }
    return [options];
  };

  const optionChunks = getOptionsChunks(options);

  const drawOptions = (options) => (
    <>
      {options.map((item, index) => {
        return (
          <FormGroup check tag="div" key={item.value + index}>
            <Input
              id={item.value + index}
              type="checkbox"
              checked={filters?.[filterKey]?.indexOf(item.value) >= 0}
              onChange={(e) =>
                onChangeField(item.value, e.currentTarget.checked)
              }
              aria-controls={
                ariaControls ?? 'search-results-region-' + sectionTitle
              }
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
        );
      })}
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
      <div className="form-check mt-3">
        {/* TODO: se serve, attivare anche il 'seleziona tutto' */}
        {toggleAll && (
          <Button
            color="link"
            size="mini"
            className="p-0"
            title={intl.formatMessage(messages.selectAll)}
            aria-label={
              toggleAll_aria ?? intl.formatMessage(messages.selectAll)
            }
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              toggleAllItems();
            }}
            style={{ fontSize: '0.9rem' }}
          >
            {intl.formatMessage(messages.selectAll)}
          </Button>
        )}
        {/* CHECKBOX */}
        {drawOptions(optionChunks[0])}
        {collapsable && optionChunks[1] && (
          <>
            <Collapse isOpen={!collapse} id={'collapseList-' + uid}>
              {drawOptions(optionChunks[1])}
            </Collapse>
            <div className="mt-2">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setCollapse((prev) => !prev);
                }}
                className="fw-bold"
                data-toggle="collapse"
                href={'#collapseList-' + uid}
                role="button"
                aria-expanded="false"
                aria-controls={'collapseList-' + uid}
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
