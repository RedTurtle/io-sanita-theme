import React from 'react';
import {
  CardPlace,
  CardPersona,
  CardSimple,
  CardGuide,
} from 'io-sanita-theme/components';

const ResultItem = ({ item }) => {
  return item['@type'] === 'Struttura' ? (
    <CardPlace item={item} type="synthetic" />
  ) : item['@type'] === 'Persona' ? (
    <CardPersona item={item} />
  ) : item['@type'] === 'ComeFarePer' ? (
    <CardGuide item={item} />
  ) : (
    <CardSimple item={item} />
  );
};

export default ResultItem;
