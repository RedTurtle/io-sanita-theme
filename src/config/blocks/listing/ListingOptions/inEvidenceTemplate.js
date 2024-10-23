import {
  templatesOptions,
  addDefaultOptions,
} from 'io-sanita-theme/config/blocks/listing/ListingOptions';

import { addLighthouseField } from 'io-sanita-theme/config/blocks/listing/ListingOptions/utils';

export const addInEvidenceTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  pos = addLighthouseField(schema, intl, pos);

  pos = addDefaultOptions(schema, formData, intl, pos);

  pos = templatesOptions(
    schema,
    formData,
    intl,
    ['hide_dates', 'show_description', 'show_category'],
    {
      hide_dates: { default: false },
      show_category: { default: true },
    },
    pos,
  );
  return pos;
};
