import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  other_info: {
    id: 'other_info',
    defaultMessage: 'Ulteriori informazioni',
  },
});

const BandoUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.riferimenti_bando) ? (
    <RichTextSection
      data={content.riferimenti_bando}
      tag_id="more_info"
      title={intl.formatMessage(messages.other_info)}
      anchorOffset={true}
    />
  ) : null;
};

export default BandoUlterioriInformazioni;
