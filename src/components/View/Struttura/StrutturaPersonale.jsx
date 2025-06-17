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
  personale_correlato: {
    id: 'struttura_personale_correlato',
    defaultMessage: 'Personale correlato',
  },
});

const StrutturaPersonale = ({ content }) => {
  const intl = useIntl();

<<<<<<< Updated upstream
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
      id="Persona"
      title={intl.formatMessage(messages.personale)}
    />
=======
  return (
    <>
      {/* PERSONALE DELLA STRUTTURA */}
      {content?.personale_struttura?.length > 0 ? (
        <RichTextSection
          tag_id="personale"
          title={intl.formatMessage(messages.personale)}
        >
          {/* PERSONALE DELLA STRUTTURA - campo manuale, se compilato vince sopra alle backreference */}
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
      )}

      {/* PERSONALE CORRELATO */}
      {content?.personale_correlato?.length > 0 && (
        <RichTextSection
          tag_id="personale_correlato"
          title={intl.formatMessage(messages.personale_correlato)}
        >
          <Row className="mb-5">
            {content.personale_correlato.map((item) => (
              <Col lg={6} className="py-lg-2" key={'personale_' + item['@id']}>
                <CardPersona item={item} />
              </Col>
            ))}
          </Row>
        </RichTextSection>
      )}
    </>
>>>>>>> Stashed changes
  );
};

export default StrutturaPersonale;
