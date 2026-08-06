import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem,
} from 'design-react-kit';

import { toPublicURL } from '@plone/volto/helpers/Url/Url';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { Icon } from 'io-sanita-theme/components';
import { buildCalendarUrl } from 'io-sanita-theme/helpers';
import './addToCalendar.scss';

const messages = defineMessages({
  add_to_calendar: {
    id: 'add_to_calendar',
    defaultMessage: 'Aggiungi al calendario',
  },
  add_to_calendar_apple: {
    id: 'add_to_calendar_apple',
    defaultMessage: 'Apple',
  },
  add_to_calendar_google: {
    id: 'add_to_calendar_google',
    defaultMessage: 'Google',
  },
  add_to_calendar_outlook: {
    id: 'add_to_calendar_outlook',
    defaultMessage: 'Outlook',
  },
  add_to_calendar_outlookcom: {
    id: 'add_to_calendar_outlookcom',
    defaultMessage: 'Outlook.com',
  },
  add_to_calendar_yahoo: {
    id: 'add_to_calendar_yahoo',
    defaultMessage: 'Yahoo',
  },
});

const PROVIDERS = [
  {
    id: 'apple',
    message: 'add_to_calendar_apple',
    isFile: true,
    icon: 'fab apple',
  },
  {
    id: 'google',
    message: 'add_to_calendar_google',
    isFile: false,
    icon: 'fab google',
  },
  {
    id: 'outlook',
    message: 'add_to_calendar_outlook',
    isFile: true,
    icon: 'fab microsoft',
  },
  {
    id: 'outlookcom',
    message: 'add_to_calendar_outlookcom',
    isFile: false,
    icon: 'fab microsoft',
  },
  {
    id: 'yahoo',
    message: 'add_to_calendar_yahoo',
    isFile: false,
    icon: 'fab yahoo',
  },
];

const getEventLocation = (content) =>
  [content?.nome_sede, content?.street, content?.zip_code, content?.city]
    .filter(Boolean)
    .join(', ');

const downloadIcs = (icsContent, filename) => {
  const blob = new Blob([icsContent], {
    type: 'text/calendar;charset=utf-8',
  });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

/**
 * PageHeaderAddToCalendar view component class.
 * @function PageHeaderAddToCalendar
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const PageHeaderAddToCalendar = ({ content, moment: momentlib }) => {
  const intl = useIntl();

  if (content?.['@type'] !== 'Event') {
    return null;
  }

  const moment = momentlib.default;

  const event = {
    title: content.title,
    description: content.description,
    location: getEventLocation(content),
    start: content.start,
    end: content.end,
    wholeDay: content.whole_day,
    recurrence: content.recurrence,
    url: toPublicURL(content['@id']),
  };

  const handleFileDownload = (e, providerId) => {
    e.preventDefault();
    const ics = buildCalendarUrl(moment, event, providerId);
    downloadIcs(ics, `${content.id || 'evento'}.ics`);
  };

  return (
    <UncontrolledDropdown className="d-inline add-to-calendar-dropdown mt-3">
      <DropdownToggle
        className="btn-icon btn btn-outline-primary"
        color=""
        tag="button"
        caret
      >
        <Icon
          color=""
          icon="it-calendar"
          padding={false}
          size=""
          aria-hidden={true}
        />
        <span>{intl.formatMessage(messages.add_to_calendar)}</span>
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          {PROVIDERS.map((provider) => (
            <LinkListItem
              key={provider.id}
              href={
                provider.isFile
                  ? '#'
                  : buildCalendarUrl(moment, event, provider.id)
              }
              target={provider.isFile ? undefined : '_blank'}
              rel={provider.isFile ? undefined : 'noreferrer'}
              onClick={
                provider.isFile
                  ? (e) => handleFileDownload(e, provider.id)
                  : undefined
              }
            >
              <Icon
                color=""
                icon={provider.icon}
                padding={false}
                size=""
                aria-hidden={true}
              />
              <span>{intl.formatMessage(messages[provider.message])}</span>
            </LinkListItem>
          ))}
        </LinkList>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

PageHeaderAddToCalendar.propTypes = {
  content: PropTypes.object,
};

export default injectLazyLibs(['moment'])(PageHeaderAddToCalendar);
