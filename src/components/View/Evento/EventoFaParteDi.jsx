/*
  Viene mostrato l'item "genitore" quando l'Evento è figlio di un altro Evento
*/

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardImage } from 'io-sanita-theme/components';
import { useDispatch, useSelector } from 'react-redux';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { CardFeatured } from 'io-sanita-theme/components';

const messages = defineMessages({
  fa_parte_di: {
    id: 'fa_parte_di',
    defaultMessage: 'Fa parte di',
  },
});

const EventoFaParteDi = ({ content }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const parentEvent =
    content?.parent['@type'] === 'Event' ? content?.parent : null;

  const searchEvents = useSelector((state) => state.content?.subrequests);

  // one request is made for parentEvent
  useEffect(() => {
    if (parentEvent) {
      const url = flattenToAppURL(parentEvent['@id']);
      const loaded =
      searchEvents?.[url]?.loading || searchEvents?.[url]?.loaded;
      if (!loaded) {
        dispatch(getContent(url, null, url));
      }
    }
    return () => {
      if (parentEvent) {
        dispatch(resetContent(flattenToAppURL(parentEvent['@id'])));
      }
    };
  }, [content]);

  return parentEvent ? (
    <RichTextSection
      tag_id="fa_parte_di"
      title={intl.formatMessage(messages.fa_parte_di)}
    >
      <Row>
        <Col lg={6} className="py-lg-2">
          <CardFeatured item={parentEvent} />
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
