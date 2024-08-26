import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPersona } from 'io-sanita-theme/components';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  responsabile_servizio: {
    id: 'servizio_responsabile_servizio',
    defaultMessage: 'Responsabile del servizo',
  },
});

const ServizioResponsabile = ({ content }) => {
  const intl = useIntl();

  return content?.responsabile_correlato?.length > 0 ? (
      <RichTextSection
        tag_id="responsabile_servizio"
        title={intl.formatMessage(messages.responsabile_servizio)}
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

export default ServizioResponsabile;
