/*Customizations:
- added container
- added ConditionalEmbed
*/

import React from 'react';
import PropTypes from 'prop-types';
import { ConditionalEmbed } from 'volto-gdpr-privacy';

const View = ({ data, className }) => (
  <div className={`block html ${className}`}>
    <ConditionalEmbed code={data.html}>
      <div
        className="container p-4"
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </ConditionalEmbed>
  </div>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
