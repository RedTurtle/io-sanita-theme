import React from 'react';
import PropTypes from 'prop-types';

import {
  ModuloFilePrincipale,
  ModuloFormatiAlternativi,
} from 'io-sanita-theme/components/View/Modulo';

const ModuloFiles = ({ content }) => {
  return (
    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
      <ModuloFilePrincipale content={content} />
      <ModuloFormatiAlternativi content={content} />
    </div>
  );
};

ModuloFiles.propTypes = {
  content: PropTypes.shape({
    file_principale: PropTypes.object,
    formato_alternativo_1: PropTypes.object,
    formato_alternativo_2: PropTypes.object,
  }).isRequired,
};

export default ModuloFiles;
