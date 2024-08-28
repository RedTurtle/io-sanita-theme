import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';

const messages = defineMessages({
  url: {
    id: 'pdc_url',
    defaultMessage: 'Sito web',
  },
  account: {
    id: 'pdc_account',
    defaultMessage: 'Account',
  },
  linkedin: {
    id: 'pdc_linkedin',
    defaultMessage: 'LinkedIn',
  },
  x: {
    id: 'pdc_x',
    defaultMessage: 'Twitter',
  },
  telefono: {
    id: 'pdc_telefono',
    defaultMessage: 'Numero di telefono',
  },
  email: {
    id: 'pdc_email',
    defaultMessage: 'Email',
  },
  pec: {
    id: 'pec',
    defaultMessage: 'PEC',
  },
  social: {
    id: 'pdc_social',
    defaultMessage: 'Social',
  },
  fax: {
    id: 'pdc_fax',
    defaultMessage: 'Fax',
  },
  whatsapp: {
    id: 'whatsapp',
    defaultMessage: 'Whatsapp',
  },
  telegram: {
    id: 'telegram',
    defaultMessage: 'Telegram',
  },
  skype: {
    id: 'skype',
    defaultMessage: 'Skype',
  },
});

export const PuntoDiContattoValue = ({ value }) => {
  const intl = useIntl();

  switch (value?.tipo) {
    case 'url':
    case 'account':
    case 'linkedin':
      return (
        <UniversalLink
          href={`${value?.valore}`}
          aria-label={`${intl.formatMessage(messages[value.tipo])}: ${
            value?.valore ?? ''
          }`}
        >
          {value?.valore}
        </UniversalLink>
      );
    case 'telefono':
      return (
        <a
          href={`tel:${value?.valore}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.tipo])}: ${
            value?.valore ?? ''
          }`}
        >
          {value?.valore}
        </a>
      );
    case 'whatsapp':
      return (
        <a
          href={`https://wa.me/${value?.valore.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.tipo])}: ${
            value?.valore ?? ''
          }`}
        >
          {value?.valore}
        </a>
      );
    case 'x':
      // twitter x
      return (
        <a
          href={`https://x.com/${value?.valore}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.tipo])}: ${
            value?.valore ?? ''
          }`}
        >
          {value?.valore}
        </a>
      );
    case 'telegram':
      // telegram must be username not phone number
      return (
        <a
          href={`https://t.me/${value?.valore}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.tipo])}: ${
            value?.valore ?? ''
          }`}
        >
          {value?.valore}
        </a>
      );
    case 'skype':
      // skype must be: unknown, should we use their js resources?
      // and then GDPR?
      // https://learn.microsoft.com/en-us/skype-sdk/skypeuris/skypeuritutorial_webpages?redirectedfrom=MSDN
      return (
        <a
          href={`skype:${value?.valore}?call`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.tipo])}: ${
            value?.valore ?? ''
          }`}
        >
          {value?.valore}
        </a>
      );
    case 'email':
    case 'pec':
      return (
        <a
          href={`mailto:${value?.valore}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.tipo])}: ${
            value?.valore ?? ''
          }`}
        >
          {value?.valore}
        </a>
      );
    default:
      return value?.valore;
  }
};

export default PuntoDiContattoValue;
