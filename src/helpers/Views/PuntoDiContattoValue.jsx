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
  twitter: {
    id: 'pdc_twitter',
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

  switch (value?.pdc_type) {
    case 'url':
    case 'account':
    case 'linkedin':
    case 'twitter':
      return (
        <UniversalLink
          href={`${value?.pdc_value}`}
          aria-label={`${intl.formatMessage(messages[value.pdc_type])}: ${
            value?.pdc_value ?? ''
          }`}
        >
          {value?.pdc_value}
        </UniversalLink>
      );
    case 'telefono':
      return (
        <a
          href={`tel:${value?.pdc_value}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.pdc_type])}: ${
            value?.pdc_value ?? ''
          }`}
        >
          {value?.pdc_value}
        </a>
      );
    case 'whatsapp':
      return (
        <a
          href={`https://wa.me/${value?.pdc_value.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.pdc_type])}: ${
            value?.pdc_value ?? ''
          }`}
        >
          {value?.pdc_value}
        </a>
      );
    case 'telegram':
      // telegram must be username not phone number
      return (
        <a
          href={`https://t.me/${value?.pdc_value}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.pdc_type])}: ${
            value?.pdc_value ?? ''
          }`}
        >
          {value?.pdc_value}
        </a>
      );
    case 'skype':
      // skype must be: unknown, should we use their js resources?
      // and then GDPR?
      // https://learn.microsoft.com/en-us/skype-sdk/skypeuris/skypeuritutorial_webpages?redirectedfrom=MSDN
      return (
        <a
          href={`skype:${value?.pdc_value}?call`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.pdc_type])}: ${
            value?.pdc_value ?? ''
          }`}
        >
          {value?.pdc_value}
        </a>
      );
    case 'email':
    case 'pec':
      return (
        <a
          href={`mailto:${value?.pdc_value}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[value.pdc_type])}: ${
            value?.pdc_value ?? ''
          }`}
        >
          {value?.pdc_value}
        </a>
      );
    default:
      return value?.pdc_value;
  }
};

export default PuntoDiContattoValue;