import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  viewPreview: {
    id: 'gallery_viewPreview',
    defaultMessage: "Vedi l'anteprima di",
  },
});

const GalleryImage = ({ item, default_width_image }) => {
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;

  return (
    <figure>
      <UniversalLink
        item={item}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setViewImageIndex(i);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            e.stopPropagation();
            setViewImageIndex(i);
          }
        }}
        aria-label={`${intl.formatMessage(messages.viewPreview)} ${item.title}`}
      >
        <Image
          item={item}
          alt={item.title}
          className="img-fluid"
          loading="lazy"
          sizes={`(max-width:320px) 300px, (max-width:425px) 400px, ${default_width_image}`}
        />
      </UniversalLink>
      <figcaption className="figure-caption mt-2">{item.title}</figcaption>
    </figure>
  );
};

export default GalleryImage;
