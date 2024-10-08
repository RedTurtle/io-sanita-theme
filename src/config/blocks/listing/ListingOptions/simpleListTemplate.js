import { defineMessages } from 'react-intl';

import { templatesOptions } from 'io-sanita-theme/config/blocks/listing/ListingOptions';

const messages = defineMessages({
  show_pointer_list: {
    id: 'show_pointer_list',
    defaultMessage: 'Mostra elenco puntato',
  },
});

export const addSimpleListTemplateOptions = (
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
    ['show_pointer_list'],
    {
      show_pointer_list: {
        default: false,
        label: intl.formatMessage(messages.show_pointer_list),
      },
    },
    pos,
  );
  return pos;
};
