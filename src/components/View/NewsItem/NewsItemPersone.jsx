import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import {
  RichText,
  richTextHasContent,
  RichTextSection,
} from 'io-sanita-theme/helpers';
import { CardPersona } from 'io-sanita-theme/components';

const messages = defineMessages({
  persone: {
    id: 'news_item_persone',
    defaultMessage: 'Persone',
  },
});

const NewsItemPersone = ({ content }) => {
  const intl = useIntl();

  return content?.persona_correlata?.length > 0 ? (
    <RichTextSection
      tag_id="persone"
      title={intl.formatMessage(messages.persone)}
    >
      {content?.persona_correlata?.length > 0 && (
        <Row>
          {content?.persona_correlata?.map((item, i) => (
            <Col lg={6} key={item['@id']} className="py-lg-2">
              <CardPersona item={item} />
            </Col>
          ))}
        </Row>
      )}

    </RichTextSection>
  ) : (
    <></>
  );
};


NewsItemPersone.propTypes = {
  content: PropTypes.shape({
    persona_correlata: PropTypes.array,
  }).isRequired,
};

export default NewsItemPersone;
