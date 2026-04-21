import { defineMessages, useIntl } from 'react-intl';
import { Badge } from 'design-react-kit';

const messages = defineMessages({
  service_on: {
    id: 'service_on',
    defaultMessage: 'Servizio attivo',
  },
  service_off: {
    id: 'service_off',
    defaultMessage: 'Servizio non attivo',
  },
});

const BadgeStatusServizio = ({ item, wrapperClassName = null }) => {
  const intl = useIntl();

  if (item?.['@type'] !== 'Servizio') {
    return null;
  }

  const badge = (
    <Badge color={item.servizio_attivo ? 'info' : 'danger'}>
      {item.servizio_attivo
        ? intl.formatMessage(messages.service_on)
        : intl.formatMessage(messages.service_off)}
    </Badge>
  );

  return wrapperClassName ? (
    <div className={wrapperClassName}>{badge}</div>
  ) : (
    badge
  );
};

export default BadgeStatusServizio;
