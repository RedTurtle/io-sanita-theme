import { defineMessages } from 'react-intl';
import { addSchemaField } from 'io-sanita-theme/config/blocks/listing/ListingOptions';

import config from '@plone/volto/registry';

const messages = defineMessages({
  title: {
    id: 'Titolo',
    defaultMessage: 'Titolo',
  },
  description: {
    id: 'listing_Descrizione',
    defaultMessage: 'Descrizione',
  },
  show_block_bg: {
    id: 'Mostra lo sfondo del blocco',
    defaultMessage: 'Mostra lo sfondo del blocco',
  },
  items_color: {
    id: 'listing_items_color',
    defaultMessage: "Colore dell'elemento",
  },
  bg_color: {
    id: 'block_bg_color',
    defaultMessage: 'Colore di sfondo',
  },
});

/** DEFAULT **/

const addDefaultOptions = (schema, formData = {}, intl, position = 1) => {
  let listing_items_colors =
    config.blocks.blocksConfig.listing?.listing_items_colors || [];
  let listing_bg_colors =
    config.blocks.blocksConfig.listing?.listing_bg_colors || [];
  const fieldset =
    schema?.id === 'search' ? 'listingTemplateOptions' : 'default';
  let pos = position;
  if (fieldset === 'default') {
    addSchemaField(
      schema,
      'title',
      intl.formatMessage(messages.title),
      null,
      null,
      pos,
      fieldset,
    );
    pos++;
    addSchemaField(
      schema,
      'description',
      intl.formatMessage(messages.description),
      null,
      { widget: 'slate' },
      pos,
      fieldset,
    );
    pos++;
  }

  if (listing_items_colors.length > 0) {
    addSchemaField(
      schema,
      'items_color',
      intl.formatMessage(messages.items_color),
      null,
      { widget: 'color_list', intl: intl, colors: listing_items_colors },
      pos,
      fieldset,
    );
    pos++;
  }
  if (fieldset !== 'listingTemplateOptions') {
    addSchemaField(
      schema,
      'show_block_bg',
      intl.formatMessage(messages.show_block_bg),
      null,
      { type: 'boolean' },
      pos,
      fieldset,
    );
    pos++;
  }

  if (listing_bg_colors.length > 0) {
    addSchemaStyles({
      intl,
      schema,
      fields: ['bg_color:noprefix'],
      properties: {
        'bg_color:noprefix': {
          title: 'Colore di sfondo',
          default: 'none',
          widget: 'color_picker',
          colors: listing_bg_colors,
        },
      },
    });
    //vecchio modo su io-comune di impostare i colori di sfondo nello schema
    // addSchemaField(
    //   schema,
    //   'bg_color',
    //   intl.formatMessage(messages.bg_color),
    //   null,
    //   { widget: 'color_list', intl: intl, colors: listing_bg_colors },
    //   pos,
    //   fieldset,
    // );
    pos++;
  }

  const defaultAdditionalOptions =
    config.blocks.blocksConfig.listing.defaultAdditionalOptions;
  if (defaultAdditionalOptions) {
    pos = defaultAdditionalOptions(schema, formData, intl, pos);
  }
  return pos;
};

export default addDefaultOptions;
