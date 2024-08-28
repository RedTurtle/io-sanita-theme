import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardSimple } from 'io-sanita-theme/components';
import {Row, Col} from 'design-react-kit';

const messages = defineMessages({
  notizie_correlate: {
    id: 'news_item_notizie_correlate',
    defaultMessage: 'Notizie correlate',
  },
});

const NewsItemNotizieCorrelate = ({ content }) => {
  const intl = useIntl();

  return content?.notizia_correlata?.length > 0 ? (
    <RichTextSection tag_id="notizie_correlate" title={intl.formatMessage(messages.notizie_correlate)}>
      {content?.notizia_correlata?.length > 0 && (
        <Row>
          {content?.notizia_correlata?.map((item, i) => (
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

NewsItemNotizieCorrelate.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemNotizieCorrelate;
