import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichText,
  richTextHasContent,
  RichTextSection,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  date_e_orari: {
    id: 'struttura_date_e_orari',
    defaultMessage: 'Orari di apertura',
  },
});

const StrutturaDateOrari = ({ content }) => {
  const intl = useIntl();

  return (
    <RichTextSection
      tag_id="date_e_orari"
      title={intl.formatMessage(messages.date_e_orari)}
    >
      {richTextHasContent(content.orari) && <RichText data={content.orari} />}
    </RichTextSection>
  );
};

StrutturaDateOrari.propTypes = {
  content: PropTypes.object.isRequired,
};

export default StrutturaDateOrari;
