import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Icon } from 'io-sanita-theme/components';
import { BandoStatus } from 'io-sanita-theme/components/View/Bando';

/**
 * PageHeaderBando view component class.
 * @function PageHeaderBando
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  bando: {
    id: 'Bando',
    defaultMessage: 'Bando',
  },
});

const PageHeaderBando = ({ content }) => {
  const intl = useIntl();

  return content['@type'] === 'Bando' ? (
    <BandoStatus content={content} style="chip" />
  ) : null;
};

export default PageHeaderBando;

PageHeaderBando.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
    readingtime: PropTypes.string,
    showreadingtime: PropTypes.bool,
    imageinheader: PropTypes.bool,
    imageinheader_field: PropTypes.string,
    showdates: PropTypes.bool,
  }),
};
