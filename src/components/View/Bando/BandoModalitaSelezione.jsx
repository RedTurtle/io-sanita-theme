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
  modalita_selezione: {
    id: 'bando_modalita_selezione',
    defaultMessage: 'Modalità di selezione',
  },
});

const BandoModalitaSelezione = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.modalita_selezione) ? (
    <RichTextSection
      data={content.modalita_selezione}
      tag_id="modalita_selezione"
      title={intl.formatMessage(messages.modalita_selezione)}
    />
  ) : null;
};

BandoModalitaSelezione.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BandoModalitaSelezione;
