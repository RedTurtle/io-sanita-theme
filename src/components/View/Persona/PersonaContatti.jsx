import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { CardContatti } from 'io-sanita-theme/components';
import { RichTextSection, richTextHasContent } from 'io-sanita-theme/helpers';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  contatti: {
    id: 'persona_contatti',
    defaultMessage: 'Contatti',
  },
  informazioni_contatto: {
    id: 'persona_informazioni_contatto',
    defaultMessage: 'Informazioni di contatto',
  },
});

const PersonaContatti = ({ content }) => {
  const intl = useIntl();

  return content?.pdc_correlato?.length > 0 ||
    richTextHasContent(content?.informazioni_contatto) ? (
    <RichTextSection
      tag_id="contatti"
      title={intl.formatMessage(messages.contatti)}
    >
      <Row>
        {/* Punto di contatto */}
        {content?.pdc_correlato.map((item, i) => (
          <Col lg={6} className="py-lg-2" key={item['@id']}>
            <CardContatti item={item} show_title={true} />
          </Col>
        ))}
      </Row>
      <Row>
        {/* Informazioni di contatto */}
        {richTextHasContent(content?.informazioni_contatto) && (
          <Col lg={6} className="py-lg-2 informazioni-contatto-wrapper">
            <RichTextSection
              data={content.informazioni_contatto}
              tag_id="informazioni_contatto"
              title={intl.formatMessage(messages.informazioni_contatto)}
            />
          </Col>
        )}
      </Row>
    </RichTextSection>
  ) : null;
};

PersonaContatti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PersonaContatti;
