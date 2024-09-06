import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichTextSection,
  RichText,
} from 'io-sanita-theme/helpers';

import {
  BandoTipologia,
  BandoEnte,
} from 'io-sanita-theme/components/View/Bando';

const messages = defineMessages({
  come_partecipare: {
    id: 'bando_come_partecipare',
    defaultMessage: 'Come partecipare',
  },
});

const BandoComePartecipare = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.come_partecipare) ? (
    <RichTextSection
      data={content.come_partecipare}
      tag_id="come_partecipare"
      title={intl.formatMessage(messages.come_partecipare)}
    />
  ) : null;
};

BandoComePartecipare.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BandoComePartecipare;
