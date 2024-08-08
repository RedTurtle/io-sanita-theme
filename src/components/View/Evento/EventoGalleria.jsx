import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';
import { Gallery } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  gallery: {
    id: 'event_gallery',
    defaultMessage: "Galleria",
  },
});

const EventoGalleria = ({ content }) => {
  const intl = useIntl();

  return contentFolderHasItems(content, 'immagini') ||
    contentFolderHasItems(content, 'video') ? (
    <RichTextSection
      tag_id="gallery_evento"
      title={intl.formatMessage(messages.gallery)}
    >
      {/* Galleria evento */}
      <Gallery
        content={content}
        folder_name={'immagini'}
        className="mt-4 pb-4"
      />
      <Gallery content={content} folder_name={'video'} />
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoGalleria.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoGalleria;
