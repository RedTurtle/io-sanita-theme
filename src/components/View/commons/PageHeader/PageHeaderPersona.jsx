import React from 'react';
import PropTypes from 'prop-types';

/**
 * PageHeaderPersona view component class.
 * @function PageHeaderPersona
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const PageHeaderPersona = ({ content }) => {
  const lastRoleName = content.incarico.title.split('»').pop().trim();

  return content['@type'] === 'Persona' ? (
    <>
      {content?.incarico?.title && (
        <p className="subtitle">
          <strong>{lastRoleName}</strong>
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
