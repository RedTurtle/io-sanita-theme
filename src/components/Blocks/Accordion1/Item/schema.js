import { defineMessages } from 'react-intl';

const messages = defineMessages({
  accordion: {
    id: 'accordion_item',
    defaultMessage: 'Elemento',
  },
  linkMoreTitle: {
    id: 'accordion_item_link_more',
    defaultMessage: 'Titolo per il link ad altro',
  },
  href: {
    id: 'accordion_item_href',
    defaultMessage: 'Link',
  },
});

export const AccordionItemSchema = (props) => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.accordion),
    block: 'accordionItem',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['linkMoreTitle', 'href'],
      },
    ],

    properties: {
      linkMoreTitle: {
        title: intl.formatMessage(messages.linkMoreTitle),
      },
      href: {
        title: intl.formatMessage(messages.href),
        widget: 'linkTo',
        showTarget: false,
      },
    },
    required: [],
  };
};
