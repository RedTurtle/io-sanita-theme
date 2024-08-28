import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  biografia: {
    id: 'persona_biografia',
    defaultMessage: 'Biografia',
  },
});

const PersonaBiografia = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content?.biografia) ? (
    <RichTextSection
      data={content.biografia}
      tag_id="biografia"
      title={intl.formatMessage(messages.biografia)}
    />
  ) : null;
};

export default PersonaBiografia;
