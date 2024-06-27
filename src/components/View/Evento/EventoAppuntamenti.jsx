import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardImage } from 'io-sanita-theme/components';

const messages = defineMessages({
  events: {
    id: 'evento_appuntamenti',
    defaultMessage: 'Appuntamenti',
  },
});

const EventoAppuntamenti = ({ content }) => {
  const intl = useIntl();

  const events = content?.items?.filter((el) => el['@type'] === 'Event') || [];

  return events.length > 0 ? (
    <RichTextSection
      tag_id="appuntamenti"
      title={intl.formatMessage(messages.events)}
    >
      <Row>
        {events.map((item, i) => (
          <Col lg={6} className="py-lg-2" key={item['@id']}>
            <CardImage item={item} showDescription={false} />
          </Col>
        ))}
      </Row>
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoAppuntamenti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoAppuntamenti;
