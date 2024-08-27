import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {Row, Col} from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardSimple } from 'io-sanita-theme/components';

const messages = defineMessages({
  servizi_correlati: {
    id: 'servizio_servizi_prestazioni',
    defaultMessage: 'Servizi e prestazioni correlati',
  },
});

const ServizioServiziCorrelati = ({ content }) => {
  const intl = useIntl();

  return content?.servizio_correlato?.length > 0 ? (
    <RichTextSection tag_id="servizi" title={intl.formatMessage(messages.servizi_correlati)}>
      {content?.servizio_correlato?.length > 0 && (
        <Row>
          {content?.servizio_correlato?.map((item, i) => (
            <Col lg={6} key={item['@id']} className="py-lg-2">
              <CardSimple item={item} />
            </Col>
          ))}
        </Row>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

ServizioServiziCorrelati.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ServizioServiziCorrelati;
