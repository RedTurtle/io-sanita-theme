/**
 * HeaderContacts component.
 * @module components/ItaliaTheme/Header/HeaderContacts/HeaderContacts
 */

import { useSelector } from 'react-redux';
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
              return (
                <Col className="contact-wrapper" key={item['@id']}>
                  {item.description && (
                    <span className="item-description">{item.description}</span>
                  )}
                  {item.tag && <span className="item-type">{item.tag}</span>}
                  {item.link_value && (
                    <div
                      className="link-value"
                      dangerouslySetInnerHTML={{ __html: item.link_value.data }}
                    />
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
