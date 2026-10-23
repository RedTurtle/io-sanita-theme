import React from 'react';
import { CardSimple } from 'io-sanita-theme/components';

const ResultItem = ({ item, index, searchableText }) => {
  return (
    <CardSimple
      item={item}
      highlight={searchableText}
      titleTag="h2"
      titleClassName="h5"
    />
  );
};
export default ResultItem;
