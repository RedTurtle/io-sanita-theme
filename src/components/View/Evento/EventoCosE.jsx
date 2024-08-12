import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  cos_e: {
    id: 'event_cos_e',
    defaultMessage: "Cos'è",
  },
  tipologia_evento: {
    id: 'tipologia_evento',
    defaultMessage: 'Tipo evento',
  },
});

const EventoCosE = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.descrizione_estesa) ||
    content?.tipologia_evento ? (
    <RichTextSection
      tag_id="text-body"
      title={intl.formatMessage(messages.cos_e)}
      show_title={true}
      data={content.descrizione_estesa}
    >

      {/* TO DO: da excell è da spostare nell'hero della pagina */}
      {/* Tipologia evento */}
      {content?.tipologia_evento && (
        <div className="mb-5 pt-2">
          <h3 className="tipologia-section h5">
            {intl.formatMessage(messages.tipologia_evento)}
          </h3>
          <p key={content?.tipologia_evento?.token} className="font-serif">
            {content?.tipologia_evento?.title}
          </p>
        </div>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoCosE.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoCosE;
