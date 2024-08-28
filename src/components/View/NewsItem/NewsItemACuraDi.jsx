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
  a_cura_di: {
    id: 'news_item_a_cura_di',
    defaultMessage: 'A cura di',
  },
});

const NewsItemACuraDi = ({ content }) => {
  const intl = useIntl();

  return content?.uo_correlata?.length > 0 ? (
    <RichTextSection
      tag_id="a_cura_di"
      title={intl.formatMessage(messages.a_cura_di)}
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


NewsItemACuraDi.propTypes = {
  content: PropTypes.shape({
    uo_correlata: PropTypes.array,
  }).isRequired,
};

export default NewsItemACuraDi;
