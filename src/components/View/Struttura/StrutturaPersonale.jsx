import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPersona } from 'io-sanita-theme/components';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  personale: {
    id: 'struttura_personale',
    defaultMessage: 'Personale',
  },
  coordinatore: {
    id: 'struttura_coordinatore',
    defaultMessage: 'Coordinatore',
  },
});

const UOPersonale = ({ content }) => {
  const intl = useIntl();

  return (content?.personale_correlato?.length > 0 ||
    content?.coordinatore_correlato?.length > 0) ? (
      <RichTextSection
        tag_id="personale"
        title={intl.formatMessage(messages.personale)}
      >
        {/* PERSONALE DELLA STRUTTURA */}
        {content?.personale_correlato?.length > 0 && (
          <Row className="mb-5">
          {content.personale_correlato.map((item) => (
            <Col lg={6} className="py-lg-2" key={'personale_' + item['@id']}>
              <CardPersona item={item} />
            </Col>
          ))}
          </Row>
        )}


        {/* COORDINATORE */}
        {content?.coordinatore_correlato?.length > 0 && (
          <div className="mb-5 pt-2">
            <h3 className="tipologia-section h5">
              {intl.formatMessage(messages.coordinatore)}
            </h3>
            <Row>
            {content.coordinatore_correlato.map((item) => (
              <Col lg={6} className="py-lg-2" key={'coordinatore_' + item['@id']}>
                <CardPersona item={item} />
              </Col>
            ))}
            </Row>
          </div>
        )}

      </RichTextSection>
  ) : (
    <></>
  );
};

export default UOPersonale;
