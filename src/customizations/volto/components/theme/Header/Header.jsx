/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSelector } from 'react-redux';

import Navigation from '@plone/volto/components/theme/Navigation/Navigation';
//import Anontools from '@plone/volto/components/theme/Anontools/Anontools';
//import Logo from '@plone/volto/components/theme/Logo/Logo';
//import { SearchWidget } from '@plone/volto/components/manage/Widgets';

import {
  HeaderSlim,
  HeaderCenter,
  HeaderContacts,
  SubsiteHeader,
} from 'io-sanita-theme/components';
import { Headers } from 'design-react-kit';

const Header = ({ pathname }) => {
  const location = useLocation();
  const headerWrapperRef = useRef(null);
  const headerSlimRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mini, setMini] = useState(false);

  const isEditMode = useSelector(
    (state) =>
      Object.keys(state.form.global ?? {})?.length > 0 ||
      location.pathname.indexOf('/controlpanel') === 0,
  );

  useEffect(() => {
    const headerWrapper = headerWrapperRef.current;
    const headerSlim = headerSlimRef.current;

    if (headerWrapper.offsetHeight && headerSlim.offsetHeight) {

      // 5px è lo scarto quando sei mobile, 120 l'altezza fissa quando non si è su mobile 
      const heightForDevice = window.matchMedia('(max-width: 991px)').matches ? (headerSlim.offsetHeight - 5) : (headerSlim.offsetHeight + 120);

      setHeaderHeight(headerWrapper.offsetHeight);

      const handleScroll = () => {
        setMini(window.pageYOffset > heightForDevice);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="public-ui">
      {/* <Headers sticky={true} className={mini ? 'is-sticky' : undefined}> */}
      <div ref={headerWrapperRef} id="mainHeaderWrapper">
        <Headers
          className={cx({
            'is-sticky': mini && !isEditMode,
            'it-header-sticky': !isEditMode,
          })}
        >
          {/* SLIM HEADER */}
          <div ref={headerSlimRef} id="headerSlimWrapper">
            <HeaderSlim  />
          </div>

          {/* MAIN HEADER */}
          <div className="it-nav-wrapper">
            <HeaderCenter />
            <Navigation pathname={pathname} isEditMode={isEditMode} />
          </div>
          {/* BOTTOM HEADER WITH CONTACTS */}
          <HeaderContacts />
        </Headers>

        {/* SUBSITE HEADER */}
        <SubsiteHeader />
      </div>
      {/* SPACE HEADER WHEN IS STICKY */}
      <div id="headerSpacer" style={{ height: mini ? headerHeight : 0 }} />
    </div>
  );
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
