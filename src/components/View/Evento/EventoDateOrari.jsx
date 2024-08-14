import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import {
  RichText,
  richTextHasContent,
  RichTextSection,
} from 'io-sanita-theme/helpers';

import { Dates } from 'io-sanita-theme/components/View/Evento';

const messages = defineMessages({
  date_e_orari: {
    id: 'evento_date_e_orari',
    defaultMessage: 'Date e orari',
  },
  orari: {
    id: 'evento_orari',
    defaultMessage: 'Orari',
  },
});

const EventoDateOrari = ({ content }) => {
  const intl = useIntl();

  return (
    <RichTextSection
      tag_id="date_e_orari"
      title={intl.formatMessage(messages.date_e_orari)}
    >
      <Dates content={content} />
      {richTextHasContent(content.orari) && (
        <RichText
          title={intl.formatMessage(messages.orari)}
          data={content.orari}
        />
      )}
    </RichTextSection>
  );
};

EventoDateOrari.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoDateOrari;
