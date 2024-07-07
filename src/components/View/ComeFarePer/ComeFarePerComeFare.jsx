import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichText,
  RichTextSection,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  come_fare: {
    id: 'come_fare_per_come_fare',
    defaultMessage: 'Come fare',
  },
});

/* TO DO: questo campo deve essere costruito con un accordion */

const ComeFarePerComeFare = ({ content }) => {
  const intl = useIntl();

  return (
    <RichTextSection
      tag_id="come_fare"
      title={intl.formatMessage(messages.come_fare)}
    >
    </RichTextSection>
  );
  // ) : (
  //   <></>
  // );
};

export default ComeFarePerComeFare;

ComeFarePerComeFare.propTypes = {
  content: PropTypes.shape({
    /* TO DO: aggiungere lo schema che ritorna */
  }).isRequired,
};
