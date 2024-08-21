import { defineMessages } from 'react-intl';

import { addSchemaField } from 'io-sanita-theme/config/blocks/listing/ListingOptions';

const messages = defineMessages({
  override_links_accessibility_marker: {
    id: 'override_links_accessibility_marker',
    defaultMessage:
      "Non mostrare l'icona di accessibilità per i link a siti esterni",
  },
});

export const addSmallBlockLinksTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  addSchemaField(
    schema,
    'override_links_accessibility_marker',
    intl.formatMessage(messages.override_links_accessibility_marker),
    null,
    { type: 'boolean' },
    pos,
  );
  pos++;

  return pos;
};
