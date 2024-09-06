import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody, CardTitle, Row, Col } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { Icon, CardFile } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  allegati: {
    id: 'allegati',
    defaultMessage: 'Documenti allegati',
  },
});

const BandoAllegati = ({ content }) => {
  const intl = useIntl();

  const BandoAttachment = ({ item }) => {
    if (item.type === 'File' || item.type === 'Image') {
      return (
        <CardFile
          item={{ ...item, file: item, '@type': item.type, '@id': item.url }}
        />
      );
    } else if (item.type === 'Modulo') {
      return (
        <CardFile
          item={{
            ...item,
            '@type': item.type,
            '@id': item.url.replace(/\/view$/, ''),
          }}
        />
      );
    } else if (item.type === 'Link' || item.type === 'Collegamento') {
      return (
        <CardFile
          item={{
            ...item,
            remoteUrl: item.remoteUrl ?? item.url,
            '@type': 'Link',
          }}
        />
      );
    }
  };

  return content?.approfondimenti?.length > 0 ? (
    <>
      {content.approfondimenti.map((item, i) => {
        const id_split = item.url.split('/');
        const id = id_split[id_split.length - 1];
        return (
          <RichTextSection
            tag_id={id}
            title={item.title}
            key={'approfondimento_' + i}
          >
            <Row>
              {item.children.map((inner_item, x) => (
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
