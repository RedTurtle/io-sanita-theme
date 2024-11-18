/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSelector } from 'react-redux';

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
  const location = useLocation();
  const [mini, setMini] = useState(false);
  const isEditMode = useSelector(
    (state) =>
      Object.keys(state.form.global ?? {})?.length > 0 ||
      location.pathname.indexOf('/controlpanel') === 0,
  );

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
      <Headers
        className={cx({
          'is-sticky': mini && !isEditMode,
          'it-header-sticky': !isEditMode,
        })}
      >
        <HeaderSlim />

        <div className="it-nav-wrapper">
          <HeaderCenter />
          <Navigation pathname={pathname} isEditMode={isEditMode} />
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
