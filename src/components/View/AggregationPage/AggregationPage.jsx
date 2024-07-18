/**
 * AggregationPage view component.
 * @module components/theme/View/AggregationPage
 */

import React, { useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
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

import { getTassonomieSearch } from 'io-sanita-theme/actions';

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
  const dispatch = useDispatch();
  const id = match?.params?.id ?? '';
  const type = route?.type;
  const b_size = config.settings.defaultPageSize.b_size; // batchsize

  const tassonomieSearch = useSelector((state) => state.tassonomieSearch);
  const result = useSelector((state) => state.tassonomieSearch.data);

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
  ];
  const [sections, setSections] = useState(defaultSections);

  //carico i dati iniziali
  useEffect(() => {
    dispatch(getTassonomieSearch(type, id));
  }, [id, type]);

  //setto le voci laterali
  useEffect(() => {
    if (result?.facets?.portal_types) {
      setSections([
        ...defaultSections,
        ...result.facets.portal_types.map((f) => {
          return {
            id: f.token,
            title: f.title,
            type: f.token,
          };
        }),
      ]);
    }
  }, [result]);

  //todo: sistemare questo totalpages, deve cambiare al cambio della ricerca
  const totalPages = useState(
    result?.items_total ? Math.ceil(result.items_total / b_size) : 0,
  );
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
              {tassonomieSearch?.loading ? (
                <>todo: metterer lo spinner</>
              ) : (
                <>
                  {result?.items.map((item, i) => {
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
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AggregationPage;
