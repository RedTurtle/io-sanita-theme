import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { CardFile } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  documenti: {
    id: 'documento_documenti',
    defaultMessage: 'File e collegamenti',
  },
});

const DocumentoDocumenti = ({ content }) => {
  const intl = useIntl();
  const moduli = content.items?.filter((item) => item.id !== 'immagini') ?? [];

  return (
    <>
      {moduli.length > 0 && (
        <RichTextSection
          tag_id="elenco_documenti"
          title={intl.formatMessage(messages.documenti)}
        >
          <div className="attachments mb-5">
            <Row className="mb-4">
              {moduli.map((modulo) => (
                <Col lg={6} className="py-lg-2" key={modulo['@id']}>
                  <CardFile item={modulo} />
                </Col>
              ))}
            </Row>
          </div>
        </RichTextSection>
      )}
    </>
  );
};

export default DocumentoDocumenti;
