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
  cos_e: {
    id: 'bando_cos_e',
    defaultMessage: "Cos'è",
  },
});

const BandoCosE = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.descrizione_estesa) ||
    content?.tipologia_bando ||
    content?.ente_bando?.length > 0 ? (
    <RichTextSection
      tag_id="text-body"
      title={intl.formatMessage(messages.cos_e)}
      show_title={true}
    >
      {/* DESCRIZIONE DEL BANDO */}
      {richTextHasContent(content?.descrizione_estesa) && (
        <RichText data={content?.descrizione_estesa} />
      )}
      {/* TIPOLOGIA DEL BANDO */}
      <BandoTipologia content={content} />
      {/* ENTE DEL BANDO */}
      <BandoEnte content={content} />
    </RichTextSection>
  ) : (
    <></>
  );
};

BandoCosE.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BandoCosE;
