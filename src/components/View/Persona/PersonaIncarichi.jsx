import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  altri_incarichi: {
    id: 'persona_altri_incarichi',
    defaultMessage: 'Incarichi',
  },
});

const PersonaIncarichi = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content?.altri_incarichi) ? (
    <RichTextSection
      data={content.altri_incarichi}
      tag_id="altri_incarichi"
      title={intl.formatMessage(messages.altri_incarichi)}
    />
  ) : null;
};

export default PersonaIncarichi;
