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
  //esempio items - arriverà via props
  const items = [
    { text: 'testo 1', href: 'https://www.sitoweb.it' },
    { text: 'testo 2', href: 'tel:0532123456' },
    { text: 'testo 3', href: 'mailto:teto@prova.it' },
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
            {items.map((item, index) => (
              <Col key={'header-contact' + index}>
                <span>{item?.text}</span>
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
                  size="sm"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  );
};

export default HeaderContacts;
