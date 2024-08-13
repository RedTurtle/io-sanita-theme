import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPersona } from 'io-sanita-theme/components';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  personale: {
    id: 'personale',
    defaultMessage: 'Personale',
  },
});

const UOPersonale = ({ content }) => {
  const intl = useIntl();

  return content?.personale_correlato?.length > 0 ? (
      <RichTextSection
        tag_id="personale"
        title={intl.formatMessage(messages.personale)}
      >
        <Row>
          {content.personale_correlato.map((item) => {
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

export default UOPersonale;
