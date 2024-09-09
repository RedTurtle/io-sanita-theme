import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';
import { Gallery } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  video: {
    id: 'news_video_gallery',
    defaultMessage: 'Video',
  },
  galleria: {
    id: 'news_gallery',
    defaultMessage: 'Galleria',
  },
});

const NewsItemGallery = ({ content }) => {
  const intl = useIntl();
  return (
    (contentFolderHasItems(content, 'immagini') ||
      contentFolderHasItems(content, 'video')) && (
      <RichTextSection
        tag_id="galleria"
        title={intl.formatMessage(messages.galleria)}
      >
        <Gallery
          content={content}
          folder_name={'immagini'}
          title_id="image_gallery"
        />
        <Gallery
          content={content}
          folder_name={'video'}
          title_id="video_gallery"
          title_video={intl.formatMessage(messages.video)}
        />
      </RichTextSection>
    )
  );
};

NewsItemGallery.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemGallery;
