import { defineMessages } from 'react-intl';

import { templatesOptions } from 'io-sanita-theme/config/blocks/listing/ListingOptions';

const messages = defineMessages({
  show_ente: {
    id: 'show_ente',
    defaultMessage: "Mostra l'ente",
  },
  show_tipologia: {
    id: 'show_tipologia',
    defaultMessage: 'Mostra la tipologia',
  },
});

export const addBandiTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  pos = templatesOptions(
    schema,
    formData,
    intl,
    ['show_description', 'show_ente', 'show_tipologia'],
    {
      show_ente: {
        default: false,
        label: intl.formatMessage(messages.show_ente),
      },
      show_tipologia: {
        default: false,
        label: intl.formatMessage(messages.show_tipologia),
      },
    },
    pos,
  );
  return pos;
};
