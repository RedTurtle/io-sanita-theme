/*Componente usato per definire placeholder nelle viste dei contenuti.*/
import React from 'react';
import config from '@plone/volto/registry';

const Placeholder = ({ content, position, children }) => {
  const contentType = content?.['@type'];
  const PlaceholderComponent =
    config.views?.contentTypesViewsSections?.[contentType]?.placeholder?.[
      position
    ] ;

  return PlaceholderComponent? <PlaceholderComponent content={content} children={children} /> : <React.Fragment children={children}/> ;
};

export default Placeholder;
