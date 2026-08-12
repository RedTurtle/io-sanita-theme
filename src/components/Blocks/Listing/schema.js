import ListingBlockSchema from '@plone/volto/components/manage/Blocks/Listing/schema';

import { addFieldsetAfter } from 'io-sanita-theme/config/blocks/listing/ListingOptions';

export const schemaListing = (props) => {
  const baseSchema = ListingBlockSchema(props);

  const defaultFieldset = baseSchema.fieldsets.find(
    (fieldset) => fieldset.id === 'default',
  );
  if (defaultFieldset) {
    defaultFieldset.fields = defaultFieldset.fields.filter(
      (field) =>
        field !== 'headline' &&
        field !== 'headlineTag' &&
        field !== 'querystring',
    );
  }

  addFieldsetAfter(baseSchema, 'default', {
    id: 'criteria',
    title: 'Risultati',
    fields: ['querystring'],
  });

  // const linkMoreFieldset = baseSchema.fieldsets.find(findFieldset);
  // linkMoreFieldset.fields.push('linkAlign');

  // baseSchema.properties.linkAlign = {
  //   title: intl.formatMessage(messages.alignButton),
  //   type: 'boolean',
  // };

  return baseSchema;
};
