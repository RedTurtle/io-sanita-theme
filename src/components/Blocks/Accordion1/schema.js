import { defineMessages } from 'react-intl';

const messages = defineMessages({
  headline: {
    id: 'accordion_Titolo',
    defaultMessage: 'Titolo',
  },
  description: {
    id: 'accordion_Description',
    defaultMessage: 'Descrizione',
  },
  accordion: {
    id: 'accordion_accordion',
    defaultMessage: 'Accordion',
  },
});

export const AccordionSchema = (props) => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.accordion),
    block: 'accordion1',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['headline', 'description'],
      },
    ],

    properties: {
      headline: {
        title: intl.formatMessage(messages.headline),
      },
      description: {
        title: intl.formatMessage(messages.description),
        type: 'slate',
      },
    },
    required: [],
  };
};
