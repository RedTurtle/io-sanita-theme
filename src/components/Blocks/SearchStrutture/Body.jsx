import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';
import ReactDOMServer from 'react-dom/server';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Spinner,
  Button,
  Chip,
  ChipLabel,
} from 'design-react-kit';
import { OSMMap } from 'volto-venue';
import { getQueryStringResults } from '@plone/volto/actions';
import SearchableText from 'io-sanita-theme/components/Blocks/SearchStrutture/SearchableText';
import ioSanitaPin from 'io-sanita-theme/components/Blocks/SearchStrutture/map-pin.svg';
import ResultItem from 'io-sanita-theme/components/Blocks/SearchStrutture/ResultItem';

import './block-search.scss';

const messages = defineMessages({
  no_results: {
    id: 'isanita-search-no_results',
    defaultMessage: 'Nessun risultato trovato',
  },
  results: {
    id: 'isanita-search-results_found',
    defaultMessage: 'Risultati',
  },
  load_more_strutture: {
    id: 'isanita-search-load_more_strutture',
    defaultMessage: 'Mostra altre strutture',
  },
  load_more_medici: {
    id: 'isanita-search-load_more_medici',
    defaultMessage: 'Mostra altri medici',
  },
  filter_by: {
    id: 'isanita-search-filter-by',
    defaultMessage: 'Filtra per',
  },
  all_subjects: {
    id: 'isanita-search-all_subjects',
    defaultMessage: 'Tutti',
  },
  remove_all_subjects: {
    id: 'isanita-search-remove_all_subjects',
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

/*
  La paginazione è fatta lato client, pechè serve avere tutti i risultati possibili da mostrare sulla mappa
 */
const SearchStruttureBody = ({ data, id, path, properties, block }) => {
  const intl = useIntl();
  let history = useHistory();
  const dispatch = useDispatch();

  const content_type = 'Struttura';
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
  const items = useSelector((state) => {
    return state.querystringsearch?.subrequests?.[block_id]?.items ?? [];
  });

  const doSearch = () => {
    //default filtes
    let query = [
      {
        i: 'portal_type',
        o: 'plone.app.querystring.operation.selection.any',
        v: [content_type],
      },
    ];

    if (data.path && data.path[0]) {
      query.push({
        i: 'path',
        o: 'plone.app.querystring.operation.string.absolutePath',
        v: flattenToAppURL(data.path[0]['@id']),
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
        i: 'Subject',
        o: 'plone.app.querystring.operation.selection.any',
        v: [...filters.subjects],
      });
    }

    dispatch(
      getQueryStringResults(
        subsite ? flattenToAppURL(subsite['@id']) : '',
        {
          metadata_fields: ['Subject'], //'_all',
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

  const calculateMarkers = () => {
    let geolocated_items = items.filter(
      (item) =>
        (item.latitude &&
          item.longitude &&
          item.latitude !== 0 &&
          item.longitude !== 0) ||
        (item.geolocation && //for backward compatibility. To remove on next release.
          item.geolocation?.latitude &&
          item.geolocation?.longitude &&
          item.geolocation?.latitude !== 0 &&
          item.geolocation?.longitude !== 0),
    );

    let points = geolocated_items.map((item) => {
      return {
        ...item,
        ...(item.geolocation
          ? item.geolocation
          : { latitude: item.latitude, longitude: item.longitude }),
        onMarkerClick: (e) => {
          history.push(item['@id']);
        },
        divIcon: LeafIcon(
          {
            iconUrl: ioSanitaPin,
            iconSize: [25, 40],
            iconAnchor: [12.5, 20],
            className: '',
          },
          item,
        ),
      };
    });
    setMarkers(points);
  };

  const calculateSubjects = () => {
    if (subjects.size === 0) {
      //per far si che i subject vengano popolati solo alla prima chiamata (quella di default)
      let points_subjects = new Set();
      items.forEach((item) => {
        if (item.Subject?.length > 0) {
          item.Subject.forEach((s) => points_subjects.add(s));
        }
      });
      setSubjects(points_subjects);
    }
  };

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
  }, [filters]);

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
    <div className="iosanita-block-search">
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
                  <h2 className="h5">{data.title}</h2>
                )}
                {data.show_search_bar && (
                  <Row>
                    <Col lg={8}>
                      <SearchableText
                        id={block_id}
                        title={data.title}
                        value={filters.searchableText}
                        onChange={(v) => {
                          setFilters({ ...filters, searchableText: v });
                        }}
                        controls={results_region_id}
                      />
                    </Col>
                  </Row>
                )}
                {subjects.size > 0 && (
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
                            <Col xs={12} key={block_id + i} className="mb-lg-3">
                              <ResultItem item={item} />
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
                                content_type == 'Struttura'
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
              </div>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SearchStruttureBody;
