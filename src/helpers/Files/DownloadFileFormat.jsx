import React from 'react';
import PropTypes from 'prop-types';

import { flattenToAppURL } from '@plone/volto/helpers';

import { FileIcon } from 'io-sanita-theme/helpers';

const DownloadFileFormat = ({
  file,
  formatsize = '2x',
  className,
  showLabel = false,
}) => {
  const pdfFile = file?.download?.includes('@@display-file');

  return file ? (
    <a
      href={flattenToAppURL(file.download)}
      title={file.filename}
      className={className}
      target={pdfFile ? '_blank' : '_self'}
      rel={pdfFile ? 'noopener noreferrer' : ''}
    >
      <FileIcon item={file} size={formatsize} showLabel={showLabel} />
    </a>
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
