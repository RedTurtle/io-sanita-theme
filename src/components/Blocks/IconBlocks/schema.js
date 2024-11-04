import { defineMessages } from 'react-intl';

const messages = defineMessages({
  linkMoreTitle: {
    id: 'linkMoreTitle',
    defaultMessage: 'Titolo per il link ad altro',
  },
  linkMore: {
    id: 'linkMore',
    defaultMessage: 'Link ad altro',
  },
  backgroundImage: {
    id: 'backgroundImage',
    defaultMessage: 'Immagine di sfondo',
  },
  linkMore2: {
    id: 'linkMore',
    defaultMessage: 'Link ad altro', //da sistemare
  },
  backgroundImage2: {
    id: 'backgroundImage',
    defaultMessage: 'Immagine di sfondo', //da sistemare
  },
  items: {
    id: 'items',
    defaultMessage: 'Items', //da sistemare
  },
  item: {
    id: 'item',
    defaultMessage: 'item', //da sistemare
  },
});

export function IconBlocksSchema({
  formData,
  intl,
  onChangeBlock,
  block,
  openObjectBrowser,
}) {
  return {
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['backgroundImage', 'linkMoreTitle', 'linkMore', 'items'],
      },
    ],

    properties: {
      backgroundImage: {
        title: intl.formatMessage(messages.backgroundImage),
        //widget: 'object_browser',
        widget: 'file',
        //mode: 'image',
        // widgetOptions: {
        //   pattern_options: { selectableTypes: ['Image'] },
        // },
      },
      LinkMoreTitle: {
        title: intl.formatMessage(messages.linkMoreTitle),
      },
      linkMore: {
        title: intl.formatMessage(messages.linkMore),
        widget: 'linkTo',
        openObjectBrowser,
        showTarget: true,
        data: formData,
        linkField: 'LinkMoreTitle',
      },
      items: {
        title: intl.formatMessage(messages.items), //da sistemare
        widget: 'object_list',
        schema: {
          title: intl.formatMessage(messages.item), //da sistemare
          fieldsets: [
            {
              id: 'default',
              title: 'Default',
              fields: ['LinkMoreTitle2', 'linkMore2'],
            },
          ],
          properties: {
            LinkMoreTitle2: {
              //da sistemare
              title: intl.formatMessage(messages.linkMoreTitle),
            },
            linkMore2: {
              //da sistemare
              title: intl.formatMessage(messages.linkMore),
              widget: 'linkTo',
              openObjectBrowser,
              showTarget: true,
              data: formData,
              linkField: 'LinkMoreTitle2', //da sistemare
            },
          },
        },
      },
    },
    required: [],
  };
}

export default IconBlocksSchema;
