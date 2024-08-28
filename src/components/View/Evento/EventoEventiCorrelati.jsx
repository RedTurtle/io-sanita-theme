import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardImage } from 'io-sanita-theme/components';

const messages = defineMessages({
  related_events: {
    id: 'evento_related_events',
    defaultMessage: 'Eventi correlati',
  },
});

const EventoEventiCorrelati = ({ content }) => {
  const intl = useIntl();

  const events = content?.eventi_correlati || [];

  return events.length > 0 ? (
    <RichTextSection
      tag_id="eventi_correlati"
      title={intl.formatMessage(messages.related_events)}
    >
      <Row>
        {events.map((item, i) => (
          <Col lg={6} className="py-lg-2" key={'related-items'+item['@id']}>
            <CardImage item={item} showDescription={false} titleTag="h5" />
          </Col>
        ))}
      </Row>
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoEventiCorrelati.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoEventiCorrelati;
