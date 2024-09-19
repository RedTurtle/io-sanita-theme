import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Attachments } from 'io-sanita-theme/components/View/commons';
import {
  RichTextSection,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  documenti: {
    id: 'persona_documenti',
    defaultMessage: 'Documenti',
  },
  cv: {
    id: 'persona_cv',
    defaultMessage: 'Curriculum Vitae',
  },
});

const PersonaDocumenti = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {(contentFolderHasItems(content, 'curriculum-vitae') ||
        contentFolderHasItems(content, 'allegati')) && (
        <RichTextSection
          tag_id="documenti"
          title={intl.formatMessage(messages.documenti)}
        >
          {/* ALTRI DOCUMENTI */}
          {contentFolderHasItems(content, 'allegati') && (
            <Attachments
              content={content}
              folder_name={'allegati'}
              as_section={false}
            />
          )}

          {/* CURRICULUM VITAE */}
          {contentFolderHasItems(content, 'curriculum-vitae') && (
            <Attachments
              content={content}
              folder_name={'curriculum-vitae'}
              as_section={false}
              title={intl.formatMessage(messages.cv)}
            />
          )}
        </RichTextSection>
      )}
    </>
  );
};

export default PersonaDocumenti;
