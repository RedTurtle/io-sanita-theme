import React from 'react';
import PropTypes from 'prop-types';
import config from '@plone/volto/registry';

/**
 * ContentImage view component class.
 * @function ContentImage
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const ContentImage = ({ content }) => {
  const view = content?.image_field;
  const Image = config.getComponent({ name: 'Image' }).component;

  return view ? (
    <div className="content-image">
      <div className="row wide-image row-full-width my-3">
        <figure className="figure">
          <Image
            item={content}
            className="full-width"
            alt=""
            critical
            loading="eager"
            sizes="100vw"
          />
          {content.image_caption && (
            <figcaption className="figure-caption text-center pt-3">
              {content.image_caption}
            </figcaption>
          )}
        </figure>
      </div>
    </div>
  ) : null;
};

export default ContentImage;

ContentImage.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.object,
    image_caption: PropTypes.string,
  }),
  position: PropTypes.string,
};
