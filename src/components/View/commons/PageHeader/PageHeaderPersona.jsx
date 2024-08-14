import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

/**
 * PageHeaderPersona view component class.
 * @function PageHeaderPersona
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  incarico: {
    id: 'incarico',
    defaultMessage: 'Incarico',
  },
});

const PageHeaderPersona = ({ content }) => {
  const intl = useIntl();

  return content['@type'] === 'Persona' ? (
    <>
      {content?.incarico?.title && (
        <p className="subtitle">
          <strong>{content.incarico.title}</strong>
        </p>
      )}
    </>
  ) : null;
};

export default PageHeaderPersona;

PageHeaderPersona.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
