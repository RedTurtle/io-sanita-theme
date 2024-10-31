import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';

import { Container } from 'design-react-kit';

import './alert.scss';

const messages = defineMessages({
  expiredDate: {
    id: 'alert_expiredDate',
    defaultMessage: "Non visibile. E' scaduto il {date}.",
  },
  activeDate: {
    id: 'alert_activeDate',
    defaultMessage: 'Pubblicazione attiva.',
  },
  futureDate: {
    id: 'alert_futureDate',
    defaultMessage: 'Non visibile. Verà pubblicato il {date}',
  },
  errorDate: {
    id: 'alert_errorDate',
    defaultMessage:
      "Non visibile. C'è un errore sulle date: la data di scadenza è anteriore alla data d'inizio",
  },
  willExpire: {
    id: 'alert_willExpire',
    defaultMessage: 'Scadrà il {date}',
  },
});

const Wrapper = ({ inEditMode, children, className = '', data }) => {
  const intl = useIntl();
  const userLogged = useSelector((state) => state.userSession.token);

  const isActive = () => {
    const today = new Date().getTime();
    const start = data.startDate ? new Date(data.startDate).getTime() : 0;
    const end = data.endDate
      ? new Date(data.endDate).getTime()
      : Number.MAX_SAFE_INTEGER;

    const returnValue = { active: false, message: null };

    if (end < start) {
      returnValue.message = intl.formatMessage(messages.errorDate);
      returnValue.active = false;
    } else if (today < start) {
      returnValue.message = intl.formatMessage(messages.futureDate, {
        date: new Date(data.startDate).toLocaleString(),
      });
      returnValue.active = false;
    } else if (today < end) {
      returnValue.message = intl.formatMessage(messages.activeDate);
      if (data.endDate) {
        returnValue.message +=
          ' ' +
          intl.formatMessage(messages.willExpire, {
            date: new Date(data.endDate).toLocaleString(),
          });
      }
      returnValue.active = true;
    } else {
      returnValue.message = intl.formatMessage(messages.expiredDate, {
        date: new Date(data.endDate).toLocaleString(),
      });
      returnValue.active = false;
    }
    return returnValue;
  };

  const activeStatus = isActive();

  const color =
    data.color && data.color.indexOf('bg-alert') < 0
      ? 'bg-alert-' + data.color
      : data.color;
  return (
    <>
      {(userLogged || activeStatus.active) && (
        <>
          <section
            role="alert"
            className={cx('block alert_block', className, {
              'public-ui': inEditMode,
              expired: userLogged && !activeStatus.active,
            })}
          >
            {userLogged && (
              <div className="manager-alert-info-dates">
                {activeStatus.message}
              </div>
            )}
            <div className={cx('full-width', color)}>
              <Container className="px-4 py-5">{children}</Container>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default Wrapper;
