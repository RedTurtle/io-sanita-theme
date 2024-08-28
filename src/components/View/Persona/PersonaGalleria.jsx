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
    id: 'persona_gallery',
    defaultMessage: "Galleria",
  },
});

const PersonaGalleria = ({ content }) => {
  const intl = useIntl();

  return contentFolderHasItems(content, 'immagini') ||
    contentFolderHasItems(content, 'video') ? (
    <RichTextSection
      tag_id="gallery_persona"
      title={intl.formatMessage(messages.gallery)}
    >
      {/* Galleria persona */}
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

PersonaGalleria.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PersonaGalleria;
