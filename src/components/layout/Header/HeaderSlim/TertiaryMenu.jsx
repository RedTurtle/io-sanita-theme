/**
 * TertiaryMenu component.
 * @module components/ItaliaTheme/Header/HeaderSlim/TertiaryMenu
 */

import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import cx from 'classnames';
import { Nav, NavItem, NavLink } from 'design-react-kit';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';

import { getSlimHeader, getItemsByPath } from 'volto-slimheader';

const TertiaryMenu = ({ mobile = false }) => {
  const intl = useIntl();
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();

  const slimHeader = useSelector((state) => state.slimHeader?.result);
  const slimHeaderItems = getItemsByPath(slimHeader, pathname)
    ?.filter((item) => item.visible)
    .map((item) => {
      return {
        url: item.href || flattenToAppURL(item.linkUrl?.[0]?.['@id']) || '/',
        title: item.title,
        inEvidence: item.inEvidence,
      };
    });

  useEffect(() => {
    dispatch(getSlimHeader());
  }, [dispatch]);

  const items = slimHeaderItems ?? [];

  return items?.length > 0 ? (
    <Nav
      vertical={false}
      className={cx('tertiary-menu', {
        'd-lg-none navbar-nav': mobile,
        'd-none d-lg-flex': !mobile,
      })}
    >
      {items.map((navitem, id) => (
        <NavItem
          tag="li"
          key={id}
          className={cx('', { 'in-evidence': navitem.inEvidence })}
        >
          <NavLink href={navitem.url} tag={UniversalLink}>
            <span>{navitem.title}</span>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  ) : null;
};

export default TertiaryMenu;
