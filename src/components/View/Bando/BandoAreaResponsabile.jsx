/**
 * BandoAreaResponsabile component used in BandoView.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPlace } from 'io-sanita-theme/components';

const messages = defineMessages({
  area_responsabile: {
    id: 'bando_area_responsabile',
    defaultMessage: 'Area responsabile',
  },
});

const BandoAreaResponsabile = ({ content }) => {
  const intl = useIntl();
  return content?.area_responsabile?.length > 0 ? (
    <RichTextSection
      tag_id="area_responsabile"
      title={intl.formatMessage(messages.area_responsabile)}
    >
      <div className="mb-5">
        <Row>
          {content?.area_responsabile?.map((item, i) => (
            <Col lg={6} key={'area-responsabile' + i}>
              <CardPlace item={item} size="small" type="synthetic" />
            </Col>
          ))}
        </Row>
      </div>
    </RichTextSection>
  ) : (
    <></>
  );
};

BandoAreaResponsabile.propTypes = {
  content: PropTypes.shape({
    area_responsabile: PropTypes.array,
  }).isRequired,
};
export default BandoAreaResponsabile;
