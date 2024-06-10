import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BodyClass } from '@plone/volto/helpers';
import { RemoveBodyClass, ScrollToTop } from 'io-sanita-theme/components';
import { SubsiteLoader } from 'volto-subsites';
import config from '@plone/volto/registry';

const GenericAppExtras = (props) => {
  const location = useLocation();

  const subsite = useSelector((state) => state.subsite?.data);
  const subsiteLoadable =
    config.settings.loadables['subsite-' + subsite?.subsite_css_class?.token];
  if (subsiteLoadable) {
    subsiteLoadable.load();
  }

  const FORCE_PUBLIC_UI = ['/sitemap', '/search'];
  const isPublicUI = FORCE_PUBLIC_UI.reduce(
    (acc, route) => acc || new RegExp(route).test(`/${location.pathname}`),
    false,
  );

  return (
    <>
      {isPublicUI && (
        <>
          <BodyClass className="public-ui" />
          <RemoveBodyClass className="cms-ui" />
        </>
      )}
      <ScrollToTop />
      <SubsiteLoader pathname={location.pathname} />
    </>
  );
};
export default GenericAppExtras;
