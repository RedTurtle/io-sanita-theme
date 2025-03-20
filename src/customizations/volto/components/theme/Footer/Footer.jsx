/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import {
  FooterMain,
  FooterSmall,
  SubsiteFooter,
} from 'io-sanita-theme/components/';

import { FeedbackForm } from 'volto-feedback-italia';

import config from '@plone/volto/registry';

/**
 * Footer component class.
 * @class Footer
 * @extends Component
 */

const Footer = ({ intl }) => {
  const location = useLocation();
  const currentContent = useSelector((state) => state.content?.data);
  let contentType = currentContent?.['@type'];

  if (config.settings.nonContentRoutesPublic?.includes(location.pathname)) {
    contentType = null;
  }

  const NoFeedbackFormFor =
    config.settings.siteProperties.noFeedbackFormFor || [];
  const showFeedbackForm = config.settings.siteProperties
    ?.enableNoFeedbackFormFor
    ? contentType &&
      !noFeedbackFormFor.includes(contentType) &&
      config.settings.siteProperties.enableFeedbackForm
    : true;

  let content = (
    <>
      {showFeedbackForm && <FeedbackForm contentType={contentType} />}

      <SubsiteFooter />
      <footer className="it-footer" id="footer">
        <FooterMain />
        <FooterSmall />
      </footer>
    </>
  );

  return content;
};

export default Footer;
