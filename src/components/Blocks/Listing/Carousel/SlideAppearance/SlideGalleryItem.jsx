import React from 'react';
import { defineMessages } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { Container } from 'design-react-kit';
import { Icon } from 'io-sanita-theme/components';

import { ListingImage } from 'io-sanita-theme/components/Blocks';
import './slideGalleryItem.scss';
const messages = defineMessages({
  viewImage: {
    id: "Vedi l'immagine",
    defaultMessage: "Vedi l'immagine",
  },
  viewPreview: {
    id: 'gallery_viewPreview',
    defaultMessage: "Vedi l'anteprima di",
  },
});
const SlideGalleryItem = ({
  item,
  index,
  image,
  show_image_title,
  show_image_description,
  show_image_popup,
  full_width,
  intl,
  setUserAutoplay,
  userAutoplay,
  slider,
  viewImageIndex,
  setViewImageIndex,
  items,
}) => {
  const imageProps = {
    item,
    sizes: `(max-width:600px) 450px, (max-width:1024px) ${
      items.length < 2 ? '1000' : '500'
    }px, ${items.length === 1 ? '1300' : items.length === 2 ? '650' : '450'}px`,
    noWrapLink: true,
    showDefault: true,
  };

  const figure = (imageProps, item) => {
    return (
      <figure className="img-wrapper responsive">
        <ListingImage {...imageProps} />
        {(show_image_title ||
          (show_image_description && (item.description || item.rights))) && (
          <figcaption>
            {show_image_title && <span className="title">{item.title}</span>}
            {show_image_description && (item.description || item.rights) && (
              <span className="description">
                {item.description ?? item.rights}
              </span>
            )}
          </figcaption>
        )}
      </figure>
    );
  };

  return (
    <div className="photogallery-item">
      {!show_image_popup ? (
        <UniversalLink
          item={item}
          openLinkInNewTab={true}
          title={intl.formatMessage(messages.viewImage)}
        >
          {figure(imageProps, item)}
        </UniversalLink>
      ) : (
        <a
          href={
            item?.image?.scales
              ? flattenToAppURL(item.image.scales.large.download)
              : '#'
          }
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setViewImageIndex(index);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              e.stopPropagation();
              setViewImageIndex(index);
            }
          }}
          aria-label={`${intl.formatMessage(messages.viewPreview)} ${
            item.title
          }`}
        >
          {figure(imageProps, item)}
        </a>
      )}
    </div>
  );
};

export default SlideGalleryItem;
