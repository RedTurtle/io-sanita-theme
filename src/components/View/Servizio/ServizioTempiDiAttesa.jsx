import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  tempi_attesa: {
    id: 'servizio_tempi_attesa',
    defaultMessage: 'Tempi di attesa',
  },
});

const ServizioTempiDiAttesa = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content?.tempi_attesa) ? (
    <RichTextSection
      data={content.tempi_attesa}
      tag_id="tempi_attesa"
      title={intl.formatMessage(messages.tempi_attesa)}
    />
  ) : null;
};

export default ServizioTempiDiAttesa;
