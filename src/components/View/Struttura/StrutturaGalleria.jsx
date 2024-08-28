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
    id: 'struttura_gallery',
    defaultMessage: "Galleria",
  },
});

const StrutturaGalleria = ({ content }) => {
  const intl = useIntl();

  return contentFolderHasItems(content, 'immagini') ||
    contentFolderHasItems(content, 'video') ? (
    <RichTextSection
      tag_id="gallery_struttura"
      title={intl.formatMessage(messages.gallery)}
    >
      {/* Galleria struttura */}
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

StrutturaGalleria.propTypes = {
  content: PropTypes.object.isRequired,
};

export default StrutturaGalleria;
