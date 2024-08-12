import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { HelpBox } from 'io-sanita-theme/components/View/commons';
import {
  richTextHasContent,
  RichTextSection,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  ulteriori_informazioni: {
    id: 'news_item_ulteriori_informazioni',
    defaultMessage: 'Ulteriori informazioni',
  },
});

const NewsItemUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();
  const view = richTextHasContent(content?.ulteriori_informazioni); // TO DO: || Parliamo Di

  return view ? (
    <RichTextSection
      tag_id="ulteriori_informazioni"
      title={intl.formatMessage(messages.ulteriori_informazioni)}
    >
        <HelpBox text={content?.ulteriori_informazioni} />
    </RichTextSection>
  ) : (
    <></>
  );
};

export default NewsItemUlterioriInformazioni;

NewsItemUlterioriInformazioni.propTypes = {
  content: PropTypes.shape({
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};
