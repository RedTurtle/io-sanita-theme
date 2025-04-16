import config from '@plone/volto/registry';
import { defineMessages, createIntlCache, createIntl } from 'react-intl';

import { addStyling } from '@plone/volto/helpers';

const messages = defineMessages({
  panels: { id: 'Panels', defaultMessage: 'Pannelli' },
  panel: { id: 'Panel', defaultMessage: 'Pannello' },
  options: {
    id: 'Options',
    defaultMessage: 'Options',
  },
  default: {
    id: 'Default',
    defaultMessage: 'Default',
  },
  accordionTitle: {
    id: 'Accordion title',
    defaultMessage: 'Accordion title',
  },
  accordionBlock: {
    id: 'Accordion block',
    defaultMessage: 'Accordion block',
  },
  heading2: {
    id: 'Heading 2',
    defaultMessage: 'H2',
  },
  heading3: {
    id: 'Heading 3',
    defaultMessage: 'H3',
  },
  heading4: {
    id: 'Heading 4',
    defaultMessage: 'H4',
  },
  heading5: {
    id: 'Heading 5',
    defaultMessage: 'H5',
  },
  heading6: {
    id: 'Heading 6',
    defaultMessage: 'H6',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  title_size: {
    id: 'Title size',
    defaultMessage: 'Title size',
  },
  title_size_description: {
    id: 'Accordion Title size',
    defaultMessage: 'Accordion Title size',
  },
  collapsed: {
    id: 'Collapsed by default',
    defaultMessage: 'Collapsed by default',
  },
  non_exclusive: {
    id: 'Non exclusive',
    defaultMessage: 'Non exclusive',
  },
  non_exclusive_description: {
    id: 'Allow multiple panels open at a time',
    defaultMessage: 'Allow multiple panels open at a time',
  },
  filtering: {
    id: 'Enable filtering',
    defaultMessage: 'Enable filtering',
  },
  headline: {
    id: 'Headline',
    defaultMessage: 'Headline',
  },
  accordionBlockSettings: {
    id: 'Accordion block settings',
    defaultMessage: 'Accordion block settings',
  },
  sectionFriendlyName: {
    id: 'Section friendly name',
    defaultMessage: 'Section friendly name',
  },
  allowedBlocks: {
    id: 'Allowed blocks',
    defaultMessage: 'Allowed blocks',
  },
  allowOnlyFollowingBlocksTypes: {
    id: 'Allow only the following blocks types',
    defaultMessage: 'Allow only the following blocks types',
  },
  helperText: {
    id: 'Helper text',
    defaultMessage: 'Helper text',
  },
  shortHintThatDescribesExpectedValueWithinThisBlock: {
    id: 'A short hint that describes the expected value within this block',
    defaultMessage:
      'A short hint that describes the expected value within this block',
  },
  instructions: {
    id: 'Instructions',
    defaultMessage: 'Instructions',
  },
  detailedExpectedValueWithinThisBlock: {
    id: 'Detailed expected value within this block',
    defaultMessage: 'Detailed expected value within this block',
  },
  required: {
    id: 'Required',
    defaultMessage: 'Required',
  },
  dontAllowDeletionOfThisBlock: {
    id: "Don't allow deletion of this block",
    defaultMessage: "Don't allow deletion of this block",
  },
  fixedPosition: {
    id: 'Fixed position',
    defaultMessage: 'Fixed position',
  },
  disableDragDropOnThisBlock: {
    id: 'Disable drag & drop on this block',
    defaultMessage: 'Disable drag & drop on this block',
  },
  fixedLayout: {
    id: 'Fixed layout',
    defaultMessage: 'Fixed layout',
  },
  fixedLayoutNewPanesTabs: {
    id: 'Fixed layout, New panes (tabs) created by Editor within this block will be ignored',
    defaultMessage:
      'Fixed layout, New panes (tabs) created by Editor within this block will be ignored',
  },
  disableNewBlocks: {
    id: 'Disable new blocks',
    defaultMessage: 'Disable new blocks',
  },
  disableCreationNewBlocks: {
    id: 'Disable creation of new blocks after this block',
    defaultMessage: 'Disable creation of new blocks after this block',
  },
  readOnly: {
    id: 'Read-only',
    defaultMessage: 'Read-only',
  },
  disableEditingBlock: {
    id: 'Disable editing on this block',
    defaultMessage: 'Disable editing on this block',
  },
  readOnlyTitles: {
    id: 'Read-only titles',
    defaultMessage: 'Read-only titles',
  },
  disableEditingOnAccordionTitles: {
    id: 'Disable editing on accordion titles',
    defaultMessage: 'Disable editing on accordion titles',
  },
  readOnlySettings: {
    id: 'Read-only settings',
    defaultMessage: 'Read-only settings',
  },
  disableEditingOnAccordionBlockSettings: {
    id: 'Disable editing on accordion block settings',
    defaultMessage: 'Disable editing on accordion block settings',
  },
  disableInnerButtons: {
    id: 'Disable inner buttons',
    defaultMessage: 'Disable inner buttons',
  },
  hideAllBlockRelatedButtonsWithinThisBlock: {
    id: 'Hide all block related buttons within this block',
    defaultMessage: 'Hide all block related buttons within this block',
  },
  linkMoreTitle: {
    id: 'accordion_linkMoreTitle',
    defaultMessage: 'Titolo per il link ad altro',
  },
  show_block_bg: {
    id: 'Mostra lo sfondo del blocco',
    defaultMessage: 'Mostra lo sfondo del blocco',
  },
});

const cache = createIntlCache();

const intl = createIntl(
  {
    locale: 'en',
    messages: messages,
  },
  cache,
);

export const defaultAllowedBlocks = (config) => {
  const choices = Object.keys(config.blocks.blocksConfig)
    .map((key) => {
      if (config.blocks.blocksConfig[key]?.restricted) {
        return false;
      } else {
        const title = config.blocks.blocksConfig[key]?.title || key;
        return [key, title];
      }
    })
    .filter((val) => !!val);

  choices.push(['accordion', 'Accordion']);
  return choices;
};

export const AccordionLayoutSchema = (config) => {
  const choices = defaultAllowedBlocks(config);

  return {
    title: intl.formatMessage(messages.accordionBlockSettings),
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: [
          'title',
          'placeholder',
          'instructions',
          'allowedBlocks',
          'required',
          'fixed',
          'fixedLayout',
          'disableNewBlocks',
          'disableInnerButtons',
          'readOnlyTitles',
          'readOnlySettings',
          'readOnly',
        ],
      },
    ],
    properties: {
      title: {
        title: intl.formatMessage(messages.title),
        description: intl.formatMessage(messages.sectionFriendlyName),
        type: 'string',
      },
      allowedBlocks: {
        title: intl.formatMessage(messages.allowedBlocks),
        description: intl.formatMessage(messages.allowOnlyFollowingBlocksTypes),
        type: 'array',
        items: {
          choices: choices,
        },
      },
      placeholder: {
        title: intl.formatMessage(messages.helperText),
        description: intl.formatMessage(
          messages.shortHintThatDescribesExpectedValueWithinThisBlock,
        ),
        type: 'string',
      },
      instructions: {
        title: intl.formatMessage(messages.instructions),
        description: intl.formatMessage(
          messages.detailedExpectedValueWithinThisBlock,
        ),
        type: 'string',
        widget: 'richtext',
      },
      required: {
        title: intl.formatMessage(messages.required),
        description: intl.formatMessage(messages.dontAllowDeletionOfThisBlock),
        type: 'boolean',
      },
      fixed: {
        title: intl.formatMessage(messages.fixedPosition),
        description: intl.formatMessage(messages.disableDragDropOnThisBlock),
        type: 'boolean',
      },
      fixedLayout: {
        title: intl.formatMessage(messages.fixedLayout),
        description: intl.formatMessage(messages.fixedLayoutNewPanesTabs),
        type: 'boolean',
      },
      disableNewBlocks: {
        title: intl.formatMessage(messages.disableNewBlocks),
        description: intl.formatMessage(messages.disableCreationNewBlocks),
        type: 'boolean',
      },
      readOnly: {
        title: intl.formatMessage(messages.readOnly),
        description: intl.formatMessage(messages.disableEditingBlock),
        type: 'boolean',
      },
      readOnlyTitles: {
        title: intl.formatMessage(messages.readOnlyTitles),
        description: intl.formatMessage(
          messages.disableEditingOnAccordionTitles,
        ),
        type: 'boolean',
      },
      readOnlySettings: {
        title: intl.formatMessage(messages.readOnlySettings),
        description: intl.formatMessage(
          messages.disableEditingOnAccordionBlockSettings,
        ),
        type: 'boolean',
      },
      disableInnerButtons: {
        title: intl.formatMessage(messages.disableInnerButtons),
        description: intl.formatMessage(
          messages.hideAllBlockRelatedButtonsWithinThisBlock,
        ),
        type: 'boolean',
      },
    },
    required: [],
  };
};

export const AccordionBlockSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.accordionBlock),
  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.default),
      fields: ['data'],
    },
    {
      id: 'options',
      title: intl.formatMessage(messages.options),
      fields: [
        'title',
        'title_size',
        'collapsed',
        'non_exclusive',
        'filtering',
        'show_block_bg',
      ],
    },
  ],
  properties: {
    title: {
      title: intl.formatMessage(messages.headline),
    },
    data: {
      title: intl.formatMessage(messages.panels),
      type: 'panels',
      schema: AccordionSchema(intl),
    },
    title_size: {
      title: intl.formatMessage(messages.title_size),
      description: intl.formatMessage(messages.title_size_description),
      type: 'string',
      factory: 'Choice',
      choices: [
        ['h2', intl.formatMessage(messages.heading2)],
        ['h3', intl.formatMessage(messages.heading3)],
        ['h4', intl.formatMessage(messages.heading4)],
        ['h5', intl.formatMessage(messages.heading5)],
        ['h6', intl.formatMessage(messages.heading6)],
      ],
    },
    collapsed: {
      title: intl.formatMessage(messages.collapsed),
      type: 'boolean',
      default: true,
    },
    non_exclusive: {
      title: intl.formatMessage(messages.non_exclusive),
      description: intl.formatMessage(messages.non_exclusive_description),
      type: 'boolean',
      default: true,
    },
    filtering: {
      title: intl.formatMessage(messages.filtering),
      type: 'boolean',
      default: false,
    },
    show_block_bg: {
      title: intl.formatMessage(messages.show_block_bg),
      type: 'boolean',
      default: true,
    },
  },
  required: [],
});

export const AccordionSchema = (intl) => {
  return {
    title: intl.formatMessage(messages.panel),
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['title', 'linkMoreTitle', 'href'],
      },
    ],
    properties: {
      title: { title: "Titolo dell'elemento" },
      linkMoreTitle: {
        title: intl.formatMessage(messages.linkMoreTitle),
      },
      href: {
        title: 'Link',
        widget: 'url', //'linkTo',
      },
    },
    required: [],
  };
};
