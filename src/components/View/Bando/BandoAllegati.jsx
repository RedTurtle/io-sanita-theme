import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'design-react-kit';
import { CardFile } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';

const BandoAttachment = ({ item }) => {
  if (
    item['@type'] === 'File' ||
    item['@type'] === 'Image' ||
    item['@type'] === 'Link' ||
    item['@type'] === 'Modulo'
  ) {
    return <CardFile item={item} />;
  }
};

const BandoAllegati = ({ content }) => {
  const approfondimenti =
    content?.['@components']?.['view-extra-data']?.approfondimenti;

  return approfondimenti?.length > 0 ? (
    <>
      {approfondimenti.map((item, i) => {
        return (
          <RichTextSection
            tag_id={item.id}
            title={item.title}
            key={'approfondimento_' + i}
          >
            <Row>
              {item.items.map((inner_item, x) => (
                <Col
                  lg={6}
                  className="py-lg-2"
                  key={'approfondimento_' + i + '-' + x}
                >
                  <BandoAttachment item={inner_item} />
                </Col>
              ))}
            </Row>
          </RichTextSection>
        );
      })}
    </>
  ) : (
    <></>
  );
};

BandoAllegati.propTypes = {
  content: PropTypes.shape({
    chiusura_procedimento_bando: PropTypes.string,
    scadenza_bando: PropTypes.string,
    scadenza_domande_bando: PropTypes.string,
    effective: PropTypes.string,
  }).isRequired,
};
export default BandoAllegati;
