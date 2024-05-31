/**
 * FooterSocials component.
 * @module components/layout/Footer/FooterSocials
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { getSocialSettings } from 'volto-social-settings';
import { Icon } from 'io-sanita-theme/components';

const FooterSocials = () => {
  const socialSettings = useSelector((state) => state.socialSettings);
  const dispatch = useDispatch();

  const items = isEmpty(socialSettings.results) ? [] : socialSettings.results;

  useEffect(() => {
    if (!socialSettings?.loadingResults && items.length === 0) {
      dispatch(getSocialSettings());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    items.length > 0 && (
      <ul className="list-inline text-start social">
        {items.map((social, idx) => (
          <li className="list-inline-item" key={idx}>
            <a
              title={social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white"
            >
              <Icon
                icon={social.icon}
                color="white"
                className="align-top"
                padding={false}
                size="sm"
                title={social.title}
              />
              <span className="visually-hidden">{social.title}</span>
            </a>
          </li>
        ))}
      </ul>
    )
  );
};

export default FooterSocials;
