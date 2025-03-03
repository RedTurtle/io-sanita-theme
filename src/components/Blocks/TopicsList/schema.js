import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'topics_list_title',
    defaultMessage: 'Titolo',
  },
  description: {
    id: 'topics_list_description',
    defaultMessage: 'Descrizione',
  },
  topics: {
    id: 'topics_list_topics',
    defaultMessage: 'Parliamo di',
  },
  users: {
    id: 'topics_list_users',
    defaultMessage: 'A chi si rivolge',
  },
  taxonomies: {
    id: 'topics_list_taxonomies',
    defaultMessage: 'Tassonomie',
  },
  show_icon: {
    id: 'topics_list_show_icon',
    defaultMessage: "Mostra l'icona",
    default: true,
  },
  topics_list_block_title: {
    id: 'topics_list_block_title',
    defaultMessage: 'Tutto per',
  },
});

const TaxonomiesSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.taxonomies),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['user', 'topic', 'icon'],
    },
  ],
  properties: {
    topic: {
      title: intl.formatMessage(messages.topics),
      vocabulary: { '@id': 'collective.taxonomy.parliamo_di' },
    },
    user: {
      title: intl.formatMessage(messages.users),
      vocabulary: {
        '@id': 'collective.taxonomy.a_chi_si_rivolge_tassonomia',
      },
    },
    icon: {
      title: 'Icona',
      widget: 'icon',
    },
  },
});

export function TopicsListSchema({ formData, intl }) {
  return {
    title: intl.formatMessage(messages.topics_list_block_title),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'description', 'show_icon', 'taxonomies'],
      },
    ],

    properties: {
      title: {
        title: intl.formatMessage(messages.title),
      },
      description: {
        title: intl.formatMessage(messages.description),
        widget: 'slate',
      },
      show_icon: {
        title: intl.formatMessage(messages.show_icon),
        type: 'boolean',
      },
      taxonomies: {
        title: intl.formatMessage(messages.taxonomies),
        widget: 'object_list',
        schema: TaxonomiesSchema({ intl }),
      },
    },
    required: [],
  };
}
