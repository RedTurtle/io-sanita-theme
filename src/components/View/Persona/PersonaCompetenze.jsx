import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  competenze: {
    id: 'persona_competenze',
    defaultMessage: 'Competenze',
  },
});

const PersonaCompetenze = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content?.competenze) ? (
    <RichTextSection
      data={content.competenze}
      tag_id="competenze"
      title={intl.formatMessage(messages.competenze)}
    />
  ) : null;
};

export default PersonaCompetenze;
