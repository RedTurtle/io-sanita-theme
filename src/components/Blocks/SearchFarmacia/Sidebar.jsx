/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { defineMessages, useIntl } from 'react-intl';
import { SelectWidget } from '@plone/volto/components';

const messages = defineMessages({
  search_type_help: {
    id: 'search_type_help',
    defaultMessage: 'Seleziona il tipo di ricerca da effettuare',
  },
  search_type: {
    id: 'search_type',
    defaultMessage: 'Ricerca per',
  },
  search_shifts: {
    id: 'search_shifts',
    defaultMessage: 'Turni',
  },
  search_vacations: {
    id: 'search_vacations',
    defaultMessage: 'Ferie',
  },
});

const Sidebar = ({ block, data, onChangeBlock }) => {
  const intl = useIntl();

  const types = [
    ['shifts', intl.formatMessage(messages.search_shifts)],
    ['vacations', intl.formatMessage(messages.search_vacations)],
  ];

  /* set default searchType */
  useEffect(() => {
    onChangeBlock(block, {
      ...data,
      search_type:
        data.search_type === undefined ? types[0][0] : data.search_type,
    });
  }, []);

  return (
    <Segment.Group raised key={block.id || block}>
      <header className="header pulled">
        <h2>
          <FormattedMessage
            id="searchFarmacia"
            defaultMessage="Ricerca farmacie"
          />
        </h2>
      </header>
      <Segment>
        <div className="ui form">
          <p className="help">
            {intl.formatMessage(messages.search_type_help)}
          </p>
          <SelectWidget
            id="search_type"
            title={intl.formatMessage(messages.search_type)}
            value={data.search_type}
            onChange={(id, value) => {
              onChangeBlock(block, {
                ...data,
                search_type: value,
              });
            }}
            required={true}
            choices={types}
          />
        </div>
      </Segment>
    </Segment.Group>
  );
};

Sidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  block: PropTypes.string,
  selected: PropTypes.any,
  setSelected: PropTypes.func,
};

export default injectIntl(Sidebar);
