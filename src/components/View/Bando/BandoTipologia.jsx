import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  tipologia_bando: {
    id: 'tipologia_bando',
    defaultMessage: 'Tipologia del bando',
  },
});

const BandoTipologia = ({ content }) => {
  const intl = useIntl();
  return content?.tipologia_bando ? (
    <div className="mb-3">
      <h3 className="h5">{intl.formatMessage(messages.tipologia_bando)}</h3>
      <span>{content.tipologia_bando.title}</span>
    </div>
  ) : (
    <></>
  );
};

BandoTipologia.propTypes = {
  content: PropTypes.shape({
    tipologia_bando: PropTypes.shape({
      title: PropTypes.string,
      token: PropTypes.string,
    }),
  }).isRequired,
};
export default BandoTipologia;
