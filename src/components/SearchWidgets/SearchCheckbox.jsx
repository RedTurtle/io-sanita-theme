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
  showAll: {
    id: 'search_topic_show_all',
    defaultMessage: 'Mostra tutto',
  },
  hideAll: {
    id: 'search_topic_hide_all',
    defaultMessage: 'Nascondi',
  },
  searchTo: {
    id: 'search_topic_search_to',
    defaultMessage: 'Cerca per',
  },
  defaultTitle: {
    id: 'search_topic_default_title',
    defaultMessage: 'argomenti',
  },
  active_filters: {
    id: 'search_topic_active_filters',
    defaultMessage: '{filterNumber} filtri attivati',
  },
});

const SearchCheckbox = ({
  setFilters,
  filters, // topics selected
  filterKey, // for example 'users'
  topics, // list of topics
  sectionTitle = null, // anche tutto minuscolo
  collapsable = false,
  showActiveTopics = false, // number of checkbox selected
}) => {
  const intl = useIntl();

  const [collapse, setCollapse] = useState(true);

  const title = sectionTitle
    ? sectionTitle
    : intl.formatMessage(messages.defaultTitle);

  let activeTopics = values(topics).filter((t) => t.value).length;

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

  const getTopicChunks = (topics) => {
    const size = Object.keys(topics).length;
    if (size > 10) {
      let visibleTopics = [];
      let hidedTopics = [];
      const keys_visible = Object.keys(topics).slice(0, 10);
      const keys_hide = Object.keys(topics).slice(10, size);

      keys_visible.forEach((key) => {
        visibleTopics.push(topics[key]);
      });

      keys_hide.forEach((key) => {
        hidedTopics.push(topics[key]);
      });

      return [visibleTopics, hidedTopics];
    }
    return [topics];
  };

  const topic_chunks = getTopicChunks(topics);

  const drawTopics = (topics) => (
    <>
      {topics.map((item, topicId) => (
        <div key={topicId}>
          <FormGroup check tag="div">
            <Input
              id={`search-${sectionTitle}-${topicId}`}
              type="checkbox"
              checked={filters[filterKey].indexOf(item.value) >= 0}
              onChange={(e) =>
                onChangeField(item.value, e.currentTarget.checked)
              }
              aria-controls={'search-results-region-' + sectionTitle}
              aria-label={`${intl.formatMessage(messages.searchTo)} ${title} ${item.label}`}
            />
            <Label
              check
              for={`search-${sectionTitle}-${topicId}`}
              tag="label"
              widths={['xs', 'sm', 'md', 'lg', 'xl']}
            >
              {item.label}
            </Label>
          </FormGroup>
        </div>
      ))}
    </>
  );

  return (
    <>
      <h6 className="text-uppercase">
        {/* SECTION TITLE */}
        {title}

        {/* NUMBER OF CHECKBOX SELECTED */}
        {showActiveTopics && (
          <span
            className={cx('badge bg-secondary ms-3', {
              'visually-hidden': activeTopics === 0,
            })}
            aria-live="polite"
            aria-label={intl.formatMessage(messages.active_filters, {
              filterNumber: activeTopics,
            })}
          >
            {activeTopics}
          </span>
        )}
      </h6>
      <div className="form-check mt-4">
        {/* TO DO: se serve, attivare anche il 'seleziona tutto' */}

        {/* CHECKBOX */}
        {drawTopics(topic_chunks[0])}
        {collapsable && topic_chunks[1] && (
          <>
            <Collapse isOpen={!collapse} id="collapseTopics">
              {drawTopics(topic_chunks[1])}
            </Collapse>
            <div className="mt-4">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setCollapse((prev) => !prev);
                }}
                className="fw-bold"
                data-toggle="collapse"
                href="#collapseTopics"
                role="button"
                aria-expanded="false"
                aria-controls="collapseList"
                aria-label={intl.formatMessage(
                  collapse ? messages.showAll : messages.hideAll,
                )}
              >
                {intl.formatMessage(
                  collapse ? messages.showAll : messages.hideAll,
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
