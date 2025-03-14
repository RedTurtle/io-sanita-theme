import config from '@plone/volto/registry';
import { defineMessages, createIntlCache, createIntl } from 'react-intl';

import { addStyling } from '@plone/volto/helpers';

const messages = defineMessages({
  Accordion: {
    id: 'Accordion',
    defaultMessage: 'Accordion',
  },
  Options: {
    id: 'Options',
    defaultMessage: 'Options',
  },
  Default: {
    id: 'Default',
    defaultMessage: 'Default',
  },
  AccordionTitle: {
    id: 'Accordion title',
    defaultMessage: 'Accordion title',
  },
  AccordionBlock: {
    id: 'Accordion block',
    defaultMessage: 'Accordion block',
  },
  Heading2: {
    id: 'Heading 2',
    defaultMessage: 'H2',
  },
  Heading3: {
    id: 'Heading 3',
    defaultMessage: 'H3',
  },
  Heading4: {
    id: 'Heading 4',
    defaultMessage: 'H4',
  },
  Heading5: {
    id: 'Heading 5',
    defaultMessage: 'H5',
  },
  Heading6: {
    id: 'Heading 6',
    defaultMessage: 'H6',
  },
  Title: {
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
  Theme: {
    id: 'Theme',
    defaultMessage: 'Theme',
  },
  ThemeHelp: {
    id: 'Accordion theme',
    defaultMessage: 'Accordion theme',
  },
  ThemePrimary: {
    id: 'Primary',
    defaultMessage: 'Primary',
  },
  ThemeSecondary: {
    id: 'Secondary',
    defaultMessage: 'Secondary',
  },
  ThemeTertiary: {
    id: 'Tertiary',
    defaultMessage: 'Tertiary',
  },
  headline: {
    id: 'Headline',
    defaultMessage: 'Headline',
  },

  AccordionBlockSettings: {
    id: 'Accordion block settings',
    defaultMessage: 'Accordion block settings',
  },

  SectionFriendlyName: {
    id: 'Section friendly name',
    defaultMessage: 'Section friendly name',
  },
  AllowedBlocks: {
    id: 'Allowed blocks',
    defaultMessage: 'Allowed blocks',
  },
  AllowOnlyFollowingBlocksTypes: {
    id: 'Allow only the following blocks types',
    defaultMessage: 'Allow only the following blocks types',
  },
  HelperText: {
    id: 'Helper text',
    defaultMessage: 'Helper text',
  },
  ShortHintThatDescribesExpectedValueWithinThisBlock: {
    id: 'A short hint that describes the expected value within this block',
    defaultMessage:
      'A short hint that describes the expected value within this block',
  },
  Instructions: {
    id: 'Instructions',
    defaultMessage: 'Instructions',
  },
  DetailedExpectedValueWithinThisBlock: {
    id: 'Detailed expected value within this block',
    defaultMessage: 'Detailed expected value within this block',
  },
  Required: {
    id: 'Required',
    defaultMessage: 'Required',
  },
  DontAllowDeletionOfThisBlock: {
    id: "Don't allow deletion of this block",
    defaultMessage: "Don't allow deletion of this block",
  },
  FixedPosition: {
    id: 'Fixed position',
    defaultMessage: 'Fixed position',
  },
  DisableDragDropOnThisBlock: {
    id: 'Disable drag & drop on this block',
    defaultMessage: 'Disable drag & drop on this block',
  },
  FixedLayout: {
    id: 'Fixed layout',
    defaultMessage: 'Fixed layout',
  },
  FixedlayoutNewPanesTabs: {
    id: 'Fixed layout, New panes (tabs) created by Editor within this block will be ignored',
    defaultMessage:
      'Fixed layout, New panes (tabs) created by Editor within this block will be ignored',
  },
  DisableNewBlocks: {
    id: 'Disable new blocks',
    defaultMessage: 'Disable new blocks',
  },
  DisableCreationNewBlocks: {
    id: 'Disable creation of new blocks after this block',
    defaultMessage: 'Disable creation of new blocks after this block',
  },
  ReadOnly: {
    id: 'Read-only',
    defaultMessage: 'Read-only',
  },
  DisableEditingBlock: {
    id: 'Disable editing on this block',
    defaultMessage: 'Disable editing on this block',
  },
  ReadOnlyTitles: {
    id: 'Read-only titles',
    defaultMessage: 'Read-only titles',
  },
  DisableEditingOnAccordionTitles: {
    id: 'Disable editing on accordion titles',
    defaultMessage: 'Disable editing on accordion titles',
  },
  ReadOnlySettings: {
    id: 'Read-only settings',
    defaultMessage: 'Read-only settings',
  },
  DisableEditingOnAccordionBlockSettings: {
    id: 'Disable editing on accordion block settings',
    defaultMessage: 'Disable editing on accordion block settings',
  },
  DisableInnerButtons: {
    id: 'Disable inner buttons',
    defaultMessage: 'Disable inner buttons',
  },
  HideAllBlockRelatedButtonsWithinThisBlock: {
    id: 'Hide all block related buttons within this block',
    defaultMessage: 'Hide all block related buttons within this block',
  },
  linkMoreTitle: {
    id: 'accordion_linkMoreTitle',
    defaultMessage: 'Titolo per il link ad altro',
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
    title: intl.formatMessage(messages.AccordionBlockSettings),
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.Default),
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
        title: intl.formatMessage(messages.Title),
        description: intl.formatMessage(messages.SectionFriendlyName),
        type: 'string',
      },
      allowedBlocks: {
        title: intl.formatMessage(messages.AllowedBlocks),
        description: intl.formatMessage(messages.AllowOnlyFollowingBlocksTypes),
        type: 'array',
        items: {
          choices: choices,
        },
      },
      placeholder: {
        title: intl.formatMessage(messages.HelperText),
        description: intl.formatMessage(
          messages.ShortHintThatDescribesExpectedValueWithinThisBlock,
        ),
        type: 'string',
      },
      instructions: {
        title: intl.formatMessage(messages.Instructions),
        description: intl.formatMessage(
          messages.DetailedExpectedValueWithinThisBlock,
        ),
        type: 'string',
        widget: 'richtext',
      },
      required: {
        title: intl.formatMessage(messages.Required),
        description: intl.formatMessage(messages.DontAllowDeletionOfThisBlock),
        type: 'boolean',
      },
      fixed: {
        title: intl.formatMessage(messages.FixedPosition),
        description: intl.formatMessage(messages.DisableDragDropOnThisBlock),
        type: 'boolean',
      },
      fixedLayout: {
        title: intl.formatMessage(messages.FixedLayout),
        description: intl.formatMessage(messages.FixedlayoutNewPanesTabs),
        type: 'boolean',
      },
      disableNewBlocks: {
        title: intl.formatMessage(messages.DisableNewBlocks),
        description: intl.formatMessage(messages.DisableCreationNewBlocks),
        type: 'boolean',
      },
      readOnly: {
        title: intl.formatMessage(messages.ReadOnly),
        description: intl.formatMessage(messages.DisableEditingBlock),
        type: 'boolean',
      },
      readOnlyTitles: {
        title: intl.formatMessage(messages.ReadOnlyTitles),
        description: intl.formatMessage(
          messages.DisableEditingOnAccordionTitles,
        ),
        type: 'boolean',
      },
      readOnlySettings: {
        title: intl.formatMessage(messages.ReadOnlySettings),
        description: intl.formatMessage(
          messages.DisableEditingOnAccordionBlockSettings,
        ),
        type: 'boolean',
      },
      disableInnerButtons: {
        title: intl.formatMessage(messages.DisableInnerButtons),
        description: intl.formatMessage(
          messages.HideAllBlockRelatedButtonsWithinThisBlock,
        ),
        type: 'boolean',
      },
    },
    required: [],
  };
};

export const AccordionBlockSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.AccordionBlock),
  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.Default),
      fields: ['data'],
    },
    {
      id: 'options',
      title: intl.formatMessage(messages.Options),
      fields: [
        'title',
        'title_size',
        'collapsed',
        'non_exclusive',
        'filtering',
      ],
    },
  ],
  properties: {
    title: {
      title: intl.formatMessage(messages.headline),
    },
    data: {
      title: intl.formatMessage(messages.Accordion),
      type: 'panels',
      schema: AccordionSchema(intl),
    },
    title_size: {
      title: intl.formatMessage(messages.title_size),
      description: intl.formatMessage(messages.title_size_description),
      type: 'string',
      factory: 'Choice',
      choices: [
        ['h2', intl.formatMessage(messages.Heading2)],
        ['h3', intl.formatMessage(messages.Heading3)],
        ['h4', intl.formatMessage(messages.Heading4)],
        ['h5', intl.formatMessage(messages.Heading5)],
        ['h6', intl.formatMessage(messages.Heading6)],
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
  },
  required: [],
});

export const AccordionSchema = (intl) => {
  return {
    title: intl.formatMessage(messages.Accordion),
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.Default),
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
