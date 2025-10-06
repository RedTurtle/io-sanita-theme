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
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mini, setMini] = useState(false);

  const isEditMode = useSelector(
    (state) =>
      Object.keys(state.form.global ?? {})?.length > 0 ||
      location.pathname.indexOf('/controlpanel') === 0,
  );

  useEffect(() => {
    const node = headerWrapperRef.current;
    if (node) {
      const height = node.offsetHeight;
      if (height > 0) {
        setHeaderHeight(height);
      }
    }
  }, []);

  // Scroll solo per mini
  useEffect(() => {
    const handleScroll = () => {
      setMini(window.pageYOffset > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="public-ui">
      {/* <Headers sticky={true} className={mini ? 'is-sticky' : undefined}> */}
      <div ref={headerWrapperRef} id='mainHeaderWrapper'>
        <Headers
          className={cx({
            'is-sticky': mini && !isEditMode,
            'it-header-sticky': !isEditMode,
          })}
        >
          {/* SLIM HEADER */}
          <HeaderSlim />

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
