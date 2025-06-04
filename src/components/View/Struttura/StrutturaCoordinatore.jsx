import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPersona } from 'io-sanita-theme/components';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  coordinatore: {
    id: 'struttura_coordinatore',
    defaultMessage: 'Coordinatore',
  },
});

const StrutturaCoordinatore = ({ content }) => {
  const intl = useIntl();

  return content?.coordinatore_correlato?.length > 0 ? (
    <RichTextSection
      tag_id="personale"
      title={intl.formatMessage(messages.coordinatore)}
    >
      {/* COORDINATORE */}
      <div className="mb-5 pt-2">
        <Row>
          {content.coordinatore_correlato.map((item) => (
            <Col lg={6} className="py-lg-2" key={'coordinatore_' + item['@id']}>
              <CardPersona item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </RichTextSection>
  ) : (
    <></>
  );
};

export default StrutturaCoordinatore;
