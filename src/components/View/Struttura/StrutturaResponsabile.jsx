import { Col, Row } from 'design-react-kit';
import {
  RichText,
  RichTextSection,
  richTextHasContent,
} from 'io-sanita-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';

import { CardPersona } from 'io-sanita-theme/components';
import React from 'react';

const messages = defineMessages({
  responsabile: {
    id: 'struttura_responsabile',
    defaultMessage: 'Responsabile',
  },
});

const StrutturaResponsabile = ({ content }) => {
  const intl = useIntl();
  const has_richTextContent = richTextHasContent(
    content?.responsabile_correlato_text,
  );
  return content?.responsabile_correlato?.length > 0 || has_richTextContent ? (
    <RichTextSection
      tag_id="responsabile"
      title={intl.formatMessage(messages.responsabile)}
    >
      <Row>
        {content.responsabile_correlato.map((item) => {
          return (
            <Col lg={6} className="py-lg-2" key={item['@id']}>
              <CardPersona item={item} />
            </Col>
          );
        })}
      </Row>
      {/* Contenuto testuale alternativo, usato ad esempio con il sync virtualdesk */}
      {has_richTextContent && (
        <div className="richtext-blocks font-serif">
            <RichText data={content?.responsabile_correlato_text} />
        </div>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

export default StrutturaResponsabile;
