import React from 'react';
import { CardSimple } from 'io-sanita-theme/components';

const ResultItem = ({ item, index, searchableText }) => {
  return <CardSimple item={item} highlight={searchableText} />;
};
export default ResultItem;
