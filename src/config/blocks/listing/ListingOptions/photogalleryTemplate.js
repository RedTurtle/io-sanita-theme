import { defineMessages } from 'react-intl';
import { templatesOptions } from 'io-sanita-theme/config/blocks/listing/ListingOptions';

const messages = defineMessages({
  show_image_popup: {
    id: 'show_image_popup',
    defaultMessage: "Apri l'immagine in popup",
  },
});

export const addPhotogalleryTemplateOptions = (
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
    ['show_image_popup'],
    {
      show_image_popup: {
        default: false,
        label: intl.formatMessage(messages.show_image_popup),
      },
    },
    pos,
  );
  return pos;
};
