import React from 'react';
import PropTypes from 'prop-types';

/**
 * PageHeaderPersona view component class.
 * @function PageHeaderPersona
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const PageHeaderPersona = ({ content }) => {
  if(content['@type'] !== 'Persona'){
    return null;
  }
  
  const role = content.incarico?.title && content.incarico.title.split('»').pop().trim();

  return role?(
   
        <p className="subtitle">
          <strong>{role}</strong>
        </p>
    
  ):null;
};

export default PageHeaderPersona;

PageHeaderPersona.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
