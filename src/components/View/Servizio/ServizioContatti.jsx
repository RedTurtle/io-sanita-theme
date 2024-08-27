import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { CardContatti } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  contatti: {
    id: 'servizio_contatti',
    defaultMessage: 'Contatti',
  },
});

const ServizioContatti = ({ content }) => {
  const intl = useIntl();

  return content?.pdc_correlato?.length > 0 ? (
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
    </RichTextSection>
  ) : null;
};

ServizioContatti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ServizioContatti;
