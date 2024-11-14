import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import cx from 'classnames';
import { Icon } from 'io-sanita-theme/components';
import './bando_status.scss';

const messages = defineMessages({
  bando: {
    id: 'Bando',
    defaultMessage: 'Bando',
  },
  open: {
    id: 'bando_open',
    defaultMessage: 'Attivo',
  },
  closed: {
    id: 'bando_closed',
    defaultMessage: 'Scaduto',
  },
  inProgress: {
    id: 'bando_inProgress',
    defaultMessage: 'In corso',
  },
  scheduled: {
    id: 'bando_scheduled',
    defaultMessage: 'Programmato',
  },
});

/**
 * BandoStatus view component class.
 * @function BandoStatus
 */

const BandoStatus = ({ content, style = 'none' }) => {
  const intl = useIntl();
  //se sei in view del bando, lo stato del bando  è in view-extra-data perchè è un metadato
  const value =
    content.bando_state?.[0] ??
    content['@components']?.['view-extra-data']?.stato_bando?.[0];
  const label = value ? intl.formatMessage(messages[value]) : null;

  if (!label) {
    return <></>;
  }
  if (style === 'card') {
    return (
      <div
        className={cx(
          'card card-teaser shadow p-3 mt-3 rounded bando-status style-card',
          value,
        )}
      >
        <div className="card-body">
          <div className="card-text">
            <Icon
              className="me-2"
              color=""
              icon={
                {
                  open: 'it-check-circle',
                  closed: 'it-error',
                  inProgress: 'it-info-circle',
                  scheduled: 'it-calendar',
                }[value]
              }
              padding={false}
              size=""
              title={`${intl.formatMessage(messages.bando)} ${label}`}
            />
            {intl.formatMessage(messages.bando)} {label}
          </div>
        </div>
      </div>
    );
  }
  if (style === 'chip') {
    return (
      <div
        className={cx('bando-status style-chip', value)} //inProgress not in-progress
      >
        {label}
      </div>
    );
  }
  return label;
};

BandoStatus.propTypes = {
  content: PropTypes.object.isRequired,
  style: PropTypes.oneOf(['none', 'card', 'chip']),
};

export default BandoStatus;
