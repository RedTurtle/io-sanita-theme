import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
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

const BandoStatus = ({ content }) => {
  const intl = useIntl();
  //se sei in view del bando, lo stato del bando  è in view-extra-data perchè è un metadato
  const value =
    content.bando_state?.[0] ??
    content['@components']?.['view-extra-data']?.stato_bando?.[0];
  return <>{intl.formatMessage(messages[value])}</>;
};

export default BandoStatus;
