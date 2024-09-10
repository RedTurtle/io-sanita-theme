import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  ente: {
    id: 'bando_ente',
    defaultMessage: 'Ente erogatore',
  },
});

const BandoEnte = ({ content }) => {
  const intl = useIntl();
  return content?.ente_bando?.length > 0 ? (
    <div className="mb-3">
      <h3 className="h5">{intl.formatMessage(messages.ente)}</h3>
      {content.ente_bando.map((item, i) => (
        <span key={'ente_' + i}>
          {item}
          {i < content.ente_bando.length - 1 ? ', ' : ''}
        </span>
      ))}
    </div>
  ) : (
    <></>
  );
};

BandoEnte.propTypes = {
  content: PropTypes.shape({
    ente_bando: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
export default BandoEnte;
