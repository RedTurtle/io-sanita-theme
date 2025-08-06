/* CUSTOMIZATIONS:
  - Agid styling
  - Add class .block.listing in listing body container div to use
    existing listing template styles
*/

import React, { useState, useEffect } from 'react';

import ListingBody from '@plone/volto/components/manage/Blocks/Listing/ListingBody';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';

import config from '@plone/volto/registry';
import cx from 'classnames';
import {
  withSearch,
  withQueryString,
} from '@plone/volto/components/manage/Blocks/Search/hocs';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  downloadInFormat: {
    id: 'downloadInFormat',
    defaultMessage: 'download in formato',
  },
});

const getListingBodyVariation = (data) => {
  const { variations } = config.blocks.blocksConfig.listing;

  let variation = data.listingBodyTemplate
    ? variations.find(({ id }) => id === data.listingBodyTemplate)
    : variations.find(({ isDefault }) => isDefault);

  if (!variation) variation = variations[0];

  return variation;
};

const isfunc = (obj) => isFunction(obj) || typeof obj === 'function';

const _filtered = (obj) =>
  Object.assign(
    {},
    ...Object.keys(obj).map((k) => {
      const reject = k !== 'properties' && !isfunc(obj[k]);
      return reject ? { [k]: obj[k] } : {};
    }),
  );

const blockPropsAreChanged = (prevProps, nextProps) => {
  const prev = _filtered(prevProps);
  const next = _filtered(nextProps);

  return isEqual(prev, next);
};

const applyDefaults = (data, root) => {
  const defaultQuery = [
    {
      i: 'path',
      o: 'plone.app.querystring.operation.string.absolutePath',
      v: root || '/',
    },
  ];
  return {
    ...data,
    sort_on: data?.sort_on || 'effective',
    sort_order: data?.sort_order || 'descending',
    query: data?.query?.length ? data.query : defaultQuery,
  };
};

const SearchBlockView = (props) => {
  // console.log(props);
  const { data, searchData, mode = 'view', variation, path, id } = props;

  const intl = useIntl();
  const Layout =
    variation?.view ||
    config.blocks.blocksConfig.search.variations.find(
      (f) => f.id === 'facetsRightSide',
    );

  const dataListingBodyVariation = getListingBodyVariation(data).id;
  const [selectedView, setSelectedView] = React.useState(
    dataListingBodyVariation,
  );

  // in the block edit you can change the used listing block variation,
  // but it's cached here in the state. So we reset it.
  React.useEffect(() => {
    if (mode !== 'view') {
      setSelectedView(dataListingBodyVariation);
    }
  }, [dataListingBodyVariation, mode]);

  const root = useSelector((state) => state.breadcrumbs.root);
  const listingBodyData = applyDefaults(searchData, root);

  const { variations } = config.blocks.blocksConfig.listing;
  const listingBodyVariation = variations.find(({ id }) => id === selectedView);

  const [downloadUrl, setDownloadUrl] = useState('');

  useEffect(
    () =>
      setDownloadUrl(
        `${path}/searchblock/@@download/${id}.__FORMAT__?${new URLSearchParams({
          ...props.facets,
          search: props.searchText,
          sort_on: props.sortOn,
          sort_order: props.sortOrder,
        })}`,
      ),
    [props.facets, props.sortOn, props.sortOrder, props.searchText],
  );

  if (!Layout) return null;

  return (
    <div className="block search">
      <Layout
        {...props}
        isEditMode={mode === 'edit'}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      >
        {/* Add class .block.listing to benefit from existing listing template styles */}
        <div className="block listing search-results">
          <ListingBody
            variation={{ ...data, ...listingBodyVariation }}
            data={listingBodyData}
            path={props.path}
            isEditMode={mode === 'edit'}
          />
          {downloadUrl && data?.showDownloadActions && (
            <div class="text-right">
              {intl.formatMessage(messages.downloadInFormat)}:{' '}
              <a
                href={downloadUrl.replace('__FORMAT__', 'csv')}
                download
                className="btn btn-xs btn-primary inline-link"
                disabled={!downloadUrl}
              >
                CSV
              </a>{' '}
              <a
                href={downloadUrl.replace('__FORMAT__', 'pdf')}
                download
                className="btn btn-xs btn-primary inline-link"
                disabled={!downloadUrl}
              >
                PDF
              </a>
              {/* <a href={downloadUrl.replace('__FORMAT__', 'html')} className="btn btn-xs btn-primary inline-link">HTML</a> */}
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export const SearchBlockViewComponent = compose(
  withBlockExtensions,
  (Component) => React.memo(Component, blockPropsAreChanged),
)(SearchBlockView);

export default compose(withQueryString, withSearch())(SearchBlockViewComponent);
