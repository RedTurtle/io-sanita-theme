import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  orari_ricevimento: {
    id: 'persona_orari_ricevimento',
    defaultMessage: 'Orari di ricevimento',
  },
});

const PersonaOrariRicevimento = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content?.orari_ricevimento) ? (
    <RichTextSection
      data={content.orari_ricevimento}
      tag_id="orari_ricevimento"
      title={intl.formatMessage(messages.orari_ricevimento)}
    />
  ) : null;
};

export default PersonaOrariRicevimento;
