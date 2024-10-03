import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ScrollToTop } from 'io-sanita-theme/components';
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

  return (
    <>
      <ScrollToTop />
      <SubsiteLoader pathname={location.pathname} />
    </>
  );
};
export default GenericAppExtras;
