import React from 'react';
import PropTypes from 'prop-types';

// import { Attachments } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const NewsItemDocumenti = ({ content }) => {
  // return <Attachments content={content} folder_name={'documenti-allegati'} />;
};

NewsItemDocumenti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemDocumenti;
