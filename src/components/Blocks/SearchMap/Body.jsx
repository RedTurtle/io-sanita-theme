import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';
import ReactDOMServer from 'react-dom/server';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Row,
  Col,
  Spinner,
  Button,
  Chip,
  ChipLabel,
} from 'design-react-kit';
import omit from 'lodash/omit';
import { OSMMap } from 'volto-venue';
import { getQueryStringResults } from '@plone/volto/actions/querystringsearch/querystringsearch';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { hasGeolocation, mapPinDirections } from 'io-sanita-theme/helpers';
import {
  SearchBar,
  SearchResultItem,
  LinkedHeadline,
} from 'io-sanita-theme/components';
import ioSanitaPin from 'io-sanita-theme/components/Blocks/SearchMap/map-pin.svg';

/* Style */
import './search-map.scss';

const messages = defineMessages({
  no_results: {
    id: 'search_mapno_results',
    defaultMessage: 'Nessun risultato trovato',
  },
  results: {
    id: 'search_mapresults_found',
    defaultMessage: 'Risultati',
  },
  load_more_strutture: {
    id: 'search_mapload_more_strutture',
    defaultMessage: 'Mostra altre strutture',
  },
  load_more_medici: {
    id: 'search_mapload_more_medici',
    defaultMessage: 'Mostra altri medici',
  },
  searchable_text_default_label_strutture: {
    id: 'search_map_searchable_text_default_label_strutture',
    defaultMessage: 'Cerca strutture vicino a te',
  },
  searchable_text_default_label_medici: {
    id: 'search_map_searchable_text_default_label_mediic',
    defaultMessage: 'Cerca medici di base e pediatri vicino a te',
  },
  searchable_text_decription: {
    id: 'search_map_searchable_text_decription',
    defaultMessage:
      '*Inserisci un indirizzo, ad esempio “Viale G. Carducci 15, Roma”',
  },
  filter_by: {
    id: 'search_mapfilter-by',
    defaultMessage: 'Filtra per',
  },
  all_subjects: {
    id: 'search_mapall_subjects',
    defaultMessage: 'Tutti',
  },
  remove_all_subjects: {
    id: 'search_mapremove_all_subjects',
    defaultMessage: 'Mostra tutte le categorie',
  },
});

const LeafIcon = (options, item) => {
  return {
    html: ReactDOMServer.renderToString(
      // used from map
      <img
        src={options.iconUrl}
        alt={item.title}
        width={options.iconSize[0]}
        height={options.iconSize[1]}
      />,
    ),
    ...options,
  };
};

const resultsReducer = (items) => {
  //questo filtro è inutile, perchè questi conti li fa già il parametro 'has_geolocation' che si passa nella query
  //let geolocated_items = [];
  // items.forEach((item) => {
  //   //se l'oggetto è una Persona con stutture collegate con geolocation, o ha una sua geolocation, la aggiungo, altrimenti no.
  //   if (item['@type'] === 'Persona') {
  //     const strutture = [
  //       ...(item.struttura_ricevimento ?? []),
  //       ...(item.struttura_in_cui_opera ?? []),
  //     ].filter((s) => hasGeolocation(s));

  //     if (hasGeolocation(item) || strutture.length > 0) {
  //       geolocated_items.push(item);
  //     }
  //   } else {
  //     if (hasGeolocation(item)) {
  //       geolocated_items.push(item);
  //     }
  //   }
  // });
  //return geolocated_items;

  return items;
};

/*
  La paginazione è fatta lato client, pechè serve avere tutti i risultati possibili da mostrare sulla mappa
 */
const SearchMapBody = ({ data, id, path, properties, block, inEditMode }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const block_id = id + 'search_block';
  const b_size = 9999; //la paginazione si fa lato client perchè serve avere tutti i pin sulla mappa
  const client_page_size = 5;

  const subsite = useSelector((state) => state.subsite?.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    searchableText: '',
    subjects: new Set(),
  });
  const [markers, setMarkers] = useState([]);
  const [subjects, setSubjects] = useState(new Set());
  const [rendered_items, setRenderedItems] = useState([]);

  const querystringResults = useSelector((state) => {
    return state.querystringsearch?.subrequests?.[block_id] ?? {};
  });

  const resultItems = useSelector((state) => {
    return state.querystringsearch?.subrequests?.[block_id]?.items ?? [];
  });

  const [items, setItems] = useState([]);

  const doSearch = () => {
    //default filtes
    setSubjects(new Set());
    setCurrentPage(1);

    let query = [
      {
        i: 'portal_type',
        o: 'plone.app.querystring.operation.selection.any',
        v: [data.portal_type],
      },
      {
        i: 'has_geolocation',
        o: 'plone.app.querystring.operation.boolean.isTrue',
        v: 1,
      },
    ];

    if (data.path && data.path[0]) {
      query.push({
        i: 'path',
        o: 'plone.app.querystring.operation.string.absolutePath',
        v: flattenToAppURL(data.path[0]['@id']),
      });
    }

    if (data.portal_type === 'Persona') {
      //prendi solo i medici, ovvero quelli che hanno incarico 'Professionale'.
      query.push({
        i: 'incarico',
        o: 'plone.app.querystring.operation.selection.is',
        v: ['professionale'],
      });
    }

    //user filters
    if (filters.searchableText?.length > 0) {
      query.push({
        i: 'SearchableText',
        o: 'plone.app.querystring.operation.string.contains',
        v: filters.searchableText + '*',
      });
    }

    if (filters.subjects.size > 0) {
      query.push({
        i: 'tipologia_struttura',
        o: 'plone.app.querystring.operation.selection.any',
        v: [...filters.subjects],
      });
    }

    dispatch(
      getQueryStringResults(
        subsite ? flattenToAppURL(subsite['@id']) : '',
        {
          metadata_fields: [
            'tipologia_struttura',
            'struttura_ricevimento',
            'struttura_in_cui_opera',
            'incarico_metadata',
          ], //'_all',
          query: query,
          b_size: b_size,
          sort_on: 'sortable_title',
          sort_order: 'ascending',
        },
        block_id,
        1, //currentPage,
      ),
    );
  };

  const getPoint = (item, title) => {
    let point = { ...item };
    if (title) {
      point.title = title;
    }

    if (hasGeolocation(item)) {
      point = {
        ...point,
        ...(item.geolocation
          ? item.geolocation
          : { latitude: item.latitude, longitude: item.longitude }),
      };

      return {
        ...point,
        divIcon: LeafIcon(
          {
            iconUrl: ioSanitaPin,
            iconSize: [25, 40],
            iconAnchor: [12.5, 20],
            className: '',
          },
          point,
        ),
        popupContent: mapPinDirections(point, intl),
      };
    }
    return null;
  };

  const calculateMarkers = () => {
    let points = [];
    items.forEach((item) => {
      const point = getPoint(item);
      if (point) {
        points.push(point);
      }

      if (item['@type'] === 'Persona') {
        const strutture = [
          ...(item.struttura_ricevimento ?? []),
          ...(item.struttura_in_cui_opera ?? []),
        ].filter((s) => hasGeolocation(s));
        strutture.forEach((s) => {
          const point_s = getPoint(s, item.title);
          if (point_s) {
            points.push(point_s);
          }
        });
      }
    });
    setMarkers(points);
  };

  const calculateSubjects = () => {
    if (subjects.size === 0) {
      //per far si che i subject vengano popolati solo alla prima chiamata (quella di default)
      let points_subjects = new Set();
      items.forEach((item) => {
        if (item.tipologia_struttura?.length > 0) {
          item.tipologia_struttura.forEach((s) => points_subjects.add(s));
        }
      });
      setSubjects(points_subjects);
    }
  };

  useEffect(() => {
    setItems(resultsReducer(resultItems));
  }, [resultItems]);

  useEffect(() => {
    calculateMarkers();
    calculateSubjects();
  }, [items]);

  useEffect(() => {
    if (items?.length > 0) {
      const start_index = (currentPage - 1) * client_page_size;
      if (rendered_items.length == start_index) {
        const more_items = items.slice(
          start_index,
          start_index + client_page_size,
        );

        setRenderedItems([...rendered_items, ...more_items]);
      }
    } else {
      setRenderedItems([]);
    }
  }, [currentPage, items]);

  useEffect(() => {
    doSearch();
  }, [filters, data.path, data.portal_type]);

  const toggleSubject = (s) => {
    let new_subjects = new Set(filters.subjects);
    if (s == '_all_') {
      new_subjects = new Set();
    } else {
      if (filters.subjects.has(s)) {
        new_subjects.delete(s);
      } else {
        new_subjects.add(s);
      }
    }
    setFilters({ ...filters, subjects: new_subjects });
  };

  const results_region_id = block_id + 'results-region';
  return (
    <div className="block iosanita-block-search map">
      <div className="strutture-search">
        <div className="full-width bg-primary-lightest py-4">
          <Container className="px-4">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                doSearch();
              }}
            >
              <div className="search-top">
                {data.title && !data.show_search_bar && (
                  <LinkedHeadline
                    isEditMode={inEditMode}
                    title={data.title}
                    id={id}
                    className="h5"
                  />
                )}
                {data.show_search_bar && (
                  <Row>
                    <Col lg={8}>
                      <SearchBar
                        id={block_id}
                        title={data.title}
                        defaultTitle={
                          data.portal_type === 'Struttura'
                            ? intl.formatMessage(
                                messages.searchable_text_default_label_strutture,
                              )
                            : intl.formatMessage(
                                messages.searchable_text_default_label_medici,
                              )
                        }
                        textDescription={intl.formatMessage(
                          messages.searchable_text_decription,
                        )}
                        value={filters.searchableText}
                        onChange={(v) => {
                          setFilters({ ...filters, searchableText: v });
                        }}
                        ariaControls={results_region_id}
                      />
                    </Col>
                  </Row>
                )}
                {data.show_types && subjects.size > 0 && (
                  <div className="subjects pb-3">
                    {/*Chip 'tutti'*/}
                    <Chip
                      color="primary"
                      simple
                      tag={Button}
                      onClick={() => {
                        toggleSubject('_all_');
                      }}
                      className={cx({ active: filters.subjects.size === 0 })}
                      aria-controls={results_region_id}
                      aria-label={intl.formatMessage(
                        messages.remove_all_subjects,
                      )}
                    >
                      <ChipLabel>
                        {intl.formatMessage(messages.all_subjects)}
                      </ChipLabel>
                    </Chip>

                    {/*Chip delle varie categorie*/}
                    {[...subjects].map((s) => (
                      <Chip
                        color="primary"
                        simple
                        tag={Button}
                        key={s}
                        onClick={() => {
                          toggleSubject(s);
                        }}
                        className={cx({ active: filters.subjects.has(s) })}
                        aria-label={
                          intl.formatMessage(messages.filter_by) + ' ' + s
                        }
                        aria-controls={results_region_id}
                      >
                        <ChipLabel>{s}</ChipLabel>
                      </Chip>
                    ))}
                  </div>
                )}
              </div>

              <div id={results_region_id}>
                {querystringResults && (
                  <>
                    {items?.length > 0 && markers?.length > 0 ? (
                      <Row className="search-results">
                        <Col lg={8}>
                          {/* {__CLIENT__ && ( */}
                          <OSMMap
                            //center={[venuesData[0].latitude, venuesData[0].longitude]}
                            markers={markers}
                            cluster={true}
                            showTooltip={true}
                            showPopup={true}
                            mapOptions={{
                              scrollWheelZoom: false,
                            }}
                          />
                          {/* )} */}
                        </Col>
                        <Col lg={4}>
                          <div className="d-flex justify-content-between">
                            <div className="total small mb-3">
                              <span className="fw-bold">{items.length}</span>{' '}
                              {intl.formatMessage(messages.results)}
                            </div>
                            {/* per il momento non è stato implementato perchè l'unico ordinamento possibile è quello alfabetico <div>ordinamento</div> */}
                          </div>
                          <div className="results-items">
                            <Row>
                              {rendered_items.map((item, i) => (
                                <Col
                                  xs={12}
                                  key={block_id + i}
                                  className="mb-lg-3"
                                >
                                  <SearchResultItem item={item} />
                                </Col>
                              ))}
                            </Row>
                            {items.length > rendered_items.length && (
                              <div className="d-flex justify-content-center my-3">
                                <Button
                                  color="primary"
                                  outline
                                  onClick={() => {
                                    setCurrentPage(currentPage + 1);
                                  }}
                                >
                                  {intl.formatMessage(
                                    data.portal_type == 'Struttura'
                                      ? messages.load_more_strutture
                                      : messages.load_more_medici,
                                  )}
                                </Button>
                              </div>
                            )}
                          </div>
                        </Col>
                      </Row>
                    ) : querystringResults?.loading ? (
                      <div className="d-flex justify-content-center">
                        <Spinner active />
                      </div>
                    ) : querystringResults?.loaded ? (
                      <>{intl.formatMessage(messages.no_results)}</>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </div>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SearchMapBody;
