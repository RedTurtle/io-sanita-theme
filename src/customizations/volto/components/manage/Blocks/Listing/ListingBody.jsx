/*
CUSTOMIZATIONS:
- added skeleton
- display nothing if no results in view-mode
- pass 'block' prop to listing variation
- italia pagination
*/
import React, { createRef, useMemo } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import cx from 'classnames';

import Slugger from 'github-slugger';

import { renderLinkElement } from '@plone/volto-slate/editor/render';
import withQuerystringResults from '@plone/volto/components/manage/Blocks/Listing/withQuerystringResults';
import { normalizeString } from '@plone/volto/helpers';

import { Pagination } from 'io-sanita-theme/components';
import { DefaultSkeleton } from 'io-sanita-theme/components/Blocks';

import config from '@plone/volto/registry';

const Headline = ({ headlineTag, id, data = {}, listingItems, isEditMode }) => {
  let attr = { id };
  const slug = Slugger.slug(normalizeString(data.headline));
  attr.id = slug || id;
  const LinkedHeadline = useMemo(
    () => renderLinkElement(headlineTag),
    [headlineTag],
  );
  return (
    <LinkedHeadline
      mode={!isEditMode && 'view'}
      children={data.headline}
      attributes={attr}
      className={cx('headline', {
        emptyListing: !listingItems?.length > 0,
      })}
    />
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
    variation?.['@type'] !== 'search'
      ? data
      : { ...variation, title: data.title };

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
            {data.headline && (
              <Headline
                headlineTag={HeadlineTag}
                id={id}
                listingItems={listingItems}
                data={data}
                isEditMode={isEditMode}
              />
            )}

            <div ref={listingRef} aria-live="polite">
              <ListingBodyTemplate
                items={listingItems}
                isEditMode={isEditMode}
                block={block}
                {...listingBodyProps}
                {...variation}
              />
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