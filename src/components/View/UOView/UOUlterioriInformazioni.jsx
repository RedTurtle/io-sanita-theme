import React from 'react';
import { richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';

const UOUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.ulteriori_informazioni) ? (
    <RichTextSection
      data={content.ulteriori_informazioni}
      tag_id="more-info"
      title={intl.formatMessage(messages.other_info)}
      anchorOffset={true}
    />
  ) : null;
};

export default UOUlterioriInformazioni;

const messages = defineMessages({
  other_info: {
    id: 'other_info',
    defaultMessage: 'Ulteriori informazioni',
  },
});
