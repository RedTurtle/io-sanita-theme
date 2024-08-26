import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  cosa_serve: {
    id: 'servizio_cosa_serve',
    defaultMessage: 'Cosa serve',
  },
});

const ServizioCosaServe = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content?.cosa_serve) ? (
    <RichTextSection
      data={content.cosa_serve}
      tag_id="cosa_serve"
      title={intl.formatMessage(messages.cosa_serve)}
    />
  ) : null;
};

export default ServizioCosaServe;
