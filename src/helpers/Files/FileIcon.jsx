import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from '@plone/volto/components';
import { FontAwesomeIcon as IconFA } from 'io-sanita-theme/components';
import { getFileViewFormat } from 'io-sanita-theme/helpers';

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

const FileIcon = ({
  item,
  size = '2x',
  showLabel = false,
  fileFormat = false,
}) => {
  const intl = useIntl();
  const defaultIcon = { lib: 'far', name: 'file-lines', svg_format: false };
  let label = intl.formatMessage(messages.download_file);
  let icon = defaultIcon;
  let file = item;

  if (!fileFormat) {
    if (item['@type'] === 'File' && item.file) {
      file = item.file;
    } else if (item['@type'] === 'Image' && item.image) {
      file = item.image;
    }
  }

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
    <>
      {!icon.svg_format ? (
        <IconFA
          icon={[icon.lib, icon.name]}
          alt={file.filename}
          title={file.filename}
          color="accent"
        />
      ) : (
        <Icon className="icon-svg-custom icon-accent" name={icon.name} />
      )}
      {showLabel && <span className="ms-4">{label}</span>}
    </>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
FileIcon.propTypes = {
  file: PropTypes.shape({
    'content-type': PropTypes.string,
    download: PropTypes.string,
    filename: PropTypes.string,
    size: PropTypes.number,
  }),
  size: PropTypes.string,
};

export default FileIcon;
