/**
 * SocialHeader component.
 * @module components/ItaliaTheme/Header/SocialHeader
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import isEmpty from 'lodash/isEmpty';

import { HeaderSocialsZone } from 'design-react-kit';
import { Icon } from 'io-sanita-theme/components';
import { getSocialSettings } from 'volto-social-settings';

const messages = defineMessages({
  followUs: {
    id: 'Seguici su',
    defaultMessage: 'Seguici su',
  },
  socialOpen: {
    id: 'Nuova scheda',
    defaultMessage: '- apri in nuova scheda',
  },
});

const SocialHeader = ({ mobile }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socialSettings = useSelector((state) => state?.socialSettings); //useSelector((state) => state?.socialSettings?.results);
  const subsite = useSelector((state) => state.subsite?.data);

  const items = isEmpty(socialSettings.results) ? [] : socialSettings.results;

  useEffect(() => {
    if (!mobile && !socialSettings?.loadingResults && items.length === 0) {
      dispatch(getSocialSettings());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const socials =
    subsite?.subsite_social_links?.length > 0
      ? JSON.parse(subsite.subsite_social_links)
      : items;

  return (
    socials?.length > 0 && (
      <HeaderSocialsZone
        className="d-md-none d-lg-flex"
        label={intl.formatMessage(messages.followUs)}
      >
        <ul>
          {socials?.map((social, idx) => (
            <li key={idx}>
              <a
                title={`${intl.formatMessage(messages.followUs)} ${
                  social.title
                } ${intl.formatMessage(messages.socialOpen)}`}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  color=""
                  icon={social.icon}
                  padding={false}
                  size=""
                  title={social.title}
                  aria-hidden={true}
                />
              </a>
            </li>
          ))}
        </ul>
      </HeaderSocialsZone>
    )
  );
};

export default SocialHeader;
