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

const BadgeStatusServizio = ({ servizio_attivo }) => {
  const intl = useIntl();

  return (
    <Badge color={servizio_attivo ? 'info' : 'danger'}>
      {servizio_attivo
        ? intl.formatMessage(messages.service_on)
        : intl.formatMessage(messages.service_off)}
    </Badge>
  );
};

export default BadgeStatusServizio;
