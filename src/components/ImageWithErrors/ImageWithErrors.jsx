import React from 'react';
import Image from '@plone/volto/components/theme/Image/Image';
import { useFallbackImageSrc } from 'io-sanita-theme/helpers';

const ImageWithErrors = ({ src, fallbackSrc = '', ...rest }) => {
  const { className, sizes } = rest;
  const { currentSrc, handleError, getFallbackImageStyle } =
    useFallbackImageSrc({
      src,
      customFallbackSrc: fallbackSrc,
      className,
      sizes,
    });

  let commonProps = { ...rest };
  const fallbackStyle = getFallbackImageStyle({
    src,
    customFallbackSrc: fallbackSrc,
    className,
    sizes,
  });
  if (fallbackStyle) {
    commonProps = {
      ...commonProps,
      style: { ...commonProps.style, ...fallbackStyle },
    };
  }
  return <Image {...commonProps} src={currentSrc} onError={handleError} />;
};

export default ImageWithErrors;
