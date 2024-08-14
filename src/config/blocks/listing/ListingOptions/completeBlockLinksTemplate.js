import {
  templatesOptions,
  addDefaultOptions,
} from 'io-sanita-theme/config/blocks/listing/ListingOptions';

import { addLighthouseField } from 'io-sanita-theme/config/blocks/listing/ListingOptions/utils';

export const addCompleteBlockLinksTemplateOptions = (
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
    ['show_description'],
    null,
    pos,
  );
  return pos;
};
