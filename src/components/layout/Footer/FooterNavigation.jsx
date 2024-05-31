/**
 * FooterNavigation components.
 * @module components/layout/Footer/FooterNavigation
 */

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { isEqual } from 'lodash';
import { Row, Col, LinkList, LinkListItem } from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';

import config from '@plone/volto/registry';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
});

const FooterNavigation = () => {
  const intl = useIntl();
  const items = useSelector((state) => state.navigation.items, isEqual);
  const show_navigation = useSelector(
    (state) => state.navigation.show_in_footer,
  );

  const markFooterLinks = config.settings.siteProperties.markFooterLinks;
  const footerNavigationDepth =
    config.settings.siteProperties.footerNavigationDepth;

  return show_navigation ? (
    <>
      {items && (
        <Row tag="div">
          {items.map((item) => (
            <Col
              lg={3}
              md={3}
              sm={6}
              className="pb-4"
              widths={['xs', 'sm', 'md', 'lg', 'xl']}
              key={item.url}
            >
              <h4>
                <UniversalLink
                  href={item.url}
                  title={
                    intl.formatMessage(messages.goToPage) + ': ' + item.title
                  }
                  className={markFooterLinks ? 'underlined' : ''}
                >
                  {item.title}
                </UniversalLink>
              </h4>

              {footerNavigationDepth > 1 && item.items && (
                <LinkList className="footer-list clearfix" tag="div">
                  {item.items.map((subitem) => {
                    return (
                      <LinkListItem
                        key={subitem.url}
                        href={subitem.url}
                        tag={UniversalLink}
                        title={
                          intl.formatMessage(messages.goToPage) +
                          ': ' +
                          subitem.title
                        }
                      >
                        {subitem.title}
                      </LinkListItem>
                    );
                  })}
                </LinkList>
              )}
            </Col>
          ))}
        </Row>
      )}
    </>
  ) : null;
};

export default FooterNavigation;
