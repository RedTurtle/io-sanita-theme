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

  const getAttachment = (item, i) => {
    console.log(item);
    if (
      item.type === 'File' ||
      item.type === 'Image' ||
      item.type === 'Link' ||
      item.type === 'Collegamento'
    ) {
      return <CardFile key={item.url + i} item={item} />;
    } else if (item.type === 'Modulo') {
      return (
        <CardFile
          item={{
            ...item,
            '@id': item.url.replace(/\/view$/, ''),
          }}
          key={item.url + i}
        />
      );
    }
    // else if (item.type === 'Link') {
    //   return (
    //     <Card
    //       className="card card-teaser shadow p-4 mt-3 rounded attachment"
    //       noWrapper={true}
    //       tag="div"
    //     >
    //       <Icon
    //         className={undefined}
    //         icon={'it-external-link'}
    //         padding={false}
    //       />
    //       <CardBody>
    //         <CardTitle className="title h5">
    //           <UniversalLink
    //             href={flattenToAppURL(item.url)}
    //             rel="noopener noreferrer"
    //           >
    //             {item.title}
    //           </UniversalLink>
    //         </CardTitle>
    //       </CardBody>
    //     </Card>
    //   );
    // }
  };

  return content?.approfondimenti?.length > 0 ? (
    <>
      {content.approfondimenti.map((item, i) => {
        const id_split = item.url.split('/');
        const id = id_split[id_split.length - 1];
        return (
          <RichTextSection tag_id={id} title={item.title}>
            <Row>
              {item.children.map((inner_item, x) => (
                <Col lg={6}>{getAttachment(inner_item, x)}</Col>
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
