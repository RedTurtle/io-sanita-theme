/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useGoogleAnalytics } from 'volto-google-analytics';

import {
  FooterMain,
  FooterSmall,
  SubsiteFooter,
  FeedbackForm,
} from 'io-sanita-theme/components/';

import config from '@plone/volto/registry';
/**
 * Footer component class.
 * @class Footer
 * @extends Component
 */

const Footer = ({ intl }) => {
  useGoogleAnalytics();

  const currentContent = useSelector((state) => state.content?.data);
  let contentType = currentContent?.['@type'];

  const NoFeedbackFormFor = []; //['Plone Site', 'LRF', 'Subsite'];
  const feedbackFormEnabled =
    config.settings.siteProperties.enableFeedbackForm &&
    contentType &&
    NoFeedbackFormFor.indexOf(contentType) < 0;

  let content = (
    <>
      {feedbackFormEnabled && <FeedbackForm contentType={contentType} />}

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
