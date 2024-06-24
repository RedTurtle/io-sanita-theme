/* CUSTOMIZATIONS:
  - Agid styling
*/
import React from 'react';
import {
  SearchInput,
  SearchDetails,
  Facets,
  FilterList,
} from '@plone/volto/components/manage/Blocks/Search/components';
import { UniversalLink } from '@plone/volto/components';
import { Container, Row, Col, Icon } from 'design-react-kit';
import { flushSync } from 'react-dom';
import { RichText, richTextHasContent } from 'io-sanita-theme/helpers';

const FacetWrapper = ({ children }) => (
  <Col basic className="facet pt-4">
    {children}
  </Col>
);

const RightColumnFacets = (props) => {
  const {
    children,
    data,
    totalItems,
    facets,
    setFacets,
    onTriggerSearch,
    searchedText, // search text for previous search
    isEditMode,
    querystring = {},
    searchData,
    // mode = 'view',
    // variation,
  } = props;
  const { showSearchButton } = data;
  const isLive = !showSearchButton;
  const showColumn =
    data.columnTextTitle ||
    richTextHasContent(data.columnText) ||
    data?.facets?.length > 0;
  return (
    <div className="full-width bg-primary-lightest">
      <Container className="searchBlock-facets right-column-facets" stackable>
        {data.headline && (
          <Row>
            <Col>
              <h2 className="headline mb-5">{data.headline}</h2>
            </Col>
          </Row>
        )}

        <Row>
          <div
            className={showColumn ? 'col-lg-8 col-md-7 col-sm-12' : 'col-lg-12'}
          >
            {(Object.keys(data).includes('showSearchInput')
              ? data.showSearchInput
              : true) && (
              <div className="search-wrapper d-flex form-group input-group">
                <SearchInput {...props} isLive={isLive} />
              </div>
            )}

            <div className="search-results-count-sort d-flex align-center flex-wrap">
              <SearchDetails
                text={searchedText}
                total={totalItems}
                data={data}
              />
              <FilterList
                {...props}
                isEditMode={isEditMode}
                setFacets={(f) => {
                  flushSync(() => {
                    setFacets(f);
                    onTriggerSearch(searchedText || '', f);
                  });
                }}
              />
            </div>
            {children}
          </div>

          {showColumn && (
            <div className="col-lg-4 col-md-5 col-sm-12 ps-5 sideColumn">
              {data.columnTextTitle && (
                <h6 className="columnTextTitle mb-4">{data.columnTextTitle}</h6>
              )}
              {richTextHasContent(data.columnText) && (
                <div className="columnText mb-4">
                  <RichText serif={false} data={data.columnText} />
                </div>
              )}
              {data.linkTitleColumn && data.linkHrefColumn?.length > 0 && (
                <p className="mb-5">
                  <UniversalLink
                    href={data.linkHrefColumn[0]?.['@id']}
                    className="read-more"
                  >
                    {data.linkTitleColumn}
                    <Icon icon="it-arrow-right" />
                  </UniversalLink>
                </p>
              )}
              {data.facets?.length > 0 && (
                <div className="facets">
                  {data.facetsTitle && (
                    <h6 className="columnTextTitle">{data.facetsTitle}</h6>
                  )}
                  <Facets
                    querystring={querystring}
                    data={data}
                    searchData={searchData}
                    facets={facets}
                    isEditMode={isEditMode}
                    setFacets={(f) => {
                      flushSync(() => {
                        setFacets(f);
                        onTriggerSearch(searchedText || '', f);
                      });
                    }}
                    facetWrapper={FacetWrapper}
                  />
                </div>
              )}
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default RightColumnFacets;
