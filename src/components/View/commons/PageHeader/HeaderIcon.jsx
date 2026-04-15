import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import { Icon } from 'io-sanita-theme/components';

const messages = defineMessages({
  iconTitle: {
    id: 'icon_title',
    defaultMessage: 'Icona per {topic_title}',
  },
});

const HeaderIcon = ({ icon, title }) => {
  const intl = useIntl();

  return icon ? (
    <div className="icon-argument-container mb-2">
      <Icon
        icon={icon}
        {...(title
          ? {
              title: intl.formatMessage(messages.iconTitle, {
                topic_title: title,
              }),
            }
          : { 'aria-hidden': true })}
      />
    </div>
  ) : null;
};

export default HeaderIcon;

HeaderIcon.propTypes = {
  icon: PropTypes.string,
};
