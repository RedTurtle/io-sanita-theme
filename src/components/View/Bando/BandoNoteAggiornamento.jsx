import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  note_aggiornamento: {
    id: 'bando_note_aggiornamento',
    defaultMessage: 'Note di aggiornamento',
  },
});

const BandoNoteAggiornamento = ({ content }) => {
  const intl = useIntl();
  return content?.note_aggiornamento ? (
    <div className="mb-4">
      <h2 clasName="h5">
        <small>{intl.formatMessage(messages.note_aggiornamento)}</small>
      </h2>
      <span>{content?.note_aggiornamento}</span>
    </div>
  ) : (
    <></>
  );
};

BandoNoteAggiornamento.propTypes = {
  content: PropTypes.shape({
    note_aggiornamento: PropTypes.shape(PropTypes.string),
  }).isRequired,
};
export default BandoNoteAggiornamento;
