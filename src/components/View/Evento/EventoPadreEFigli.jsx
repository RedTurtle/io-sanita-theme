import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardImage } from 'io-sanita-theme/components';

const messages = defineMessages({
  events: {
    id: 'events',
    defaultMessage: 'Appuntamenti',
  },
});

const EventoPadreEFigli = ({ content }) => {
  const intl = useIntl();
  const isChildEvent = content?.parent['@type'] === 'Event';
  const events = isChildEvent
    ? content?.parent
      ? [content.parent]
      : []
    : content?.items?.filter((el) => el['@type'] === 'Event') || [];

  return events.length > 0 ? (
    <RichTextSection
      tag_id="appuntamenti"
      title={intl.formatMessage(messages.events)}
    >
      <Row>
        {events.map((item, i) => (
          <Col lg={6} key={item['@id']}>
            <CardImage item={item} showDescription={false} />
          </Col>
        ))}
      </Row>
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoPadreEFigli.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoPadreEFigli;
