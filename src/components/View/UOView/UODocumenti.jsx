import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Attachments } from 'io-sanita-theme/components/View/commons';
import { CardFile } from 'io-sanita-theme/components';
import { RichTextSection, contentFolderHasItems } from 'io-sanita-theme/helpers';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  documenti: {
    id: 'uo_documenti',
    defaultMessage: 'Documenti',
  },
  attachments: {
    id: 'uo_attachments',
    defaultMessage: 'Allegati',
  },
});

const UODocumenti = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {(contentFolderHasItems(content, 'allegati') ||
        content.documenti?.length > 0) && (
          <RichTextSection
            tag_id="documenti"
            title={intl.formatMessage(messages.documenti)}
          >
            {/* DOCUMENTI UFFICIALI */}
            {content.documenti?.length > 0 && (
              <Row className="attachments mb-4">
                {content?.documenti.map((item, _i) => (
                  <Col lg={6} className="py-lg-2" key={item['@id']}>
                    <CardFile item={item} />
                  </Col>
                ))}
              </Row>
            )}

            {/* ALLEGATI */}
            {(contentFolderHasItems(content, 'allegati')) && (
                <Attachments
                content={content}
                folder_name={'allegati'}
                as_section={false}
                title={intl.formatMessage(messages.attachments)}
              />
            )}
          </RichTextSection>
        )}
      </>
  );
};

export default UODocumenti;
