import React from 'react';
import PropTypes from 'prop-types';


import { Attachments } from 'io-sanita-theme/components/View/commons';

const NewsItemDocumenti = ({ content }) => {
  return <Attachments content={content} folder_name={'documenti-allegati'} />;
};

NewsItemDocumenti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemDocumenti;
