import React from 'react';
import { BandoNoteAggiornamento } from 'io-sanita-theme/components/View/Bando';
import { Metadata } from 'io-sanita-theme/components/View/commons';

const BandoMetadata = ({ content }) => {
  return (
    <Metadata content={content}>
      <BandoNoteAggiornamento content={content} />
    </Metadata>
  );
};

export default BandoMetadata;
