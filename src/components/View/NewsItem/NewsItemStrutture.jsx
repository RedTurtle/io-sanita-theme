import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import { RichTextSection } from 'io-sanita-theme/helpers';
import { Locations } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  dove: {
    id: 'news_item_strutture',
    defaultMessage: 'Strutture',
  },
});

const NewsItemStrutture = ({ content }) => {
  const intl = useIntl();

  return content?.struttura_correlata?.length > 0 ? (
    <RichTextSection tag_id="strutture" title={intl.formatMessage(messages.dove)}>
      <Locations
        content={content}
        locations={content?.struttura_correlata ?? []}
      />
    </RichTextSection>
  ) : (
    <></>
  );
};

NewsItemStrutture.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemStrutture;
