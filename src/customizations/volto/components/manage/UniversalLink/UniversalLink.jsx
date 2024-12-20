/*
 * UniversalLink
 * @module components/UniversalLink
 *
 * CUSTOMIZATIONS:
 * - aggiunto icona per link esterni
 * - aggiunto title informativo per link esterni
 * - aggiunta condizione per non avere un duplicato di @@download/file p @@display-file/file, perchè su io-sanità arriva dal BE anche per gli anonimi
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
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

const UniversalLink = ({
  href,
  item = null,
  openLinkInNewTab,
  download = false,
  children,
  className = null,
  title = null,
  overrideMarkSpecialLinks = false,
  ...props
}) => {
  const intl = useIntl();
  const token = useSelector((state) => state.userSession?.token);
  const { openExternalLinkInNewTab } = config.settings;

  let url = href;
  if (!href && item) {
    if (!item['@id']) {
      // eslint-disable-next-line no-console
      console.error(
        'Invalid item passed to UniversalLink',
        item,
        props,
        children,
      );
      url = '#';
    } else {
      //case: generic item
      url = flattenToAppURL(item['@id']);

      //case: item like a Link
      let remoteUrl = item.remoteUrl || item.getRemoteUrl;
      if (!token && remoteUrl) {
        url = remoteUrl;
      }

      //case: item of type 'File'
      if (
        !token &&
        config.settings.downloadableObjects.includes(item['@type']) &&
        url.indexOf('@@download') < 0 //aggiunta condizione per non avere un duplicato di @@download/file, perchè su io-sanità arriva dal BE anche per gli anonimi
      ) {
        url = `${url}/@@download/file`;
      }

      if (
        !token &&
        config.settings.viewableInBrowserObjects.includes(item['@type']) &&
        url.indexOf('@@display-file') < 0 //aggiunta condizione per non avere un duplicato di @@display-file/file, perchè su io-sanità arriva dal BE anche per gli anonimi
      ) {
        url = `${url}/@@display-file/file`;
      }
    }
  }

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
      target={openLinkInNewTab ?? false ? '_blank' : null}
      title={title}
      className={className}
      smooth={config.settings.hashLinkSmoothScroll}
      {...props}
    >
      {children}
    </Link>
  );

  if (isExternal) {
    const openInNewTab =
      openLinkInNewTab === null || openLinkInNewTab === undefined
        ? openExternalLinkInNewTab
        : openLinkInNewTab;

    tag = (
      <a
        href={url}
        title={`${title ? title + ' - ' : ''}${intl.formatMessage({
          id: 'opensInNewTab',
          defaultMessage: 'Apri in un nuovo tab',
        })}`}
        target={
          !checkedURL.isMail && !checkedURL.isTelephone && openInNewTab
            ? '_blank'
            : null
        }
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
        {!overrideMarkSpecialLinks &&
          config.settings.siteProperties.markSpecialLinks && (
            <Icon
              icon="it-external-link"
              title={`${title ? title + ' - ' : ''}${intl.formatMessage({
                id: 'opensInNewTab',
                defaultMessage: 'Apri in un nuovo tab',
              })}`}
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
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  } else if (isDisplayFile) {
    tag = (
      <a
        href={flattenToAppURL(url)}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }
  return tag;
};

UniversalLink.propTypes = {
  href: PropTypes.string,
  openLinkInNewTab: PropTypes.bool,
  download: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
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
