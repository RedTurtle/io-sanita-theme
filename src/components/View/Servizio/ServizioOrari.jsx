import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import {
  RichText,
  richTextHasContent,
  RichTextSection,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  orari: {
    id: 'servizio_orari',
    defaultMessage: 'Orari del servizio',
  },
});

const ServizioOrari = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.orari) ? (
    <RichTextSection
      data={content.orari}
      tag_id="orari"
      title={intl.formatMessage(messages.orari)}
    />
  ) : null;
};

ServizioOrari.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ServizioOrari;
