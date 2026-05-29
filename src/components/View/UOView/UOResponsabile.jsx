import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection, richTextHasContent, RichText } from 'io-sanita-theme/helpers';
import { CardPersona } from 'io-sanita-theme/components';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  responsabile: {
    id: 'uo_responsabile',
    defaultMessage: 'Responsabile',
  },
});

const UOResponsabile = ({ content }) => {
  const intl = useIntl();
  const has_richTextContent = richTextHasContent(
    content?.responsabile_correlato_text,
  );

<<<<<<< lint
  return content?.responsabile_correlato?.length > 0 ? (
    <RichTextSection
      tag_id="responsabile"
      title={intl.formatMessage(messages.responsabile)}
    >
      <Row>
        {content.responsabile_correlato.map((item) => {
          return (
            <Col lg={6} className="py-lg-2" key={'responsabile_' + item['@id']}>
              <CardPersona item={item} />
            </Col>
          );
        })}
      </Row>
=======
  return content?.responsabile_correlato?.length > 0 || has_richTextContent ? (
      <RichTextSection
        tag_id="responsabile"
        title={intl.formatMessage(messages.responsabile)}
      >
        <Row>
          {content.responsabile_correlato.map((item) => {
            return (
              <Col lg={6} className="py-lg-2" key={'responsabile_' + item['@id']}>
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
>>>>>>> main
    </RichTextSection>
  ) : (
    <></>
  );

};

export default UOResponsabile;
