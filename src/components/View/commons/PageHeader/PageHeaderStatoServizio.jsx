import { defineMessages, useIntl } from 'react-intl';
import { BadgeStatusServizio } from 'io-sanita-theme/components/View/Servizio';

const messages = defineMessages({
  service_available: {
    id: 'Service available',
    defaultMessage: 'Servizio disponibile e prenotabile',
  },
});

const PageHeaderServizio = ({ content }) => {
  const intl = useIntl();

  return content['@type'] === 'Servizio' ? (
    <div className="mb-3">
      <BadgeStatusServizio servizio_attivo={content.servizio_attivo} />
      {content.servizio_attivo && (
        <span className="px-2">
          {intl.formatMessage(messages.service_available)}
        </span>
      )}
    </div>
  ) : null;
};

export default PageHeaderServizio;
