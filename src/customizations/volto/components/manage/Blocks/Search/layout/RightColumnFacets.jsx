/* CUSTOMIZATIONS:
  - Agid styling
*/
import React, { useMemo } from 'react';
import {
  SearchInput,
  SearchDetails,
  Facets,
  FilterList,
} from '@plone/volto/components/manage/Blocks/Search/components';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { Container, Row, Col, Icon } from 'design-react-kit';
import { flushSync } from 'react-dom';
import { RichText, richTextHasContent } from 'io-sanita-theme/helpers';
import { SelectInput } from 'io-sanita-theme/components';
import { useIntl, defineMessages } from 'react-intl';

const FacetWrapper = ({ children }) => (
  <Col basic className="facet pt-4">
    {children}
  </Col>
);

const messages = defineMessages({
  searchBlockOrder: {
    id: 'searchBlockOrder',
    defaultMessage: 'Ordinamento',
  },
  ascending: {
    id: 'ascending',
    defaultMessage: 'Ascending',
  },
  descending: {
    id: 'descending',
    defaultMessage: 'Descending',
  }
});

// TODO: il codice tra RightColumnFacets e LeftColumnFca
//        è completamente duplicato
const RightColumnFacets = (props) => {
  const {
    children,
    data,
    totalItems,
    facets,
    setFacets,
    sortOn,
    sortOrder,
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
  const intl = useIntl();

  // TODO: fare mapping sul nome corretto (esempio sortable_title)
  const sortableOptions = useMemo(
    () =>
      data?.columns ? [
        { value: 'sortable_title', label: 'Titolo' },
        ...data?.columns?.map((f) => {
          return { value: f.field, label: f.title };
        }),
      ].filter((o) => querystring?.['indexes']?.[o.value]?.sortable) : [{ value: 'sortable_title', label: 'Titolo' }    ],
    [data?.columns, querystring],
  );

  const sortOrderOptions = [
    { value: 'ascending', label: intl.formatMessage(messages.ascending) },
    { value: 'descending', label: intl.formatMessage(messages.descending) },
  ];

  // TODO: temporanea, il layout in edit è completamente sballato, per ora non la mettiamotes
  const showColumn =
    !isEditMode &&
    (data.columnTextTitle ||
      richTextHasContent(data.columnText) ||
      data?.facets?.length > 0 ||
      data?.showOrderOptions);
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

              {data?.showOrderOptions && (
                <div className="pt-4">
                  <h6>{intl.formatMessage(messages.searchBlockOrder)}</h6>
                  {/* <pre>{JSON.stringify(searchData, null,2)}</pre> */}
                  {/* <pre>{JSON.stringify(data.columns, null,2)}</pre> */}
                  {/* <pre>{sortOn} {sortOrder}</pre> */}
                  <div className="pt-2">
                    <SelectInput
                      id="sortOn"
                      value={sortableOptions.find((o) => o.value === sortOn)}
                      // placeholder={intl.formatMessage(messages.area_territoriale)}
                      onChange={(opt) => {
                        flushSync(() => {
                          onTriggerSearch(undefined, undefined, opt.value);
                        });
                      }}
                      options={sortableOptions}
                    />
                  </div>
                  <div className="pt-2">
                    <SelectInput
                      id="sortOrder"
                      value={sortOrderOptions.find(
                        (o) => o.value === sortOrder,
                      )}
                      // placeholder={intl.formatMessage(messages.area_territoriale)}
                      onChange={(opt) => {
                        flushSync(() => {
                          onTriggerSearch(
                            undefined,
                            undefined,
                            undefined,
                            opt.value,
                          );
                        });
                      }}
                      options={sortOrderOptions}
                    />
                  </div>
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
