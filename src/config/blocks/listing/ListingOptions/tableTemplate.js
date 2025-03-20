import { defineMessages } from 'react-intl';
import cloneDeep from 'lodash/cloneDeep';

import { addSchemaField } from 'io-sanita-theme/config/blocks/listing/ListingOptions';

const messages = defineMessages({
  columns: {
    id: 'table_variation_columns',
    defaultMessage: 'Colonne della tabella',
  },
  column: {
    id: 'table_variaton_column',
    defaultMessage: 'Colonna',
  },
  ct: { id: 'table_variaton_ct', defaultMessage: 'Tipo di contenuto' },
  field: { id: 'table_variaton_field', defaultMessage: 'Campo' },
  alternative_title: {
    id: 'table_variaton_alternative_title',
    defaultMessage: 'Titolo alternativo',
  },
  alternative_title_description: {
    id: 'table_variaton_alternative_title_description',
    defaultMessage:
      'Titolo alternativo per la colonna, che verrà mostrato al posto del titolo di default.',
  },
  sortable: { id: 'table_variaton_sortable', defaultMessage: 'Ordinabile' },
});

const ColumnSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.column),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['ct' /*'field', 'alternative_title', 'sortable'*/], //questi campi commentati vengono aggiunti solo quando è valorizzato il campo ct
    },
  ],
  properties: {
    ct: {
      title: intl.formatMessage(messages.ct),
      vocabulary: {
        '@id': 'plone.app.vocabularies.ReallyUserFriendlyTypes',
      },
    },
    field: {
      title: intl.formatMessage(messages.field),
      widget: 'ct_fields',
    },
    alternative_title: {
      title: intl.formatMessage(messages.alternative_title),
      description: intl.formatMessage(messages.alternative_title_description),
    },
    sortable: {
      title: intl.formatMessage(messages.sortable),
      type: 'boolean',
    },
  },
});

export const addTableTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  addSchemaField(
    schema,
    'columns',
    intl.formatMessage(messages.columns),
    null,
    {
      widget: 'object_list',
      schema: ColumnSchema({ intl }),
      schemaExtender: (schema, data, intl) => {
        const mutated = cloneDeep(schema);
        if (data.ct) {
          mutated.fieldsets[0].fields.push(
            'field',
            'alternative_title',
            'sortable',
          );
          mutated.properties.field.ct = data.ct;
        }
        return mutated;
      },
    },
    pos,
  );
  pos++;

  return pos;
};
