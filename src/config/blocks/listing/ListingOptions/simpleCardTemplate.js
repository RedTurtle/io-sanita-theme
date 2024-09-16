import { defineMessages } from 'react-intl';

import {
  addSchemaField,
  addDefaultOptions,
  templatesOptions,
  addLighthouseField,
} from 'io-sanita-theme/config/blocks/listing/ListingOptions';

const messages = defineMessages({
  appearance: {
    id: 'Aspetto',
    defaultMessage: 'Aspetto',
  },
  simplecard_listing_appearance_description: {
    id: 'simplecard_listing_appearance_description',
    defaultMessage:
      "Qui puoi selezionare, per il template 'Card semplice', un aspetto diverso da quello di default.",
  },
  simplecard_listing_appearance_compact: {
    id: 'simplecard_listing_appearance_compact',
    defaultMessage: 'Compatto',
  },
  simplecard_listing_appearance_guide: {
    id: 'simplecard_listing_appearance_guide',
    defaultMessage: 'Collegamenti a Come fare per',
  },
  simplecard_listing_appearance_ghost: {
    id: 'simplecard_listing_appearance_ghost',
    defaultMessage: 'Collegamenti a Categorie',
  },
  simplecard_listing_appearance_place: {
    id: 'simplecard_listing_appearance_place',
    defaultMessage: 'Strutture / Luoghi',
  },
  simplecard_listing_appearance_oneforrow: {
    id: 'simplecard_listing_appearance_oneforrow',
    defaultMessage: 'Un elemento per riga',
  },
});

/** SIMPLE CARD TEMPLATE **/
export const SimpleCardTemplateAppearance_COMPACT = 'compact';
export const SimpleCardTemplateAppearance_ONEFORROW = 'oneForRow';
export const SimpleCardTemplateAppearance_GUIDE = 'guide';
export const SimpleCardTemplateAppearance_GHOST = 'ghost';
export const SimpleCardTemplateAppearance_PLACE = 'place';

export const addSimpleCardTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;
  pos = addLighthouseField(schema, intl, pos);
  let choices = [
    [
      SimpleCardTemplateAppearance_COMPACT,
      intl.formatMessage(messages.simplecard_listing_appearance_compact),
    ],
    [
      SimpleCardTemplateAppearance_GUIDE,
      intl.formatMessage(messages.simplecard_listing_appearance_guide),
    ],
    [
      SimpleCardTemplateAppearance_GHOST,
      intl.formatMessage(messages.simplecard_listing_appearance_ghost),
    ],
    [
      SimpleCardTemplateAppearance_PLACE,
      intl.formatMessage(messages.simplecard_listing_appearance_place),
    ],
  ];
  if (schema.id === 'search') {
    choices = [
      [
        SimpleCardTemplateAppearance_ONEFORROW,
        intl.formatMessage(messages.simplecard_listing_appearance_oneforrow),
      ],
    ];
  }
  addSchemaField(
    schema,
    'appearance',
    intl.formatMessage(messages.appearance),
    intl.formatMessage(messages.simplecard_listing_appearance_description),
    {
      choices,
    },
    pos,
  );
  pos++;

  pos = addDefaultOptions(schema, formData, intl, pos);

  if (
    formData?.appearance !== SimpleCardTemplateAppearance_COMPACT &&
    formData?.appearance !== SimpleCardTemplateAppearance_GUIDE &&
    formData?.appearance !== SimpleCardTemplateAppearance_GHOST &&
    formData?.appearance !== SimpleCardTemplateAppearance_PLACE
  ) {
    pos = simpleCardTemplateOptions_appearance_default(
      schema,
      formData,
      intl,
      pos,
    );
  }
  return pos;
};

export const simpleCardTemplateOptions_appearance_default = (
  schema,
  formData,
  intl,
  position,
  hide_fields = [], //array of string
) => {
  let pos = position;
  pos = templatesOptions(
    schema,
    formData,
    intl,
    [
      'show_icon',
      'hide_dates',
      'show_section',
      'show_type',
      'show_description',
      'show_detail_link',
      //  'show_path_filters',
      //se servono i path filters, scommentare anche la riga 108 e copiare/sistemare la customizzazione di withQueryStringResults da io-comune.
      //scommentare anche tutti i pezzi che riguarda PathFilters
    ].filter((f) => hide_fields.indexOf(f) < 0),
    {
      hide_dates: { default: false },
      show_icon: { default: false },
      show_type: { default: false },
      show_detail_link: { default: false },
      // show_path_filters: { default: false },
    },
    pos,
  );
  return pos;
};
