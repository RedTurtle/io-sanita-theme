import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPlace } from 'io-sanita-theme/components';

const messages = defineMessages({
  ufficio_responsabile: {
    id: 'ufficio_responsabile',
    defaultMessage: 'Ufficio responsabile',
  },
});

const BandoUfficioResponsabile = ({ content }) => {
  const intl = useIntl();
  return content?.ufficio_responsabile?.length > 0 ? (
    <RichTextSection
      tag_id="ufficio_responsabile"
      title={intl.formatMessage(messages.ufficio_responsabile)}
    >
      <div className="mb-5">
        <Row>
          {content?.ufficio_responsabile?.map((item, i) => (
            <Col lg={6} key={'uo_responsabile' + index}>
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

BandoUfficioResponsabile.propTypes = {
  content: PropTypes.shape({
    ufficio_responsabile: PropTypes.array,
  }).isRequired,
};
export default BandoUfficioResponsabile;
