import React from 'react';
import {
  CardPlace,
  CardPersona,
  CardSimple,
  CardGuide,
} from 'io-sanita-theme/components';

const ResultItem = ({ item }) => {
  return item['@type'] === 'Struttura' ? (
    <CardPlace item={item} type="synthetic" key={item['@id']} />
  ) : item['@type'] === 'Persona' ? (
    <CardPersona item={item} key={item['@id']} />
  ) : item['@type'] === 'ComeFarePer' ? (
    <CardGuide item={item} key={item['@id']} />
  ) : (
    <CardSimple item={item} key={item['@id']} />
  );
};

export default ResultItem;
