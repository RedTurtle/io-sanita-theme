import { defineMessages, useIntl } from 'react-intl';
import { Badge } from 'design-react-kit';

const messages = defineMessages({
  service_available: {
    id: 'Service available',
    defaultMessage: 'Servizio disponibile e prenotabile',
  },
  service_on: {
    id: 'service_on',
    defaultMessage: 'Servizio attivo',
  },
  service_off: {
    id: 'service_off',
    defaultMessage: 'Servizio non attivo',
  },
});

const PageHeaderServizio = ({ content }) => {
  const intl = useIntl();

  return content['@type'] === 'Servizio' ? (
    <div className="mb-3">
      <Badge color={content.servizio_attivo ? 'info' : 'danger'}>
        {content.servizio_attivo
          ? intl.formatMessage(messages.service_on)
          : intl.formatMessage(messages.service_off)}
      </Badge>
      {content.servizio_attivo && (
        <spam className="px-2">
          {intl.formatMessage(messages.service_available)}
        </spam>
      )}
    </div>
  ) : null;
};

export default PageHeaderServizio;
