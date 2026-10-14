/**
 * File view component.
 * @module components/theme/View/FileView
 *
 * original: https://raw.githubusercontent.com/plone/volto/19.4.1/packages/volto/src/components/theme/View/FileView.jsx
 *
 * Customizations:
 * - changed card layout
 * - decodeURI filename, falling back to the raw one when it is malformed
 */

import { Col, Container, Row } from 'design-react-kit';

import { DownloadFileFormat } from 'io-sanita-theme/helpers';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const displayFilename = (filename) => {
  try {
    return decodeURI(filename);
  } catch (e) {
    // a stray "%" in the name makes decodeURI throw
    return filename;
  }
};

/**
 * File view component class.
 * @function FileView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const FileView = ({ content }) => (
  <Container className="view-wrapper px-4 my-4">
    <Row className="header-row">
      <Col>
        <h1 className="documentFirstHeading">
          {content.title}
          {content.subtitle && ` - ${content.subtitle}`}
        </h1>
        {content.description && (
          <p className="documentDescription">{content.description}</p>
        )}
      </Col>
    </Row>

    {content.file?.download && (
      <Row className="content-row">
        <Col className="card-wrapper card-teaser-wrapper">
          <div className="genericcard card card-teaser shadow p-4 mt-3 rounded">
            <div className="card-body">
              <h2 className="card-title h5">
                {content.file.filename ? (
                  displayFilename(content.file.filename)
                ) : (
                  <FormattedMessage
                    id="Download file"
                    defaultMessage="Download file"
                  />
                )}
              </h2>
              <DownloadFileFormat file={content.file} iconSize="2x" />
            </div>
          </div>
        </Col>
      </Row>
    )}
  </Container>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
FileView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    file: PropTypes.shape({
      download: PropTypes.string,
      filename: PropTypes.string,
    }),
  }).isRequired,
};

export default FileView;
