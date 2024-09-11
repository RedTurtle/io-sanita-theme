/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { flatMapDeep } from 'lodash';
import { useHistory } from 'react-router-dom';
import { Button, Container, Row, Col } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import SearchableText from 'io-sanita-theme/components/Blocks/SearchMap/SearchableText';
import ResultItem from 'io-sanita-theme/components/Blocks/SearchMap/ResultItem';


const navigate = (text, sections) => {
  window.location.href =
    window.location.origin +
    `/search?SearchableText=${text}&path.query=${sections}`;
};

const messages = defineMessages({
  doSearch: {
    id: 'Search',
    defaultMessage: 'Cerca',
  },
  results: {
    id: 'search_mapresults_found',
    defaultMessage: 'Risultati',
  },
  searchable_text_default_label_servizi: {
    id: 'searchable_text_default_label_servizi',
    defaultMessage: 'Servizi',
  },
  searchable_text_default_label_prestazioni: {
    id: 'searchable_text_default_label_prestazioni',
    defaultMessage: 'Prestazioni',
  },
});

const Body = ({ data, id, path, properties, block }) => {
  const intl = useIntl();
  const history = useHistory();
  const block_id = id + 'search_servizi_prestazioni_block';
  const results_region_id = block_id + 'results-region';

  const [filters, setFilters] = useState({
    searchableText: '',
    subjects: new Set(),
  });

  const [inputText, setInputText] = useState('');

  const searchFilters = () => {
    return flatMapDeep(block.sections ?? [], (section) => {
      let items = sections?.[section.value]?.items;
      return items ? Object.keys(items) : [];
    });
  };

  const handleClick = (link) => {
    history.push(flattenToAppURL(link['@id']));
  };

  //user filters
  if (filters.searchableText?.length > 0) {
    query.push({
      i: 'SearchableText',
      o: 'plone.app.querystring.operation.string.contains',
      v: filters.searchableText + '*',
    });
  }

  const rendered_items = [];


  return (
    <div className="iosanita-block-search-servizi-prestazioni">
      <div className="full-width bg-primary-lightest py-4">
        <Container className="px-4">
          {/* Titolo del blocco */}
          {data.title && (
            <h2 className="search-section-title mb-4">{data.title}</h2>
          )}
          <form
              onSubmit={(event) => {
                event.preventDefault();
                doSearch();
              }}
            >


          <Row className="search-results">
          {/* Filters */}
          <Col lg={4}>Filtri</Col>
          {/* Results */}
          <Col lg={8}>
            {/* Search bar */}
            <SearchableText
              id={block_id}
              className="w-100"
              title={data.title}
              defaultTitle={
                data.portal_type === 'Servizi'
                  ? intl.formatMessage(
                      messages.searchable_text_default_label_servizi,
                    )
                  : intl.formatMessage(
                      messages.searchable_text_default_label_prestazioni,
                    )
              }
              value={filters.searchableText}
              onChange={(v) => {
                setFilters({ ...filters, searchableText: v });
              }}
              controls={results_region_id}
            />
                          <div className="d-flex justify-content-between">
                            <div className="total small mb-3">
                              <span className="fw-bold">{rendered_items.length}</span>{' '}
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
                                  <ResultItem item={item} />
                                </Col>
                              ))}
                            </Row>
                            {/* Inserire la paginazione */}
                            {/* {items.length > rendered_items.length && (

                            )} */}
                          </div>
                        </Col>
                      </Row>

                      </form>
      </Container>
    </div>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Body.propTypes = {
  block: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Body;
