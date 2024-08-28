import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { CardPlace } from 'io-sanita-theme/components';
import { Row, Col } from 'design-react-kit';
import {
  richTextHasContent,
  RichTextSection,
  RichText,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  organizzato_da: {
    id: 'organizzato_da',
    defaultMessage: 'Organizzato da',
  },
  patrocinato_da: {
    id: 'patrocinato_da',
    defaultMessage: 'Patrocinato da',
  },
});

const EventoOrganizzatoDa = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.organizzato_da_esterno) ||
    content?.organizzato_da_interno?.length > 0 ||
    richTextHasContent(content?.patrocinato_da) ? (
    <RichTextSection
      tag_id="organizzato_da"
      title={intl.formatMessage(messages.organizzato_da)}
    >
      {/* Organizzato da: altro */}
      {richTextHasContent(content?.organizzato_da_esterno) && (
        <div className="mt-4">
          <div className="mb-2">
            <RichText data={content?.organizzato_da_esterno} />
          </div>
        </div>
      )}

      {/* Organizzato da: UO link interno */}
      {content?.organizzato_da_interno?.length > 0 && (
        <div className="mb-5">
          <Row>
            {content?.organizzato_da_interno?.map((item, index) => (
              <Col lg={6} key={'organizzato_Da'+index}>
                <CardPlace item={item} size={'small'} type={'synthetic'} />
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Patrocinato da */}
      {richTextHasContent(content?.patrocinato_da) && (
        <div className="mt-4">
          <div className="mb-5">
            <RichText
              title={intl.formatMessage(messages.patrocinato_da)}
              data={content?.patrocinato_da}
            />
          </div>
        </div>
      )}
    </RichTextSection>
  ) : null;
};

EventoOrganizzatoDa.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoOrganizzatoDa;
