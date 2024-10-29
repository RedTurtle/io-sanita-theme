/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  /* Anontools,
  Logo,*/
  Navigation,
  /* SearchWidget,*/
} from '@plone/volto/components';

import {
  HeaderSlim,
  HeaderCenter,
  HeaderContacts,
  SubsiteHeader,
} from 'io-sanita-theme/components';
import { Headers } from 'design-react-kit';

const Header = ({ pathname }) => {
  const [mini, setMini] = useState(false);

  const handleScroll = () => {
    setMini(window.pageYOffset > 120);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="public-ui">
      {/* <Headers sticky={true} className={mini ? 'is-sticky' : undefined}> */}
      <Headers className={cx('it-header-sticky', { 'is-sticky': mini })}>
        <HeaderSlim />

        <div className="it-nav-wrapper">
          <HeaderCenter />
          <Navigation pathname={pathname} />
        </div>
        <HeaderContacts />
      </Headers>
      <SubsiteHeader />
    </div>
  );
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
