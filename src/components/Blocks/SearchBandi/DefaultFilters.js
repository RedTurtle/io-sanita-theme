import { useSelector } from 'react-redux';
import moment from 'moment';
import { useIntl, defineMessages } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';

import {
  TextFilter,
  SelectFilter,
  DateFilter,
} from 'io-sanita-theme/components/Widgets/SearchFilters';
import { getSearchBandiFilters } from 'io-sanita-theme/actions';

const messages = defineMessages({
  text_filter: {
    id: 'searchBlock_text_filter',
    defaultMessage: 'Filtro di testo',
  },
  tipologia_filter: {
    id: 'searchBlock_tipologia_filter',
    defaultMessage: 'Filtro per tipologia',
  },
  tipologia: {
    id: 'sarchBandi_tipologia_placeholder',
    defaultMessage: 'Tipologia',
  },
  ente_filter: {
    id: 'searchBlock_ente_filter',
    defaultMessage: 'Filtro per Ente',
  },
  ente: {
    id: 'sarchBandi_ente_placeholder',
    defaultMessage: 'Ente',
  },
  categoria_filter: {
    id: 'searchBlock_categoria_filter',
    defaultMessage: 'Filtro per Categoria',
  },
  categoria_filter_placeholder: {
    id: 'sarchBandi_categoria_placeholder',
    defaultMessage: 'Categoria',
  },
  scadenza_filter: {
    id: 'searchBlock_scadenza_filter',
    defaultMessage: 'Filtro per data di scadenza del bando',
  },
  chiusura_filter: {
    id: 'searchBlock_chiusura_filter',
    defaultMessage: 'Filtro per data di chiusura del procedimento',
  },
  scadenza_dal: {
    id: 'searchBlock_scadenza_filter_from',
    defaultMessage: 'Scadenza dal',
  },
  scadenza_al: {
    id: 'searchBlock_scadenza_filter_to',
    defaultMessage: 'Scadenza al',
  },
  chiusura_dal: {
    id: 'searchBlock_chiusura_filter_from',
    defaultMessage: 'Chiusura dal',
  },
  chiusura_al: {
    id: 'searchBlock_chiusura_filter_to',
    defaultMessage: 'Chiusura al',
  },
  search_keyword: {
    id: 'Cerca per parola chiave',
    defaultMessage: 'Cerca per parola chiave',
  },
});

const DefaultFilters = (pathSearch, block_id) => {
  const intl = useIntl();
  moment.locale(intl.locale);
  const subsite = useSelector((state) => state.subsite?.data);

  return {
    text_filter: {
      label: intl.formatMessage(messages.text_filter),
      type: 'text_filter',
      widget: {
        component: TextFilter,
        props: {
          value: '',
          placeholder: intl.formatMessage(messages.search_keyword),
        },
      },
      query: (value, query) => {
        if (value) {
          query.push({
            i: 'SearchableText',
            o: 'plone.app.querystring.operation.string.contains',
            v: value + '*',
          });
        }
      },
    },
    tipologia_filter: {
      label: intl.formatMessage(messages.tipologia_filter),
      type: 'tipologia_filter',
      widget: {
        component: SelectFilter,
        props: {
          value: null,
          options: {
            // vocabulary: 'redturtle.bandi.tipologia.vocabulary',
            // placeholder: intl.formatMessage(messages.tipologia),
            dispatch: {
              action: getSearchBandiFilters,
              path: subsite
                ? flattenToAppURL(subsite['@id'])
                : pathSearch || '/',
              stateSelector: 'searchBandiFilters',
              resultProp: 'tipologie',
            },
            placeholder: intl.formatMessage(messages.tipologia),
          },
        },
      },
      query: (value, query) => {
        if (value?.value) {
          query.push({
            i: 'tipologia_bando',
            o: 'plone.app.querystring.operation.selection.any',
            v: value.value,
          });
        }
      },
    },
    ente_filter: {
      label: intl.formatMessage(messages.ente_filter),
      type: 'ente_filter',
      widget: {
        component: SelectFilter,
        props: {
          value: null,
          options: {
            vocabulary: 'redturtle.bandi.enti.vocabulary',
            placeholder: intl.formatMessage(messages.ente),
          },
        },
      },
      query: (value, query) => {
        if (value?.value) {
          query.push({
            i: 'ente_bando',
            o: 'plone.app.querystring.operation.selection.any',
            v: value.value,
          });
        }
      },
    },
    categoria_filter: {
      label: intl.formatMessage(messages.categoria_filter),
      type: 'categoria_filter',
      widget: {
        component: SelectFilter,
        props: {
          value: null,
          options: {
            dispatch: {
              action: getSearchBandiFilters,
              path: subsite
                ? flattenToAppURL(subsite['@id'])
                : pathSearch || '/',
              stateSelector: 'searchBandiFilters',
              resultProp: 'subjects',
            },
            placeholder: intl.formatMessage(
              messages.categoria_filter_placeholder,
            ),
          },
        },
      },
      query: (value, query) => {
        if (value?.value) {
          query.push({
            i: 'Subject',
            o: 'plone.app.querystring.operation.selection.any',
            v: value.value,
          });
        }
      },
    },
    scadenza_filter: {
      label: intl.formatMessage(messages.scadenza_filter),
      type: 'scadenza_filter',
      widget: {
        component: DateFilter,
        props: {
          id: 'scadenza_' + block_id,
          // value: {
          //   startDate: moment().startOf('day'),
          //   endDate: moment().endOf('day'),
          // },
          showClearDates: true,
          // defaultStart: moment().startOf('day'),
          // defaultEnd: moment().endOf('day'),
          isOutsideRange: () => false,
          startLabel: intl.formatMessage(messages.scadenza_dal),
          endLabel: intl.formatMessage(messages.scadenza_al),
        },
      },
      reducer: (value, state) => {
        return {
          startDate: value.start ?? state.widget.props.defaultStart,
          endDate: value.end ?? state.widget.props.defaultEnd,
        };
      },
      query: (value, query) => {
        const date_fmt = 'YYYY-MM-DD HH:mm';
        if (value?.startDate || value?.endDate) {
          if (value?.startDate && !value.endDate) {
            let start_v = value.startDate.clone();
            let start = start_v?.startOf('day')?.utc()?.format(date_fmt);
            query.push({
              i: 'scadenza_bando',
              o: 'plone.app.querystring.operation.date.largerThan', //plone.app.querystring.operation.date.largerThan
              v: start,
            });
          } else if (!value?.startDate && value?.endDate) {
            let end_v = value.endDate.clone();
            let end = end_v.add(1, 'd').startOf('day')?.utc().format(date_fmt);
            query.push({
              i: 'scadenza_bando',
              o: 'plone.app.querystring.operation.date.lessThan', //plone.app.querystring.operation.date.lessThan
              v: end,
            });
          } else {
            let start_v = value.startDate.clone();
            let start = start_v.startOf('day')?.utc()?.format(date_fmt);

            let end_v = value.endDate.clone();
            let end = end_v.add(1, 'd').startOf('day')?.utc()?.format(date_fmt);

            query.push({
              i: 'scadenza_bando',
              o: 'plone.app.querystring.operation.date.between',
              v: [start, end],
            });
          }
        }
      },
    },
    chiusura_filter: {
      label: intl.formatMessage(messages.chiusura_filter),
      type: 'chiusura_filter',
      widget: {
        component: DateFilter,
        props: {
          id: 'chiusura_' + block_id,
          // value: {
          //   startDate: moment().startOf('day'),
          //   endDate: moment().endOf('day'),
          // },
          showClearDates: true,
          // defaultStart: moment().startOf('day'),
          // defaultEnd: moment().endOf('day'),
          isOutsideRange: () => false,
          startLabel: intl.formatMessage(messages.chiusura_dal),
          endLabel: intl.formatMessage(messages.chiusura_al),
        },
      },
      reducer: (value, state) => {
        return {
          startDate: value.start ?? state.widget.props.defaultStart,
          endDate: value.end ?? state.widget.props.defaultEnd,
        };
      },
      query: (value, query) => {
        const date_fmt = 'YYYY-MM-DD HH:mm';
        if (value?.startDate || value?.endDate) {
          if (value?.startDate && !value.endDate) {
            let start_v = value.startDate.clone();
            let start = start_v?.startOf('day')?.utc()?.format(date_fmt);
            query.push({
              i: 'chiusura_procedimento_bando',
              o: 'plone.app.querystring.operation.date.largerThan', //plone.app.querystring.operation.date.largerThan
              v: start,
            });
          } else if (!value?.startDate && value?.endDate) {
            let end_v = value.endDate.clone();
            let end = end_v.add(1, 'd').startOf('day')?.utc().format(date_fmt);
            query.push({
              i: 'chiusura_procedimento_bando',
              o: 'plone.app.querystring.operation.date.lessThan', //plone.app.querystring.operation.date.lessThan
              v: end,
            });
          } else {
            let start_v = value.startDate.clone();
            let start = start_v.startOf('day')?.utc()?.format(date_fmt);

            let end_v = value.endDate.clone();
            let end = end_v.add(1, 'd').startOf('day')?.utc()?.format(date_fmt);

            query.push({
              i: 'chiusura_procedimento_bando',
              o: 'plone.app.querystring.operation.date.between',
              v: [start, end],
            });
          }
        }
      },
    },
  };
};

export default DefaultFilters;
