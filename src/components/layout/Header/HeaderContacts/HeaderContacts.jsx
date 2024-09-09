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
      description: 'Prenota servizi e prestazioni',
      tag: 'CUP',
      href: 'https://www.sitoweb.it',
    },
    {
      description: 'Richiedi informazioni o fai una segnalazione',
      tag: 'URP',
      href: 'tel:0532123456',
    },
    {
      description: 'Prenota servizi e prestazioni',
      tag: 'CUP',
      href: 'mailto:teto@prova.it',
    },
    {
      description: 'Richiedi informazioni o fai una segnalazione',
      tag: 'URP',
      href: 'tel:0532123456',
    },
  ];

  const getDisplayText = (link) => {
    if (link.startsWith('tel:')) {
      return link.replace('tel:', '');
    } else if (link.startsWith('mailto:')) {
      return link.replace('mailto:', '');
    } else {
      return link;
    }
  };

  return (
    items && (
      <div className="header-contacts">
        <Container>
          <Row>
            {items.map((item, index) => {
              return (
                <Col className="contact-wrapper" key={'header-contact' + index}>
                  <span className="item-description">{item.description}</span>
                  <span className="item-type">{item.tag}</span>
                  <UniversalLink
                    href={item.href}
                    title={getDisplayText(item.href)}
                  >
                    {getDisplayText(item.href)}
                  </UniversalLink>
                  <Icon
                    icon={
                      item.href.startsWith('tel:')
                        ? 'it-telephone'
                        : item.href.startsWith('mailto:')
                          ? 'it-mail'
                          : 'it-link'
                    }
                    color="primary"
                    size="sm"
                  />
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
