import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  cos_e: {
    id: 'struttura_cos_e',
    defaultMessage: "Cos'è",
  },
});

const StrutturaCosE = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.descrizione_estesa) ? (
    <RichTextSection
      tag_id="text-body"
      title={intl.formatMessage(messages.cos_e)}
      show_title={true}
      data={content.descrizione_estesa}
    ></RichTextSection>
  ) : (
    <></>
  );
};

StrutturaCosE.propTypes = {
  content: PropTypes.object.isRequired,
};

export default StrutturaCosE;
