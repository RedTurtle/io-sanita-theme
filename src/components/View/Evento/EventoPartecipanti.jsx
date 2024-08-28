import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import {
  RichText,
  richTextHasContent,
  RichTextSection,
} from 'io-sanita-theme/helpers';
import { CardPersona } from 'io-sanita-theme/components';

const messages = defineMessages({
  parteciperanno: {
    id: 'parteciperanno',
    defaultMessage: 'Parteciperanno',
  },
});

const EventoPartecipanti = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.parteciperanno) ||
    content?.persona_correlata?.length > 0 ? (
    <RichTextSection
      tag_id="parteciperanno"
      title={intl.formatMessage(messages.parteciperanno)}
    >
      {/* Parteciperanno - testo */}
      {richTextHasContent(content?.parteciperanno) && (
        <div className="mt-4">
          <div className="mb-2">
            <RichText data={content?.parteciperanno} />
          </div>
        </div>
      )}

      {/* Parteciperanno - link correlato */}
      {content?.persona_correlata?.length > 0 && (
        <Row>
          {content?.persona_correlata?.map((item, i) => (
            <Col lg={6} key={'partecipanti'+item['@id']} className="py-lg-2">
              <CardPersona item={item} />
            </Col>
          ))}
        </Row>
      )}

    </RichTextSection>
  ) : (
    <></>
  );
};


EventoPartecipanti.propTypes = {
  content: PropTypes.shape({
    persona_correlata: PropTypes.array,
    parteciperanno: PropTypes.object,
  }).isRequired,
};

export default EventoPartecipanti;
