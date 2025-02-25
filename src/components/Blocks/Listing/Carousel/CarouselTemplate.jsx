/*
 * Carousel
 */
import 'slick-carousel/slick/slick.css';
import 'io-sanita-theme/components/slick-carousel/slick/slick-theme.css';
import { Col, Container, Row } from 'design-react-kit';
import {
  ListingImage,
  ListingContainer,
} from 'io-sanita-theme/components/Blocks';
import {
  LinkMore,
  SingleSlideWrapper,
  CarouselWrapper,
  SliderContainer,
  ButtonPlayPause,
  useSlider,
  GalleryPreview,
} from 'io-sanita-theme/components';

import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import config from '@plone/volto/registry';

import './carouselTemplate.scss';
import { on } from 'process';
const messages = defineMessages({
  carouselItemAriaLabel: {
    id: 'carousel-item-aria-label',
    defaultMessage:
      'Sei attualmente in un carosello, per navigare usa le frecce sinistra e destra',
  },
  dots: {
    id: 'dots',
    defaultMessage: 'Navigazione elementi slider',
  },
  slideDot: {
    id: 'slideDot',
    defaultMessage: 'Vai alla slide {index}',
  },
  openLink: {
    id: 'openLink',
    defaultMessage: 'Apri il link',
  },
});

const Slide = (props) => {
  const intl = useIntl();
  const { index, appearance, appearanceProp, onKeyDown, ...otherProps } = props;

  const appearances = config.blocks.blocksConfig.listing.variations.filter(
    (v) => v.id === 'carousel',
  )[0]?.appearance;
  const SlideItemAppearance = appearances[appearance] ?? appearances['default'];

  return (
    <SingleSlideWrapper
      {...otherProps}
      index={index}
      onKeyDown={onKeyDown}
      aria-label={
        (props['aria-label'] ? props['aria-label'] + ' - ' : '') +
        intl.formatMessage(messages.carouselItemAriaLabel)
      }
    >
      <div className="slide-wrapper" role="presentation">
        <SlideItemAppearance {...props} {...appearanceProp} intl={intl} />
      </div>
    </SingleSlideWrapper>
  );
};

const CarouselTemplate = (props) => {
  const {
    items,
    title,
    isEditMode,
    show_block_bg,
    linkTitle,
    linkHref,
    slidesToShow = '1',
    full_width = false,
    show_image_title = true,
    show_dots = true,
    autoplay = false,
    autoplay_speed = 2, //seconds
    slide_appearance = 'default',
    reactSlick,
    block,
    ...otherProps
  } = props;
  const block_id = block;
  const intl = useIntl();

  const [userAutoplay, setUserAutoplay] = useState(autoplay);
  const [viewImageIndex, setViewImageIndex] = useState(null);
  const nSlidesToShow =
    items.length < parseInt(slidesToShow)
      ? items.length
      : parseInt(slidesToShow);
  const Slider = reactSlick.default;
  const {
    slider,
    focusSlide,
    SliderNextArrow,
    SliderPrevArrow,
    handleSlideKeydown,
    HiddenSlideFocus,
  } = useSlider(userAutoplay, setUserAutoplay, block_id);

  const toggleAutoplay = () => {
    if (!slider?.current) return;
    if (userAutoplay) {
      setUserAutoplay(false);
      slider.current.slickPause();
    } else {
      setUserAutoplay(true);
      slider.current.slickPlay();
    }
  };

  const renderCustomDots = (props) => {
    // Custom handling of focus for a11y
    return (
      <ul
        className="slick-dots"
        aria-label={intl.formatMessage(messages.dots)}
        title={intl.formatMessage(messages.dots)}
      >
        {props.map((item, index) => {
          const El = item.type;
          const children = item.props.children;
          // Justified assumption: children is an Object and not an Array here
          const Child =
            children.type ||
            function () {
              return null;
            };
          return (
            <El
              key={index}
              className={`${item.props.className} slick-dot`}
              tabIndex={-1}
              title={intl.formatMessage(messages.slideDot, {
                index: index + 1,
              })}
              aria-hidden={true}
            >
              <Child
                {...children.props}
                tabIndex={-1}
                style={{ padding: 0 }}
                title={intl.formatMessage(messages.slideDot, {
                  index: index + 1,
                })}
                aria-label={intl.formatMessage(messages.slideDot, {
                  index: index + 1,
                })}
              />
            </El>
          );
        })}
      </ul>
    );
  };

  const settings = {
    dots: show_dots,
    infinite: true,
    autoplay: autoplay,
    speed: 500,
    slidesToShow: nSlidesToShow,
    slidesToScroll: nSlidesToShow,
    autoplaySpeed: autoplay_speed * 1000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    swipe: true,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
    accessibility: true,
    nextArrow: <SliderNextArrow intl={intl} />,
    prevArrow: <SliderPrevArrow intl={intl} />,
    appendDots: renderCustomDots,
    // Custom handling of focus for a11y
    afterChange: focusSlide,
    onInit: () => {
      HiddenSlideFocus();
    },
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id={`outside-slider-${block_id}`}>
      <div
        className={cx(`carouselTemplate slidesToShow-${nSlidesToShow || 1}`, {
          'no-margin': full_width,
          ['appearance_' + slide_appearance]: slide_appearance,
        })}
        id={'slider_' + block_id}
      >
        <ListingContainer data={props} isEditMode={isEditMode}>
          <SliderContainer
            className={cx({
              'px-4 px-md-0': !full_width,
              'full-width': full_width,
            })}
          >
            <CarouselWrapper className="it-card-bg">
              {items?.length > nSlidesToShow && (
                <ButtonPlayPause
                  onClick={toggleAutoplay}
                  autoplay={userAutoplay}
                >
                  <span>{userAutoplay ? 'pause' : 'play'}</span>
                </ButtonPlayPause>
              )}

              <Slider {...settings} ref={slider}>
                {items.map((item, index) => {
                  const image = (
                    <ListingImage
                      item={item}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      sizes={`max-width(991px) 620px, ${
                        1300 / nSlidesToShow
                      }px`}
                      showDefault
                    />
                  );
                  const nextIndex = index < items.length - 1 ? index + 1 : null;
                  const prevIndex = index > 0 ? index - 1 : null;
                  return (
                    <Slide
                      key={item['@id'] + index}
                      image={image}
                      index={index}
                      full_width={full_width}
                      item={item}
                      items={items}
                      show_image_title={show_image_title}
                      userAutoplay={userAutoplay}
                      slider={slider}
                      viewImageIndex={viewImageIndex}
                      setViewImageIndex={setViewImageIndex}
                      appearance={slide_appearance}
                      appearanceProp={otherProps}
                      block_id={block_id}
                      aria-label={
                        !show_image_title && slide_appearance === 'default'
                          ? item.title
                          : null
                      }
                      onKeyDown={handleSlideKeydown(
                        index,
                        prevIndex,
                        nextIndex,
                      )}
                    />
                  );
                })}
              </Slider>
              {viewImageIndex !== null && (
                <GalleryPreview
                  id="slide-gallery-preview"
                  viewIndex={viewImageIndex}
                  setViewIndex={setViewImageIndex}
                  items={items}
                />
              )}
            </CarouselWrapper>
          </SliderContainer>
          <LinkMore title={linkTitle} href={linkHref} className="my-4" />
        </ListingContainer>
      </div>
    </div>
  );
};

CarouselTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default injectLazyLibs(['reactSlick'])(CarouselTemplate);
