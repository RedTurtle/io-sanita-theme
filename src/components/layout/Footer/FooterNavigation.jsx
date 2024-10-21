/**
 * FooterNavigation components.
 * @module components/layout/Footer/FooterNavigation
 */

import cx from 'classnames';
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
  const N_COLUMNS = 3;
  const items = useSelector((state) => state.navigation.items, isEqual);
  const show_navigation = useSelector(
    (state) => state.navigation.show_in_footer,
  );

  const markFooterLinks = config.settings.siteProperties.markFooterLinks;
  const footerNavigationDepth =
    config.settings.siteProperties.footerNavigationDepth;

  const colWidth = 12 / (items.length < N_COLUMNS ? items.length : N_COLUMNS);

  const isLastRow = (index, length) => {
    let rest = length % N_COLUMNS;
    if (rest === 0) {
      rest = N_COLUMNS;
    }
    return index >= length - rest;
  };

  return show_navigation ? (
    <>
      {items && (
        <Row tag="div">
          {items.map((item, i) => (
            <Col
              lg={colWidth}
              md={colWidth}
              sm={6}
              className={cx('py-4', {
                'last-row-cols': isLastRow(i, items.length),
              })}
              widths={['xs', 'sm', 'md', 'lg', 'xl']}
              key={item.url}
            >
              <h2 className="h4">
                <UniversalLink
                  href={item.url}
                  title={
                    intl.formatMessage(messages.goToPage) + ': ' + item.title
                  }
                  className={markFooterLinks ? 'underlined' : ''}
                >
                  {item.title}
                </UniversalLink>
              </h2>

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
