import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { CardFile } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  documento_doc: {
    id: 'documento_doc',
    defaultMessage: 'Vai al documento',
  },
  documento_formati: {
    id: 'documento_formati',
    defaultMessage: 'Formati alternativi',
  },
});

const DocumentoDocumenti = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {(content?.file ||
       content?.formato_alternativo_1 ||
       content?.formato_alternativo_2) && (
          <RichTextSection
            tag_id="documenti"
            title={intl.formatMessage(messages.documento_doc)}
          >
            <div className="attachments mb-5">
              {/* DOCUMENTO PRINCIPALE */}
              {content?.file && (
                <Row className="mb-4">
                  <Col lg={6} className="py-lg-2">
                    <CardFile item={content} file={content.file} />
                  </Col>
                </Row>
              )}

            {/* FORMATI ALTERNATIVI */}
            {(content?.formato_alternativo_1 ||
              content?.formato_alternativo_2) && (
              <>
                <h3 className="h5 mb-2">
                  {intl.formatMessage(messages.documento_formati)}
                </h3>
                <Row>
                  {content?.formato_alternativo_1 && (
                    <Col lg={6} className="py-lg-2">
                      <CardFile
                        item={content}
                        file={content.formato_alternativo_1}
                        showDescription={false}
                      />
                    </Col>
                  )}

                  {content?.formato_alternativo_2 && (
                    <Col lg={6} className="py-lg-2">
                      <CardFile
                        item={content}
                        file={content.formato_alternativo_2}
                        showDescription={false}
                      />
                    </Col>
                  )}
                </Row>
              </>
            )}
            </div>
          </RichTextSection>
        )}
      </>
  );
};

export default DocumentoDocumenti;
