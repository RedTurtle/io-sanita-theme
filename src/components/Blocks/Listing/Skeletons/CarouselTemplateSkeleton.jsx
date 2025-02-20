import React from 'react';
import PropTypes from 'prop-types';
import CarouselTemplate from 'io-sanita-theme/components/Blocks/Listing/Carousel/CarouselTemplate';

const CarouselTemplateSkeleton = (data) => {
  let items = [];
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((i) => {
    items.push({ '@id': i + '' });
  });
  return (
    <div className="skeleton-template">
      <CarouselTemplate {...data} items={items} />
    </div>
  );
};

CarouselTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CarouselTemplateSkeleton;
