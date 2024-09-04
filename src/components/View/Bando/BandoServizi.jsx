/*
 * SubComponent of BandoView
 */
import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardSimple } from 'io-sanita-theme/components';

const messages = defineMessages({
  servizi_correlati: {
    id: 'bando_servizi_collegati',
    defaultMessage: 'Servizi collegati',
  },
});

const BandoServizi = ({ content }) => {
  const intl = useIntl();
  return content?.servizi_correlati?.length > 0 ? (
    <RichTextSection
      tag_id="servizi_collegati"
      title={intl.formatMessage(messages.servizi_correlati)}
    >
      <div className="mb-5 mt-3">
        <Row>
          {content?.servizi_correlati?.map((item, i) => (
            <Col lg={6} key={'servizi_correlati' + index} className="py-lg-2">
              <CardSimple item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </RichTextSection>
  ) : (
    <></>
  );
};

BandoServizi.propTypes = {
  content: PropTypes.shape({
    servizi_correlati: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};
export default BandoServizi;
