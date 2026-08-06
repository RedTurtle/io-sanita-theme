const escapeICSText = (text = '') =>
  text
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');

const formatDate = (date, wholeDay) =>
  wholeDay
    ? date.clone().utc().format('YYYYMMDD')
    : date.clone().utc().format('YYYYMMDD[T]HHmmss[Z]');

/**
 * Builds a calendar URL (Google, Yahoo, Outlook.com) or an .ics payload
 * (Apple, Outlook desktop) for a Plone Event content.
 * @function buildCalendarUrl
 * @param {object} event {title, description, location, start, end, wholeDay, recurrence, url}
 *   start/end must be moment instances (see io-sanita-theme/helpers viewDate)
 * @param {string} provider one of 'google', 'yahoo', 'outlookcom', 'apple', 'outlook'
 * @returns {string} URL or .ics content
 */
export const buildCalendarUrl = (event, provider) => {
  const {
    title,
    description,
    location,
    start,
    end,
    wholeDay,
    recurrence,
    url,
  } = event;
  const startFormatted = formatDate(start, wholeDay);
  const endFormatted = formatDate(end, wholeDay);

  switch (provider) {
    case 'google': {
      const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: title || '',
        dates: `${startFormatted}/${endFormatted}`,
        details: description || '',
        location: location || '',
      });
      return `https://calendar.google.com/calendar/render?${params.toString()}`;
    }
    case 'yahoo': {
      const durationMinutes = Math.max(end.diff(start, 'minutes'), 30);
      const dur = `${String(Math.floor(durationMinutes / 60)).padStart(
        2,
        '0',
      )}${String(durationMinutes % 60).padStart(2, '0')}`;
      const params = new URLSearchParams({
        v: '60',
        view: 'd',
        type: '20',
        title: title || '',
        st: startFormatted,
        dur,
        desc: description || '',
        in_loc: location || '',
      });
      return `https://calendar.yahoo.com/?${params.toString()}`;
    }
    case 'outlookcom': {
      const params = new URLSearchParams({
        rru: 'addevent',
        startdt: start.toISOString(),
        enddt: end.toISOString(),
        subject: title || '',
        body: description || '',
        location: location || '',
        path: '/calendar/view/Month',
      });
      return `https://outlook.live.com/owa/?${params.toString()}`;
    }
    default: {
      // apple / outlook desktop -> .ics payload
      const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        url && `URL:${url}`,
        `DTSTART${wholeDay ? ';VALUE=DATE' : ''}:${startFormatted}`,
        `DTEND${wholeDay ? ';VALUE=DATE' : ''}:${endFormatted}`,
        `SUMMARY:${escapeICSText(title)}`,
        description && `DESCRIPTION:${escapeICSText(description)}`,
        location && `LOCATION:${escapeICSText(location)}`,
        ...(recurrence
          ? recurrence
              .split('\n')
              .map((line) => line.trim())
              .filter(Boolean)
          : []),
        'END:VEVENT',
        'END:VCALENDAR',
      ].filter(Boolean);
      return lines.join('\r\n');
    }
  }
};
