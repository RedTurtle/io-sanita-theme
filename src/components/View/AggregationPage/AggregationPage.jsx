/**
 * AggregationPage view component.
 * @module components/theme/View/AggregationPage
 */

import React, { useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet, BodyClass } from '@plone/volto/helpers';
import { Spinner } from 'design-react-kit';
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
  no_results: {
    id: 'aggregation_page_no_results',
    defaultMessage: 'Nessun risultato trovato.',
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

  //search
  const b_size = config.settings.defaultPageSize; //batchsize
  const [searchParams, setSearchParams] = useState({
    type: type,
    id: id,
    portalType: null, //per filtrare su un tipo di conteneuto specifico (click dal menu laterale)
    order: { sort_on: null, sort_order: null },
    currentPage: 1,
  });
  const tassonomieSearch = useSelector((state) => state.tassonomieSearch);
  const result = useSelector((state) => state.tassonomieSearch.result);
  const [totalPages, setTotalPages] = useState(0);

  //page title and description
  const title = id.charAt(0).toUpperCase() + id.slice(1);
  const description = intl.formatMessage(
    type === 'a_chi_si_rivolge_tassonomia'
      ? messages.description_tipologia_utente
      : messages.description_argument,
    {
      title: title,
    },
  );

  //menu sections
  const defaultSections = [
    {
      title: intl.formatMessage(messages.all_contents),
      type: null,
    },
  ];
  const [sections, setSections] = useState(defaultSections);

  //carico i dati iniziali
  useEffect(() => {
    doSearch();
  }, [searchParams]);



  const doSearch = () => {
    if (!tassonomieSearch.loading) {
      dispatch(getTassonomieSearch(searchParams));
    }
  };

  //all'arrivo dei risultati
  useEffect(() => {
    //setto le voci laterali
    if (result?.facets?.portal_types) {
      setSections([
        ...defaultSections,
        ...result.facets.portal_types.map((f) => {
          return {
            title: f.title,
            type: f.token,
          };
        }),
      ]);
    }
    //setto la paginazione
    setTotalPages(
      result?.items_total > 0 ? Math.ceil(result.items_total / b_size) : 0,
    );
  }, [result]);

  //paginazione
  useEffect(() => {
    setSearchParams({ ...searchParams, currentPage: 1 });
  }, [searchParams.portalType, searchParams.order]);

  const onPaginationChange = (e, { activePage }) => {
    setSearchParams({ ...searchParams, currentPage: activePage });
  };

  return (
    <>
      <Helmet title={title} />
      <BodyClass className="public-ui" />
      <RemoveBodyClass className="cms-ui" />

      <div className="container px-4 my-4 aggregation-page-view public-ui">
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
            <SideMenu
              sections={sections}
              selected={searchParams.portalType}
              setSelected={(pt) => {
                setSearchParams({ ...searchParams, portalType: pt });
              }}
            />
          </aside>
          <section
            id="main-content-section"
            className="col-lg-8 aggregation-page-results border-light pt-4 pt-lg-0"
            aria-live="polite"
          >
            <div className="d-flex justify-content-end mb-4">
              <SortBy
                order={searchParams.order}
                action={(sortby) => {
                  setSearchParams({ ...searchParams, order: sortby });
                }}
              />
            </div>
            <div className="results">
              {tassonomieSearch?.loading ? (
                <div className="d-flex my-4 justify-content-center">
                  <Spinner active />
                </div>
              ) : tassonomieSearch?.loaded ? (
                <>
                  {result?.items_total === 0 && (
                    <div className="text-center">
                      {intl.formatMessage(messages.no_results)}
                    </div>
                  )}
                  {result?.items?.map((item, i) => {
                    //setta la tipologia del content-type se nn ci sono gli argomenti
                    const parliamo_di_metadata =
                      item.parliamo_di_metadata?.length > 0
                        ? item.parliamo_di_metadata
                        : item.portal_type_title
                        ? [{ title: item.portal_type_title }]
                        : [];
                    return (
                      <CardSimple
                        key={i + 'result'}
                        item={{
                          ...item,
                          parliamo_di_metadata: parliamo_di_metadata,
                        }}
                        className="mb-3"
                      />
                    );
                  })}

                  {totalPages > 1 && (
                    <div className="pagination-wrapper">
                      <Pagination
                        activePage={searchParams.currentPage}
                        totalPages={totalPages}
                        onPageChange={onPaginationChange}
                      />
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AggregationPage;
