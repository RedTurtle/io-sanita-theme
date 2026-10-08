/*
 * UniversalLink
 * @module components/UniversalLink
 *
 * original: https://raw.githubusercontent.com/plone/volto/19.4.1/packages/volto/src/components/manage/UniversalLink/UniversalLink.tsx
 *
 * CUSTOMIZATIONS:
 * - kept in JSX: upstream's structure (getUrl, React.memo + React.forwardRef)
 *   is mirrored, its TypeScript types and __test render counter are not
 * - getUrl: an empty href falls back to the item (upstream returns it as is),
 *   because some listings pass href='' together with an item in view mode
 * - getUrl: @@download/file and @@display-file/file are not appended when the
 *   URL already contains either, because the io-sanita backend returns them
 *   to anonymous users too
 * - external links get an icon and an informative "opens in a new tab" title,
 *   unless overrideMarkSpecialLinks is set or markSpecialLinks is disabled
 * - external links open in a new tab according to
 *   config.settings.openExternalLinkInNewTab when openLinkInNewTab is not set,
 *   and don't get upstream's "external" class
 * - URLs matching config.settings.externalRoutes are treated as external
 * - onClick and onKeyDown reach every rendered tag (upstream forwards onClick
 *   to the internal Link only and drops onKeyDown)
 * - intl is read with useContext(IntlContext): unlike useIntl, it doesn't
 *   throw when no IntlProvider is mounted
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, IntlContext } from 'react-intl';
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import { matchPath } from 'react-router';
import {
  flattenToAppURL,
  isInternalURL,
  URLUtils,
} from '@plone/volto/helpers/Url/Url';

import { Icon } from 'io-sanita-theme/components';

import config from '@plone/volto/registry';

const messages = defineMessages({
  opensInNewTab: {
    id: 'opensInNewTab',
    defaultMessage: 'Apri in un nuovo tab',
  },
});

const hasFileSuffix = (url) =>
  url.includes('@@download') || url.includes('@@display-file');

export function getUrl(props, token, item, children) {
  if (typeof props.href === 'string' && (props.href || !item)) {
    return props.href;
  }

  if (!item || item['@id'] === '') return config.settings.publicURL;
  if (!item['@id']) {
    // eslint-disable-next-line no-console
    console.error(
      'Invalid item passed to UniversalLink',
      item,
      props,
      children,
    );
    return '#';
  }

  let url = flattenToAppURL(item['@id']);
  const remoteUrl = item.remoteUrl || item.getRemoteUrl;

  if (!token && remoteUrl) {
    url = remoteUrl;
  }

  if (
    !token &&
    item['@type'] &&
    config.settings.downloadableObjects.includes(item['@type']) &&
    !hasFileSuffix(url)
  ) {
    url = `${url}/@@download/file`;
  }

  if (
    !token &&
    item['@type'] &&
    config.settings.viewableInBrowserObjects.includes(item['@type']) &&
    !hasFileSuffix(url)
  ) {
    url = `${url}/@@display-file/file`;
  }

  return url;
}

const UniversalLink = React.memo(
  React.forwardRef(function UniversalLink(props, ref) {
    const {
      openLinkInNewTab,
      download,
      children,
      className,
      title,
      smooth,
      item,
      href,
      overrideMarkSpecialLinks = false,
      ...rest
    } = props;

    const intl = useContext(IntlContext);
    const token = useSelector((state) => state.userSession?.token);

    let url = getUrl(props, token, item, children);

    const isBlacklisted =
      (config.settings.externalRoutes ?? []).find((route) =>
        matchPath(flattenToAppURL(url), route.match),
      )?.length > 0;
    const isExternal = !isInternalURL(url) || isBlacklisted;

    const isDownload = (!isExternal && url.includes('@@download')) || download;
    const isDisplayFile =
      (!isExternal && url.includes('@@display-file')) || false;

    const checkedURL = URLUtils.checkAndNormalizeUrl(url);

    url = checkedURL.url;
    let tag = (
      <Link
        to={flattenToAppURL(url)}
        target={openLinkInNewTab ?? false ? '_blank' : undefined}
        title={title}
        className={className}
        smooth={smooth ?? config.settings.hashLinkSmoothScroll}
        ref={ref}
        {...rest}
      >
        {children}
      </Link>
    );

    if (isExternal) {
      const openInNewTab =
        openLinkInNewTab ?? config.settings.openExternalLinkInNewTab;
      const externalTitle = `${title ? title + ' - ' : ''}${
        intl
          ? intl.formatMessage(messages.opensInNewTab)
          : messages.opensInNewTab.defaultMessage
      }`;

      tag = (
        <a
          href={url}
          title={externalTitle}
          target={
            !checkedURL.isMail && !checkedURL.isTelephone && openInNewTab
              ? '_blank'
              : undefined
          }
          rel="noopener noreferrer"
          {...rest}
          className={className}
          ref={ref}
        >
          {children}
          {!overrideMarkSpecialLinks &&
            config.settings.siteProperties.markSpecialLinks && (
              <Icon
                icon="it-external-link"
                title={externalTitle}
                size="xs"
                className="ms-1 align-sub external-link"
              />
            )}
        </a>
      );
    } else if (isDownload) {
      tag = (
        <a
          href={flattenToAppURL(url)}
          download
          title={title}
          {...rest}
          className={className}
          ref={ref}
        >
          {children}
        </a>
      );
    } else if (isDisplayFile) {
      tag = (
        <a
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
          href={flattenToAppURL(url)}
          className={className}
          ref={ref}
        >
          {children}
        </a>
      );
    }
    return tag;
  }),
);

UniversalLink.propTypes = {
  href: PropTypes.string,
  openLinkInNewTab: PropTypes.bool,
  download: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  smooth: PropTypes.bool,
  overrideMarkSpecialLinks: PropTypes.bool,
  item: PropTypes.shape({
    '@id': PropTypes.string.isRequired,
    remoteUrl: PropTypes.string, //of plone @type 'Link'
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default UniversalLink;
