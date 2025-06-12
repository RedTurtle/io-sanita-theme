import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPersona } from 'io-sanita-theme/components';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  responsabile: {
    id: 'struttura_responsabile',
    defaultMessage: 'Responsabile',
  },
});

const StrutturaResponsabile = ({ content }) => {
  const intl = useIntl();

  return content?.responsabile_correlato?.length > 0 ? (
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
    </RichTextSection>
  ) : (
    <></>
  );
};

export default StrutturaResponsabile;
