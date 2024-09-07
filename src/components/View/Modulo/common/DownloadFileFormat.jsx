import React from 'react';
import PropTypes from 'prop-types';

import { flattenToAppURL } from '@plone/volto/helpers';
import { defineMessages, useIntl } from 'react-intl';
import { Icon, UniversalLink } from '@plone/volto/components';
import { getFileViewFormat } from 'io-sanita-theme/helpers';
import { FontAwesomeIcon as IconFA } from 'io-sanita-theme/components';

const messages = defineMessages({
  download_in_format: {
    id: 'modulo_download_in_format',
    defaultMessage: 'Scarica in formato',
  },
  download_file: {
    id: 'modulo_download_file',
    defaultMessage: 'Scarica il file',
  },
});

const DownloadFileFormat = ({
  file,
  formatsize = '2x',
  className,
  showLabel = false,
  title,
  hideFileFormatLabel = false,
}) => {
  const intl = useIntl();
  const defaultIcon = { lib: 'far', name: 'file', svg_format: false };
  let label = intl.formatMessage(messages.download_file);
  let icon = null;

  if (file) {
    const viewFormat = getFileViewFormat(file);

    label = viewFormat?.label
      ? `${intl.formatMessage(messages.download_in_format)} ${
          viewFormat?.label
        }`
      : intl.formatMessage(messages.download_file);

    icon = viewFormat?.icon ?? defaultIcon;
  }

  return file ? (
    <UniversalLink
      item={{
        ...file,
        ['@id']: file.download,
      }}
      title={file.filename}
      className={className}
      aria-label={(title ?? file.filename) + ': ' + label}
      hideFileFormat={hideFileFormatLabel}
    >
      {showLabel && <span className="me-4">{label}</span>}

      {!icon.svg_format ? (
        <IconFA
          icon={[icon.lib, icon.name]}
          alt={file.filename}
          title={file.filename}
          size={formatsize}
          color="accent"
        />
      ) : (
        <Icon className="icon-svg-custom icon-accent" name={icon.name} />
      )}
    </UniversalLink>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
DownloadFileFormat.propTypes = {
  file: PropTypes.shape({
    'content-type': PropTypes.string,
    download: PropTypes.string,
    filename: PropTypes.string,
    size: PropTypes.number,
  }),
};

export default DownloadFileFormat;
