import { Col, Row } from 'design-react-kit';
import {
  RichText,
  RichTextSection,
  richTextHasContent,
} from 'io-sanita-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';

import { CardContatti } from 'io-sanita-theme/components';
import PropTypes from 'prop-types';

const messages = defineMessages({
  contatti: {
    id: 'struttura_contatti',
    defaultMessage: 'Contatti',
  },
});

const StrutturaContatti = ({ content }) => {
  const intl = useIntl();
  const has_richTextContent = richTextHasContent(content?.pdc_correlato_text);
  return content?.pdc_correlato?.length > 0 || has_richTextContent ? (
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
      {/* Contenuto testuale alternativo, usato ad esempio con il sync virtualdesk */}
      {has_richTextContent && (
        <div className="richtext-blocks font-serif">
            <RichText data={content?.pdc_correlato_text} />
        </div>
      )}
    </RichTextSection>
  ) : null;
};

StrutturaContatti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default StrutturaContatti;
