import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import {
  RichText,
  richTextHasContent,
  RichTextSection,
} from 'io-sanita-theme/helpers';
import { CardPlace } from 'io-sanita-theme/components';

const messages = defineMessages({
  uo_correlata: {
    id: 'struttura_uo_correlata',
    defaultMessage: 'Unità operativa',
  },
});

const StrutturaUfficiCorrelati = ({ content }) => {
  const intl = useIntl();

  return content?.uo_correlata?.length > 0 ? (
    <RichTextSection
      tag_id="uo_correlata"
      title={intl.formatMessage(messages.uo_correlata)}
    >
      {content?.uo_correlata?.length > 0 && (
        <Row>
          {content?.uo_correlata?.map((item, i) => (
            <Col lg={6} key={item['@id']} className="py-lg-2">
              <CardPlace item={item} />
            </Col>
          ))}
        </Row>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

StrutturaUfficiCorrelati.propTypes = {
  content: PropTypes.shape({
    uo_correlata: PropTypes.array,
  }).isRequired,
};

export default StrutturaUfficiCorrelati;
