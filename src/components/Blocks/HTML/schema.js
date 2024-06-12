import { defineMessages } from 'react-intl';
import { addSchemaStyles } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  headline: {
    id: 'Headline',
    defaultMessage: 'Headline',
  },
  html: {
    id: 'HTML',
    defaultMessage: 'HTML',
  },
});

const HTMLBlockSchema = (props) => {
  const { intl } = props;

  let schema = {
    title: intl.formatMessage(messages.html),
    block: 'html',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [],
      },
    ],

    properties: {},
    required: [],
  };

  addSchemaStyles(intl, schema);
  return schema;
};

export default HTMLBlockSchema;
