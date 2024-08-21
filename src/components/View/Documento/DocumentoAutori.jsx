import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPersona } from 'io-sanita-theme/components';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  autori: {
    id: 'documento_autori',
    defaultMessage: 'Autori',
  },
});

const DocumentoAutori = ({ content }) => {
  const intl = useIntl();

  return content?.autori?.length > 0 ? (
      <RichTextSection
        tag_id="autori"
        title={intl.formatMessage(messages.autori)}
      >
        {/* AUTORI */}
          <Row className="mb-5">
          {content.autori.map((item) => (
            <Col lg={6} className="py-lg-2" key={'autore_' + item['@id']}>
              <CardPersona item={item} size={'small'} />
            </Col>
          ))}
          </Row>
      </RichTextSection>
  ) : (
    <></>
  );
};

export default DocumentoAutori;
