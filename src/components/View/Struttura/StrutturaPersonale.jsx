import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPersona } from 'io-sanita-theme/components';
import { Row, Col } from 'design-react-kit';
import { BackReferences } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  personale: {
    id: 'struttura_personale',
    defaultMessage: 'Personale della struttura',
  },
});

const StrutturaPersonale = ({ content }) => {
  const intl = useIntl();

  return content?.personale_struttura?.length > 0 ? (
    <RichTextSection
      tag_id="personale"
      title={intl.formatMessage(messages.personale)}
    >
      {/* PERSONALE DELLA STRUTTURA - campo manuale, se compilato vince sopra ai correlati */}
      <Row className="mb-5">
        {content.personale_struttura.map((item) => (
          <Col lg={6} className="py-lg-2" key={'personale_' + item['@id']}>
            <CardPersona item={item} />
          </Col>
        ))}
      </Row>
    </RichTextSection>
  ) : (
    <BackReferences
      type="Persona"
      content={content}
      id={'Persona'}
      title={intl.formatMessage(messages.personale)}
    />
  );
};

export default StrutturaPersonale;
