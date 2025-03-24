import React from 'react';
import { RichTextRender } from 'io-sanita-theme/helpers';
const BlocksViewWidget = ({ value, children, className }) => {
  return <RichTextRender data={value} add_class={className} serif={false} />;
};

export default BlocksViewWidget;
