import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardFeatured } from 'io-sanita-theme/components';
import { useDispatch, useSelector } from 'react-redux';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  events: {
    id: 'evento_appuntamenti',
    defaultMessage: 'Appuntamenti',
  },
});

const EventoAppuntamenti = ({ content }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const events = content?.items?.filter((el) => el['@type'] === 'Event') || [];

  const searchEvents = useSelector((state) => state.content?.subrequests);

  // one request is made for every event
  useEffect(() => {
    if (events?.length > 0) {
      events.forEach((item) => {
        const url = flattenToAppURL(item['@id']);
        const loaded =
        searchEvents?.[url]?.loading || searchEvents?.[url]?.loaded;
        if (!loaded) {
          dispatch(getContent(url, null, url));
        }
      });
    }
    return () => {
      if (events?.length > 0) {
        events.forEach((item) => {
          dispatch(resetContent(flattenToAppURL(item['@id'])));
        });
      }
    };
  }, [content]);

  return events.length > 0 ? (
    <RichTextSection
      tag_id="appuntamenti"
      title={intl.formatMessage(messages.events)}
    >
      <Row>
        {events.map((item, i) => (
          <Col lg={6} className="py-lg-2" key={item['@id']}>
            <CardFeatured item={item} />
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
