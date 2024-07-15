/**
 * AggregationPage view component.
 * @module components/theme/View/AggregationPage
 */

import React, { useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Helmet, BodyClass } from '@plone/volto/helpers';

import {
  PageHeader,
  SkipToMainContent,
} from 'io-sanita-theme/components/View/commons';
import {
  SideMenu,
  SortBy,
} from 'io-sanita-theme/components/View/AggregationPage';
import {
  RemoveBodyClass,
  CardSimple,
  Pagination,
} from 'io-sanita-theme/components';

import config from '@plone/volto/registry';
import './_aggregationPage.scss';

const messages = defineMessages({
  description_argument: {
    id: 'aggregation_page_description_argument',
    defaultMessage: 'Tutti i contenuti relativi all\'argomento "{title}"',
  },
  description_tipologia_utente: {
    id: 'aggregation_page_description_tipologia_utente',
    defaultMessage: 'Tutti i contenuti dedicati a "{title}"',
  },
  all_contents: {
    id: 'aggregation_page_all',
    defaultMessage: 'Tutti',
  },
});

/**
 * AggregationPage view component class.
 * @function AggregationPage
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const AggregationPage = ({ match, route, location }) => {
  const intl = useIntl();
  const id = match?.params?.id ?? '';
  const type = route?.type;
  const b_size = config.settings.defaultPageSize.b_size; // batchsize

  const title = id.charAt(0).toUpperCase() + id.slice(1);
  const description = intl.formatMessage(
    type === 'TipologiaUtente'
      ? messages.description_tipologia_utente
      : messages.description_argument,
    {
      title: title,
    },
  );

  const defaultSections = [
    {
      id: 'tutti',
      title: intl.formatMessage(messages.all_contents),
      type: null,
    },
    // {
    //   id: 'servizi',
    //   title: 'Servizi e prestazioni',
    //   type: 'Servizio',
    // },
    // {
    //   id: 'come_fare_per',
    //   title: 'Come fare per',
    //   type: 'ComeFarePer',
    // },
    // {
    //   id: 'strutture',
    //   title: 'Strutture',
    //   type: 'Struttura',
    // },
    // {
    //   id: 'asl_comunica',
    //   title: 'ASL Comunica',
    //   type: 'Notizia',
    // },
    // {
    //   id: 'documenti',
    //   title: 'Documenti',
    //   type: 'Documento',
    // },
  ];
  const [sections, setSections] = useState(defaultSections);

  useEffect(() => {
    //ToDo: qui vanno caricati i risultati per 'tutti' come default, e vanno aggiunte le sections in base ai tipi disponibili ritornati dalla prima ricerca
  }, [id, type]);

  const results = {
    batching: {
      '@id':
        'https://v3.io-comune.redturtle.it/api/amministrazione/uffici/@querystring-search',
      first:
        'https://v3.io-comune.redturtle.it/api/amministrazione/uffici/@querystring-search?b_start=0',
      last: 'https://v3.io-comune.redturtle.it/api/amministrazione/uffici/@querystring-search?b_start=15',
      next: 'https://v3.io-comune.redturtle.it/api/amministrazione/uffici/@querystring-search?b_start=15',
    },
    items_total: 30,
    items: [
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test',
        title: 'Curva glicemica',
        description:
          'La curva glicemica è un test utilizzato per la diagnosi del diabete.',
        parliamo_di: [{ title: 'Esami e analisi', key: 'esami-e-analisi' }],
        '@type': 'ComeFarePer',
        portal_type_title: 'Come fare per',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-1',
        title: 'Emocromo completo',
        description:
          "L'emocromo completo è un test automatizzato che serve a rilevare il numero delle cellule del sangue.",
        parliamo_di: [{ title: 'Esami e analisi', key: 'esami-e-analisi' }],
        '@type': 'ComeFarePer',
        portal_type_title: 'Come fare per',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-2',
        title:
          'Inaugurazione della nuova sala per il parto in acqua per l’Ospedale M. Bufalini',
        description:
          'Un nuovo importante gesto di solidarietà nei confronti della Sanità romagnola destinato al reparto di Ostetricia Ginecologia dell’Ospedale G. Rossetti.',
        '@type': 'NewsItem',
        portal_type_title: 'Notizia',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-2',
        title: 'Bando di prova',
        description:
          'Bando destinato al reparto di Ostetricia Ginecologia dell’Ospedale G. Rossetti.',
        '@type': 'Bando',
        portal_type_title: 'Bando',
        effective: '2024-06-27T10:58:07+00:00',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-2',
        title: 'Servizio di prova',
        description:
          'Servizio destinato al reparto di Ostetricia Ginecologia dell’Ospedale G. Rossetti.',
        '@type': 'Servizio',
        portal_type_title: 'Servizio',
        canale_digitale_link: 'https://canaledigitale-del-servizio',
      },
    ],
  };

  const totalPages = 6; //useState(Math.ceil(results.items_total / b_size));
  const currentPage = useState(1);
  const onPaginationChange = () => {
    alert('Todo: implementare on paginatioon change');
  };
  return (
    <>
      <Helmet title={title} />
      <BodyClass className="public-ui" />
      <RemoveBodyClass className="cms-ui" />

      <div className="container px-4 my-4 aggregation-page-view">
        <SkipToMainContent />
        <PageHeader
          content={{
            '@id': location.pathname,
            title: title,
            description: description,
          }}
        />

        <div className="row row-column-border border-light row-column-menu-left">
          <aside className="col-md-12 col-lg-4">
            <SideMenu sections={sections} />
          </aside>
          <section
            id="main-content-section"
            className="col-lg-8 aggregation-page-results border-light pt-4 pt-lg-0"
            aria-live="polite"
          >
            <div className="d-flex justify-content-end mb-4">
              <SortBy
                action={(sort_by) => {
                  sort(sort_by);
                }}
              />
            </div>
            <div className="results">
              {results.items.map((item, i) => {
                //setta la tipologia del content-type se nn ci sono gli argomenti
                const parliamo_di =
                  item.parliamo_di?.length > 0
                    ? item.parliamo_di
                    : item.portal_type_title
                    ? [{ title: item.portal_type_title }]
                    : [];
                return (
                  <CardSimple
                    key={i + 'result'}
                    item={{ ...item, parliamo_di: parliamo_di }}
                    className="mb-3"
                  />
                );
              })}

              {totalPages > 1 && (
                <div className="pagination-wrapper">
                  <Pagination
                    activePage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPaginationChange}
                  />
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AggregationPage;
