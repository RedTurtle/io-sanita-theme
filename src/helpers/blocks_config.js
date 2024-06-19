export const removeListingVariation = (config, id) => {
  let indexOfVariation = -1;
  indexOfVariation =
    config.blocks?.blocksConfig?.listing?.variations?.findIndex(
      (x) => x.id === id,
    );
  if (indexOfVariation >= 0) {
    config.blocks.blocksConfig.listing.variations.splice(indexOfVariation, 1);
  }
};

export const DEFAULT_BG_COLORS = [
  {
    name: 'bg-none',
    label: 'Nessuno',
  },
  {
    name: 'bg-primary-lightest', //questa deve essere il nome una classe definita in io-sanita o bootstrap-italia
    label: 'Colore primario chiaro',
  },
];

export const addSchemaStyles = (
  intl,
  schema,
  fieldsetName = 'default',
  fields = ['bg:noprefix', 'full-width:bool'],
  properties = {
    'bg:noprefix': {
      title: 'Colore di sfondo',
      default: 'none',
      widget: 'color_picker',
      colors: DEFAULT_BG_COLORS,
    },
    'full-width:bool': {
      title: 'A tutta larghezza',
      type: 'boolean',
    },
  },
) => {
  let fieldSet = schema.fieldsets.filter((f) => f.id == fieldsetName);
  if (fieldSet?.length == 0) {
    fieldSet = {
      id: fieldsetName,
      title: fieldsetName,
      fields: [],
    };
    schema.fieldsets.push(fieldSet);
  } else {
    fieldSet = fieldSet[0];
  }
  if (fieldSet.fields.indexOf('styles') < 0) {
    fieldSet.fields.push('styles');
  }
  if (!schema.properties.styles) {
    schema.properties.styles = {
      widget: 'object',
      schema: {
        title: 'Stile',
        fieldsets: [
          {
            id: 'default',
            fields: [],
            title: 'Default',
          },
        ],
        properties: {},
        required: [],
      },
    };
  }
  schema.properties.styles.schema.fieldsets[0].fields = [
    ...schema.properties.styles.schema.fieldsets[0].fields,
    ...fields,
  ];
  schema.properties.styles.schema.properties = {
    ...schema.properties.styles.schema.properties,
    ...properties,
  };
};
