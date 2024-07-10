import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Chip, ChipLabel, Row, Col } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { CardPersona } from 'io-sanita-theme/components';

const messages = defineMessages({
  parteciperanno: {
    id: 'parteciperanno',
    defaultMessage: 'Parteciperanno',
  },
});

const EventoPartecipanti = ({ content }) => {
  const intl = useIntl();

  return content?.persone_amministrazione?.length > 0 ? (
    <>
      <h3 className="parteciperanno-section h5">
        {intl.formatMessage(messages.parteciperanno)}
      </h3>
      <Row>
        {content?.persone_amministrazione?.map((item, i) => (
          <Col lg={6} key={item['@id']} className="py-lg-2">
            <CardPersona item={item} />
          </Col>
        ))}
      </Row>
    </>
  ) : (
    <></>
  );
};

EventoPartecipanti.propTypes = {
  content: PropTypes.shape({
    persone_amministrazione: PropTypes.array,
  }).isRequired,
};

export default EventoPartecipanti;
