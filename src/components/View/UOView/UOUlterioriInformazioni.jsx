import React from 'react';
import {
  richTextHasContent,
  RichText,
  RichTextSection,
} from 'io-sanita-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  other_info: {
    id: 'other_info',
    defaultMessage: 'Ulteriori informazioni',
  },
  come_accedere: {
    id: 'struttura_come_accedere',
    defaultMessage: 'Come accedere',
  },
});

const UOUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();
  const has_richTextUlteriori = richTextHasContent(
    content?.ulteriori_informazioni,
  );
  const has_come_accedere = richTextHasContent(content?.come_accedere);
  return has_richTextUlteriori || has_come_accedere ? (
    <RichTextSection
      tag_id="more_info"
      title={intl.formatMessage(messages.other_info)}
      anchorOffset={true}
    >
      {content.ulteriori_informazioni && (
        <RichText data={content.ulteriori_informazioni} />
      )}
      {content.come_accedere && (
        <div className="mt-4">
          <h3>{intl.formatMessage(messages.come_accedere)}</h3>
          <RichText data={content.come_accedere} />
        </div>
      )}
    </RichTextSection>
  ) : null;
};

export default UOUlterioriInformazioni;
