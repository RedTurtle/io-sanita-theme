import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl, defineMessages } from 'react-intl';
import moment from 'moment';

import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { When } from '@plone/volto/components/theme/View/EventDatesInfo';

const messages = defineMessages({
  from: {
    id: 'from',
    defaultMessage: 'dal',
  },
  to: {
    id: 'to',
    defaultMessage: 'al',
  },
  event_recurrence_label: {
    id: 'listing_event_recurrence_label',
    defaultMessage: 'Questo evento ha più date: vedi tutte',
  },
});

const Intl = () => {
  const intl = useIntl();
  return intl;
};

export const viewDate = (locale, value, format) => {
  //  Used to set a server timezone or UTC as default
  moment.updateLocale(locale, moment.localeData(locale)._config); // copy locale to moment-timezone
  let datetime = null;

  if (value) {
    if (typeof value == 'string') {
      // check if datetime has timezone, otherwise assumes it's UTC
      datetime = value.match(/T(.)*(-|\+|Z)/g)
        ? // Since we assume UTC everywhere, then transform to local (momentjs default)
          moment(value)
        : value.match(/T(.)/g)
        ? moment(`${value}Z`) // This might happen in old Plone versions dates
        : moment(value); //This when date is like '2021-05-05'
    } else {
      datetime = moment(value);
    }
  }

  if (format && datetime) {
    return datetime.format(format);
  }
  return datetime;
};

export const getRealStartAndEndWithRecurrence = (
  locale,
  value,
  recurrence,
  rrulestr,
  intl,
) => {
  if (!rrulestr || !recurrence) return null;
  const rruleSet = rrulestr(recurrence, {
    compatible: true,
    forceset: true,
  });
  const recurrenceresults = rruleSet.all();
  return {
    recurrenceStart: viewDate(intl.locale, recurrenceresults?.[0]),
    recurrenceEnd: viewDate(
      intl.locale,
      recurrenceresults?.[recurrenceresults?.length - 1],
    ),
  };
};

export const getCalendarDate = (item, rrulestr) => {
  const intl = Intl();
  const effective = item.effective && (
    <span>{viewDate(intl.locale, item.effective, 'DD MMMM YYYY')}</span>
  );

  let ret = null;
  switch (item['@type']) {
    case 'Event':
      let realStart = item.start;
      let realEnd = item.end;
      if (item.recurrence) {
        const _start = item.start && viewDate(intl.locale, item.start);
        const recurrenceDates = getRealStartAndEndWithRecurrence(
          intl.locale,
          _start,
          item.recurrence,
          rrulestr,
          intl,
        );
        // If the recurrence range is entirely in the past,
        // then no future occurrences exist and both
        // recurrenceStart and recurrenceEnd will be null
        // so fallback to displaying the original info
        realStart = recurrenceDates.recurrenceStart || item.start;
        realEnd = recurrenceDates.recurrenceEnd || item.end;

        if (typeof realStart === 'object') {
          //moment date
          realStart = realStart.toISOString();
        }
        if (typeof realEnd === 'object') {
          //moment date
          realEnd = realEnd.toISOString();
        }
      }
      if (item.start || item.end) {
        ret = (
          <When
            start={realStart}
            end={realEnd}
            whole_day={item.whole_day}
            open_end={item.open_end}
            start_label={intl.formatMessage(messages.from)}
            end_label={intl.formatMessage(messages.to)}
            start_date_format={'DD MMM YYYY'}
            end_date_format={'DD MMM YYYY'}
            show_time={false}
          />
        );
      }
      break;
    case 'News Item':
      ret = effective;
      break;
    default:
      ret = null;
  }

  return ret;
};

export const getEventRecurrenceMore = (item, isEditMode) => {
  const intl = Intl();
  let ret = null;
  if (item['@type'] === 'Event') {
    if (item.recurrence) {
      ret = (
        <Link
          to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}
          className="event-recurrences-more"
        >
          {intl.formatMessage(messages.event_recurrence_label)}
        </Link>
      );
    }
  }

  return ret;
};
