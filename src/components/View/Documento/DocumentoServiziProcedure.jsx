import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { CardSimple, CardGuide } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  doc_servizio_riferimento: {
    id: 'documento_servizio_riferimento',
    defaultMessage: 'Servizio di riferimento',
  },
  doc_procedura_riferimento: {
    id: 'documento_procedura_riferimento',
    defaultMessage: 'Procedura di riferimento',
  },
});

const DocumentoServiziProcedure = ({ content }) => {
  const intl = useIntl();

  const checkServizi = (data) => {
    return data.some(item => item['@type'] === 'Servizio');
  };

  return content?.servizio_procedura_riferimento?.length > 0 ? (
    <RichTextSection
      tag_id="servizi_procedure"
      title={checkServizi(content.servizio_procedura_riferimento) ?
        intl.formatMessage(messages.doc_servizio_riferimento) :
        intl.formatMessage(messages.doc_procedura_riferimento)
      }
    >
      <Row className="mb-4">
        {/* Servizio o procedura di riferimento */}
        {content?.servizio_procedura_riferimento.map((item, i) => (
          item['@type'] === 'Servizio' ? (
            <Col lg={6} className="py-lg-2" key={'service_' + i}>
              <CardSimple item={item} />
            </Col>
          ) : (
            <Col lg={6} className="py-lg-2" key={'procedura_' + i}>
              <CardGuide item={item} />
            </Col>
          )
        ))}
      </Row>

    </RichTextSection>
  ) : null;
};

DocumentoServiziProcedure.propTypes = {
  content: PropTypes.object.isRequired,
};

export default DocumentoServiziProcedure;
