import 'slick-carousel/slick/slick.css';
import 'io-sanita-theme/components/slick-carousel/slick/slick-theme.css';
import './gallery.scss';

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  resetSearchContent,
  searchContent,
} from '@plone/volto/actions/search/search';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import { EmbeddedVideo, GalleryPreview } from 'io-sanita-theme/components';

import {
  SingleSlideWrapper,
  CarouselWrapper,
  SliderContainer,
  NextArrow,
  PrevArrow,
} from 'io-sanita-theme/components';

import { contentFolderHasItems } from 'io-sanita-theme/helpers';
import GalleryImage from './GalleryImage';

const messages = defineMessages({
  gallery_images: {
    id: 'gallery_images',
    defaultMessage: 'Immagini',
  },
  gallery_video: {
    id: 'gallery_videos',
    defaultMessage: 'Video',
  },
});

/**
 * Gallery view component class.
 * @function Gallery
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const Gallery = ({
  content,
  folder_name,
  id = '',
  title,
  title_type = 'h3',
  title_id = 'galleria',
  title_video,
  className = '',
  reactSlick,
}) => {
  const Slider = reactSlick.default;

  const getSettings = (nItems, slidesToScroll = 3, slidesToShow = 3) => {
    const getResponsiveSettings = (nItems, slidesToShow, slidesToScroll) => {
      return {
        dots: nItems > 1 && nItems > slidesToShow,
        infinite: nItems > 1 && nItems > slidesToShow,
        slidesToShow: nItems < slidesToShow ? nItems : slidesToShow,
        slidesToScroll: nItems < slidesToScroll ? nItems : slidesToScroll,
      };
    };
    return {
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      speed: 500,
      accessibility: true,
      ...getResponsiveSettings(nItems, slidesToShow, slidesToScroll),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            ...getResponsiveSettings(nItems, slidesToShow, slidesToScroll),
          },
        },
        {
          breakpoint: 600,
          settings: {
            ...getResponsiveSettings(
              nItems,
              slidesToShow < 2 ? slidesToShow : 2,
              slidesToScroll < 2 ? slidesToScroll : 2,
            ),
          },
        },
        {
          breakpoint: 480,
          settings: {
            ...getResponsiveSettings(nItems, 1, 1),
          },
        },
      ],
    };
  };

  const intl = useIntl();
  const [viewImageIndex, setViewImageIndex] = useState(null);

  const url = `${flattenToAppURL(content['@id'])}/${folder_name}`;
  const searchResults = useSelector((state) => state.search.subrequests);
  const dispatch = useDispatch();

  const hasChildren = contentFolderHasItems(content, folder_name);

  useEffect(() => {
    if (hasChildren) {
      dispatch(
        searchContent(
          url,
          {
            'path.depth': 1,
            sort_on: 'getObjPositionInParent',
            metadata_fields: '_all',
          },
          folder_name,
        ),
      );
    }
    return () => {
      dispatch(resetSearchContent(folder_name));
    };
  }, [url, folder_name, hasChildren]);

  const multimedia = searchResults?.[folder_name]?.items || [];
  const images = multimedia.filter((item) => item['@type'] === 'Image');
  const videos = multimedia.filter((item) => item['@type'] === 'Link');
  const gallery_images_title =
    title || intl.formatMessage(messages.gallery_images);
  const gallery_video_title =
    title_video || intl.formatMessage(messages.gallery_video);
  const default_width_image =
    images.length > 3 ? '200px' : `${650 / images.length}px`;

  return (
    <>
      {images?.length > 0 ? (
        <div
          className={`it-carousel-wrapper it-carousel-landscape-abstract-three-cols ${className}`}
          id={id}
        >
          <SliderContainer>
            <div className="it-header-block">
              <div className="it-header-block-title">
                {title_type === 'h2' && (
                  <h2 id={title_id} className="mb-3 h4">
                    {gallery_images_title}
                  </h2>
                )}
                {title_type === 'h3' && (
                  <h3 id={title_id} className="h5">
                    {gallery_images_title}
                  </h3>
                )}
                {title_type === 'h4' && (
                  <h4 id={title_id}>{gallery_images_title}</h4>
                )}
                {title_type === 'h5' && (
                  <h5 id={title_id}>{gallery_images_title}</h5>
                )}
              </div>
            </div>

            <CarouselWrapper className="it-card-bg">
              <Slider {...getSettings(images.length)}>
                {images.map((item, i) => (
                  <SingleSlideWrapper key={item['@id']} index={i}>
                    <GalleryImage
                      item={item}
                      default_width_image={default_width_image}
                      setViewImageIndex={setViewImageIndex}
                      i={i}
                    />
                  </SingleSlideWrapper>
                ))}
              </Slider>

              <GalleryPreview
                id={`image-gallery-${folder_name}`}
                viewIndex={viewImageIndex}
                setViewIndex={setViewImageIndex}
                items={images}
              />
            </CarouselWrapper>
          </SliderContainer>
        </div>
      ) : null}

      {videos?.length > 0 ? (
        <div
          className={`it-carousel-wrapper it-carousel-landscape-abstract-three-cols ${className}`}
        >
          <SliderContainer>
            <div className="it-header-block">
              <div className="it-header-block-title">
                {title_type === 'h2' && (
                  <h2 className="h4" id={title_id}>
                    {gallery_video_title}
                  </h2>
                )}
                {title_type === 'h3' && (
                  <h3 className="h5" id={title_id}>
                    {gallery_video_title}
                  </h3>
                )}
                {title_type === 'h4' && (
                  <h4 id={title_id}>{gallery_video_title}</h4>
                )}
                {title_type === 'h5' && (
                  <h5 id={title_id}>{gallery_video_title}</h5>
                )}
              </div>
            </div>

            <CarouselWrapper className="it-card-bg">
              <Slider {...getSettings(videos.length, 1, 1)}>
                {videos.map((item, i) => (
                  <SingleSlideWrapper key={item['@id']} index={i}>
                    <EmbeddedVideo
                      title={item.title}
                      key={item['@id'] ?? i}
                      id={item['@id'] ?? i}
                      video_url={item?.remoteUrl || item}
                    />
                  </SingleSlideWrapper>
                ))}
              </Slider>
            </CarouselWrapper>
          </SliderContainer>
        </div>
      ) : null}
    </>
  );
};
export default injectLazyLibs(['reactSlick'])(Gallery);

Gallery.propTypes = {
  content: PropTypes.object,
  folder_name: PropTypes.string,
};
