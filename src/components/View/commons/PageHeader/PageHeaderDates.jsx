import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { viewDate } from 'io-sanita-theme/helpers';

/**
 * PageHeaderDates view component class.
 * @function PageHeaderDates
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  date: {
    id: 'date',
    defaultMessage: 'Data',
  },
  expire: {
    id: 'expire',
    defaultMessage: 'Scadenza',
  },
});

const PageHeaderDates = ({ content }) => {
  const intl = useIntl();
  const view_effective = content.effective && content['@type'] !== 'Event';
  const view_expires = content.expires;
  const view = view_effective || view_expires;

  return view ? (
    <div className="col-6">
      {view_effective && (
        <div className="row">
          <div className="col-12">
            <small>{intl.formatMessage(messages.date)}:</small>
            <p className="font-monospace">
              {viewDate(intl.locale, content.effective, 'DD MMMM YYYY')}
            </p>
          </div>
        </div>
      )}
      {view_expires && (
        <div className="row">
          <div className="col-12">
            <small>{intl.formatMessage(messages.expire)}:</small>
            <p className="font-monospace">
              {viewDate(intl.locale, content.expires, 'DD-MM-Y')}
            </p>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default PageHeaderDates;

PageHeaderDates.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
