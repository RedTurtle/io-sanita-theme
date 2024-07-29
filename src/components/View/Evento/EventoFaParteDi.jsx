import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardImage } from 'io-sanita-theme/components';

const messages = defineMessages({
  fa_parte_di: {
    id: 'evento_fa_parte_di',
    defaultMessage: 'Fa parte di',
  },
});

const EventoFaParteDi = ({ content }) => {
  const intl = useIntl();

  const parentEvent =
    content?.parent['@type'] === 'Event' ? content?.parent : null;

    // TO DO: fare una chiamata al contenuto di questa card per avere tutti i dati

  return parentEvent ? (
    <RichTextSection
      tag_id="fa_parte_di"
      title={intl.formatMessage(messages.fa_parte_di)}
    >
      <Row>
        <Col lg={6} className="py-lg-2">
          <CardImage item={parentEvent} showDescription={false} titleTag="h5" />
        </Col>
      </Row>
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoFaParteDi.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoFaParteDi;
