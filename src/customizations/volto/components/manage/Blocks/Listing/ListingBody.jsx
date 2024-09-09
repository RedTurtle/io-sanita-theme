/*
CUSTOMIZATIONS:
- added skeleton
- display nothing if no results in view-mode
- pass 'block' prop to listing variation
- italia pagination
- change Headline component to use data.title instead data.headline
- change Headline component to to view path filters

*/
import React, { createRef, useMemo } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import cx from 'classnames';

import Slugger from 'github-slugger';

import { renderLinkElement } from '@plone/volto-slate/editor/render';
import withQuerystringResults from '@plone/volto/components/manage/Blocks/Listing/withQuerystringResults';
import { normalizeString } from '@plone/volto/helpers';

import { Row, Col, Container } from 'design-react-kit';
import { Pagination } from 'io-sanita-theme/components';
import {
  DefaultSkeleton,
  //getPathFiltersButtons,
} from 'io-sanita-theme/components/Blocks';

import config from '@plone/volto/registry';

const Headline = ({ headlineTag, id, data = {}, listingItems, isEditMode }) => {
  if (!data.title) {
    return <></>;
  }

  let attr = { id };
  const slug = Slugger.slug(normalizeString(data.title));
  attr.id = slug || id;

  const LinkedHeadline = useMemo(
    () => renderLinkElement(headlineTag),
    [headlineTag],
  );

  const path_filters_buttons = null; /*getPathFiltersButtons(
    data.show_path_filters,
    data.path_filters,
  );*/

  return (
    (data.title || path_filters_buttons) && (
      <Container
        className={!data.show_block_bg || isEditMode ? 'px-0' : 'px-4'}
      >
        <Row
          className={cx('template-header', {
            'with-filters': path_filters_buttons,
          })}
        >
          {data.title && (
            <Col md={path_filters_buttons ? 6 : 12}>
              <LinkedHeadline
                mode={!isEditMode && 'view'}
                children={data.title}
                attributes={attr}
                className={cx('headline', {
                  emptyListing: !listingItems?.length > 0,
                  'mt-5': !data.show_block_bg,
                  'mb-4': !path_filters_buttons,
                })}
              />
            </Col>
          )}
          {path_filters_buttons && (
            <Col md={6}>
              <PathFilters
                {...data}
                additionalFilters={additionalFilters}
                addFilters={addFilters}
              />
            </Col>
          )}
        </Row>
      </Container>
    )
  );
};

const ListingBody = withQuerystringResults((props) => {
  const {
    data = {},
    isEditMode,
    listingItems,
    totalPages,
    onPaginationChange,
    variation,
    currentPage,
    prevBatch,
    nextBatch,
    isFolderContentsListing,
    hasLoaded,
    id,
    block,
    additionalFilters,
    addFilters,
  } = props;

  let ListingBodyTemplate;
  // Legacy support if template is present
  const variations = config.blocks?.blocksConfig['listing']?.variations || [];
  const defaultVariation = variations.filter((item) => item.isDefault)?.[0];
  let SkeletonTemplate = null;

  if (data.template && !data.variation) {
    const legacyTemplateConfig = variations.find(
      (item) => item.id === data.template,
    );
    ListingBodyTemplate = legacyTemplateConfig.template;
  } else {
    ListingBodyTemplate =
      variation?.template ?? defaultVariation?.template ?? null;
    SkeletonTemplate =
      variation?.skeleton ?? defaultVariation.skeleton ?? DefaultSkeleton;
  }

  const listingRef = createRef();

  const NoResults = variation?.noResultsComponent
    ? variation.noResultsComponent
    : config.blocks?.blocksConfig['listing'].noResultsComponent;

  const HeadlineTag = data.headlineTag || 'h2';

  // Props have different locations in seachBlock
  // Also need to purge title from searchblock schema, it's the name of the listing template used
  const listingBodyProps =
    variation?.['@type'] == 'search'
      ? { ...variation, title: data.title }
      : data;

  // const listingBodyProps =
  // variation?.['@type'] !== 'search'
  //   ? { data, ...variation, title: data.title }
  //   : { ...variation, title: data.title };

  return (
    <div className="public-ui">
      {!hasLoaded && (
        <div ref={listingRef}>
          <SkeletonTemplate {...listingBodyProps} />
        </div>
      )}
      {
        hasLoaded && listingItems.length > 0 ? (
          <>
            <Headline
              headlineTag={HeadlineTag}
              id={id}
              listingItems={listingItems}
              data={data}
              isEditMode={isEditMode}
              additionalFilters={additionalFilters}
              addFilters={addFilters}
            />
            <div
              ref={listingRef}
              aria-live="polite"
              className="listing-results"
            >
              <ListingBodyTemplate
                items={listingItems}
                isEditMode={isEditMode}
                block={block}
                {...listingBodyProps}
              />
              {totalPages > 1 && (
                <div className="pagination-wrapper">
                  <Pagination
                    activePage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(e, { activePage }) => {
                      let page = activePage.children;
                      if (!page) {
                        if (activePage.type == 'prevItem') {
                          page = currentPage - 1;
                          if (page === 0) {
                            page = 1;
                          }
                        }
                        if (activePage.type == 'nextItem') {
                          page = currentPage + 1;
                          if (page > totalPages) {
                            page = totalPages;
                          }
                        }
                      }

                      if (!isEditMode && page != currentPage) {
                        listingRef.current.scrollIntoView({
                          behavior: 'smooth',
                        });
                      }
                      onPaginationChange(e, {
                        activePage: page,
                      });
                    }}
                  />
                </div>
              )}
            </div>
          </>
        ) : isEditMode ? (
          <div className="listing message" aria-live="polite" ref={listingRef}>
            {isFolderContentsListing && (
              <FormattedMessage
                id="No items found in this container."
                defaultMessage="No items found in this container."
              />
            )}
            {hasLoaded && NoResults && (
              <NoResults isEditMode={isEditMode} {...data} />
            )}
          </div>
        ) : (
          <></>
        )
        // (
        //   <div className="emptyListing">
        //     {hasLoaded && NoResults && (
        //       <NoResults isEditMode={isEditMode} {...data} />
        //     )}
        //     <Dimmer active={!hasLoaded} inverted>
        //       <Loader indeterminate size="small">
        //         <FormattedMessage id="loading" defaultMessage="Loading" />
        //       </Loader>
        //     </Dimmer>
        //   </div>
        // )
      }
    </div>
  );
});

export default injectIntl(ListingBody);
