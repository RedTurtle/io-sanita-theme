/**
 * HeaderContacts component.
 * @module components/ItaliaTheme/Header/HeaderContacts/HeaderContacts
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'io-sanita-theme/components';
import { Container, Row, Col } from 'design-react-kit';
import './headerContacts.scss';

const HeaderContacts = () => {
  const items = useSelector(
    (state) =>
      state?.content?.data?.['@components']?.['iosanita-settings']
        .contatti_testata,
  );

  return (
    items && (
      <div className="header-contacts">
        <Container>
          <Row>
            {items.map((item, index) => {
              console.log(item);
              return (
                <Col className="contact-wrapper" key={item['@id']}>
                  {item.description && (
                    <span className="item-description">{item.description}</span>
                  )}
                  {item.tag && <span className="item-type">{item.tag}</span>}
                  {item.link_value && (
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
