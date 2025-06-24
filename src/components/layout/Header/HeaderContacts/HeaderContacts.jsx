/**
 * HeaderContacts component.
 * @module components/ItaliaTheme/Header/HeaderContacts/HeaderContacts
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'design-react-kit';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { Icon } from 'io-sanita-theme/components';
import { getIoSanitaSettings } from 'io-sanita-theme/actions';
import { getItemsByPath } from 'io-sanita-theme/components/manage/Widgets/PathsWidget/utils';
import './headerContacts.scss';

const HeaderContacts = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state?.content);
  const settings = useSelector((state) => state?.iosanita_settings);
  const location = useLocation();
  const config = useSelector(
    (state) =>
      state?.content?.data?.['@components']?.['iosanita-settings']
        ?.contatti_testata ?? state.iosanita_settings?.data?.contatti_testata,
  );

  const items = getItemsByPath(config, location.pathname) ?? [];

  useEffect(() => {
    if (
      !content.get?.loading &&
      !content.get?.loaded &&
      !content.data &&
      !settings.loading &&
      !settings.loaded
    ) {
      dispatch(getIoSanitaSettings());
    }
  }, [dispatch, content]);

  return (
    items?.length > 0 && (
      <div className="header-contacts">
        <Container className="px-lg-4">
          <Row role="list">
            {items.map((item, index) => {
              return (
                <Col
                  className="contact-wrapper"
                  key={item['@id']}
                  role="listitem"
                  tabIndex="0"
                >
                  {item.description && (
                    <span className="item-description">{item.description}</span>
                  )}
                  {item.tag && <div className="item-type">{item.tag}</div>}
                  {item.link_value && (
                    <div className="link-value">
                      <TextBlockView data={{ value: item.link_value }} />
                    </div>
                  )}

                  {item.icon && (
                    <Icon
                      icon={item.icon}
                      color="primary"
                      size="sm"
                      aria-hidden={true}
                    />
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
