/**
 * HeaderContacts component.
 * @module components/ItaliaTheme/Header/HeaderContacts/HeaderContacts
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'io-sanita-theme/components';
import { Container, Row, Col } from 'design-react-kit';
import './headerContacts.scss';

const HeaderContacts = () => {
  // exemplo items - arriverà via props
  const items = [
    {
      '@id': 'ff4e6c69-d534-4de6-ba24-f239c8d03652',
      description: 'Prenota servizi e prestazioni',
      tag: 'CUP',
      href: [
        {
          '@id': 'tel:0601020304',
          title: '0601020304',
        },
      ],
      icon: 'hand-holding-heart',
    },
    {
      '@id': 'ff4e6c69-d534-4de6-ba24-f239c8d03652',
      description: 'Richiedi informazioni o fai una segnalazione',
      tag: 'URP',
      href: [
        {
          '@id': 'tel:0601020304',
          title: '0601020304',
        },
      ],
      icon: 'baby',
    },
    {
      '@id': 'ff4e6c69-d534-4de6-ba24-f239c8d03652',
      description: 'Prenota servizi e prestazioni',
      tag: 'CUP',
      href: [
        {
          '@id': 'tel:0601020304',
          title: '0601020304',
        },
      ],
      icon: 'hand-holding-heart',
    },
  ];

  return (
    items && (
      <div className="header-contacts">
        <Container>
          <Row>
            {items.map((item, index) => {
              return (
                <Col className="contact-wrapper" key={item['@id']}>
                  {item.description && (
                    <span className="item-description">{item.description}</span>
                  )}
                  {item.tag && <span className="item-type">{item.tag}</span>}
                  {item.href && (
                    <UniversalLink
                      href={item.href[0]['@id']}
                      item={item.href[0]['@id']}
                      title={item.href[0].title}
                    >
                      {item.href[0].title}
                    </UniversalLink>
                  )}
                  {item.icon && (
                    <Icon icon={item.icon} color="primary" size="sm" />
                  )}
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    )
  );
};

export default HeaderContacts;
