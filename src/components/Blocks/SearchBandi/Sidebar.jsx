import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import {
  SelectWidget,
  ObjectBrowserWidget,
  CheckboxWidget,
  QueryWidget,
} from '@plone/volto/components/manage/Widgets';
import Icon from 'io-sanita-theme/components/Icon/Icon';

import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';

const messages = defineMessages({
  help: {
    id: 'searchBlock_help',
    defaultMessage: 'Seleziona i filtri di ricerca da mostrare nel blocco.',
  },
  primary: {
    id: 'searchBlock_primarycolor',
    defaultMessage: 'Primario',
  },
  secondary: {
    id: 'searchBlock_secondaryColor',
    defaultMessage: 'Secondario',
  },
  tertiary: {
    id: 'searchBlock_tertiaryColor',
    defaultMessage: 'Ternario',
  },
  filter_one: {
    id: 'searchBlock_filter_one',
    defaultMessage: 'Filtro 1',
  },
  filter_two: {
    id: 'searchBlock_filter_two',
    defaultMessage: 'Filtro 2',
  },
  filter_three: {
    id: 'searchBlock_filter_three',
    defaultMessage: 'Filtro 3',
  },
  location_to_search: {
    id: 'location_to_search',
    defaultMessage: 'Posizione in cui cercare',
  },
  pre_filters: {
    id: 'searchBlock_pre_filters',
    defaultMessage: 'Filtri pre-impostati',
  },
  help_filters: {
    id: 'searchBlock_help_filters',
    defaultMessage:
      "Questi filtri non verranno visualizzati dall'utente ma consentono di pre filtrare i bandi secondo alcuni criteri.",
  },
  text_filter: {
    id: 'searchBlock_text_filter',
    defaultMessage: 'Filtro di testo',
  },
  venue_filter: {
    id: 'searchBlock_venue_filter',
    defaultMessage: 'Filtro per luoghi',
  },
  date_filter: {
    id: 'searchBlock_date_filter',
    defaultMessage: 'Filtro per date',
  },
  sort_on: {
    id: 'sort_on',
    defaultMessage: 'Ordina per',
  },
  sort_order: {
    id: 'sort_order',
    defaultMessage: 'Ordine inverso',
  },
  sort_apertura_bando: {
    id: 'sort_apertura_bando',
    defaultMessage: 'Data di apertura',
  },
  sort_chiusura_procedimento_bando: {
    id: 'sort_chiusura_procedimento_bando',
    defaultMessage: 'Chiusura procedimento bando',
  },
  sort_scadenza_bando: {
    id: 'sort_scadenza_bando',
    defaultMessage: 'Scadenza termini partecipazione',
  },
  sort_effective_date: {
    id: 'sort_effective_date',
    defaultMessage: 'Data di pubblicazione',
  },
  sort_modified_date: {
    id: 'sort_modified_date',
    defaultMessage: 'Data di modifica',
  },
});

const Sidebar = ({ block, data, onChangeBlock, required, blocksConfig }) => {
  const intl = useIntl();

  /* Accordions active */
  const [activeAccFilters, setActiveAccFilters] = useState(true);

  const FiltersConfigFN = blocksConfig['searchBandi'].filtersConfig;

  const filtersConfig = FiltersConfigFN
    ? FiltersConfigFN(null, null, block)
    : {};

  const filters = Object.keys(filtersConfig).map((k) => [
    k,
    filtersConfig[k].label,
  ]);

  const colors = [
    ['primary', intl.formatMessage(messages.primary)],
    ['secondary', intl.formatMessage(messages.secondary)],
  ];

  const sortOptions = [
    ['apertura_bando', intl.formatMessage(messages.sort_apertura_bando)],
    [
      'chiusura_procedimento_bando',
      intl.formatMessage(messages.sort_chiusura_procedimento_bando),
    ],
    ['scadenza_bando', intl.formatMessage(messages.sort_scadenza_bando)],
    ['effective', intl.formatMessage(messages.sort_effective_date)],
    ['modified', intl.formatMessage(messages.sort_modified_date)],
  ];

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage
            id="SearchBandiBlock"
            defaultMessage="Ricerca bandi"
          />
        </h2>
      </header>
      <Segment>
        <div className="ui form">
          <p className="help">{intl.formatMessage(messages.help)}</p>
          <SelectWidget
            id="filter_one"
            title={intl.formatMessage(messages.filter_one)}
            value={data.filter_one}
            onChange={(id, value) => {
              onChangeBlock(block, {
                ...data,
                filter_one: value,
              });
            }}
            required={true}
            choices={filters}
          />
          <SelectWidget
            id="filter_two"
            title={intl.formatMessage(messages.filter_two)}
            value={data.filter_two}
            onChange={(id, value) => {
              onChangeBlock(block, {
                ...data,
                filter_two: value,
              });
            }}
            choices={filters}
          />
          <SelectWidget
            id="filter_three"
            title={intl.formatMessage(messages.filter_three)}
            value={data.filter_three}
            onChange={(id, value) => {
              onChangeBlock(block, {
                ...data,
                filter_three: value,
              });
            }}
            choices={filters}
          />
          <SelectWidget
            id="sort_on"
            title={intl.formatMessage(messages.sort_on)}
            value={data.sort_on}
            onChange={(id, value) => {
              onChangeBlock(block, {
                ...data,
                sort_on: value,
              });
            }}
            choices={sortOptions}
          />
          <CheckboxWidget
            id="sort_order"
            title={intl.formatMessage(messages.sort_order)}
            value={data.sort_order ? data.sort_order : false}
            onChange={(name, checked) => {
              onChangeBlock(block, { ...data, [name]: checked });
            }}
          />
          <ObjectBrowserWidget
            id="location"
            title={intl.formatMessage(messages.location_to_search)}
            value={data.location}
            mode={'link'}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                location: value,
              });
            }}
          />
        </div>
      </Segment>
      <Accordion fluid styled className="form">
        <Accordion.Title
          active={activeAccFilters}
          index={1}
          onClick={() => setActiveAccFilters(!activeAccFilters)}
        >
          {intl.formatMessage(messages.pre_filters)}
          {activeAccFilters ? (
            <Icon name={upSVG} size="20px" />
          ) : (
            <Icon name={downSVG} size="20px" />
          )}
        </Accordion.Title>
        <Accordion.Content active={activeAccFilters}>
          <Segment padded>
            <p className="help">{intl.formatMessage(messages.help_filters)}</p>
            <QueryWidget
              block={block}
              onChange={(id, value) => {
                onChangeBlock(block, {
                  ...data,
                  [id]: value,
                });
              }}
              id="defaultQuerystring"
              value={data.defaultQuerystring}
            />
          </Segment>
        </Accordion.Content>
      </Accordion>
    </Segment.Group>
  );
};

Sidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default Sidebar;
