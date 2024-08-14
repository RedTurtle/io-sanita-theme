/*
  Viene mostrato l'item "genitore" quando l'Evento è figlio di un altro Evento
*/

import React, { useEffect } from 'react';
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

  return parentEvent ? (
    <RichTextSection
      tag_id="fa_parte_di"
      title={intl.formatMessage(messages.fa_parte_di)}
    >
      <Row>
        <Col lg={6} className="py-lg-2">
          <CardImage item={parentEvent} />
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
