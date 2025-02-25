import { defineMessages } from 'react-intl';

import {
  addSchemaField,
  addFieldsetAfter,
} from 'io-sanita-theme/config/blocks/listing/ListingOptions';
import { simpleCardTemplateOptions_appearance_default } from 'io-sanita-theme/config/blocks/listing/ListingOptions/simpleCardTemplate';
import { imageCardTemplateOptions } from 'io-sanita-theme/config/blocks/listing/ListingOptions/cardWithImageTemplate';

const messages = defineMessages({
  show_full_width: {
    id: 'show_full_width',
    defaultMessage: 'A tutta larghezza',
  },
  slidesToShow: {
    id: 'slidesToShow',
    defaultMessage: 'N° slide da mostrare',
  },
  show_image_title: {
    id: 'show_image_title',
    defaultMessage: 'Mostra il titolo',
  },
  show_image_description: {
    id: 'show_image_description',
    defaultMessage: 'Mostra la descrizione',
  },
  show_image_popup: {
    id: 'show_image_popup',
    defaultMessage: "Apri l'anteprima in popup",
  },
  show_dots: {
    id: 'show_dots',
    defaultMessage: 'Mostra i puntini di scorrimento',
  },
  autoplay: {
    id: 'autoplay',
    defaultMessage: 'Autoplay',
  },
  autoplay_speed: {
    id: 'autoplay_speed',
    defaultMessage: 'Velocità autoplay',
  },
  autoplay_speed_description: {
    id: 'autoplay_speed_description',
    defaultMessage: 'La velocità di autoplay deve essere espressa in secondi.',
  },
  appearance: {
    id: 'Aspetto',
    defaultMessage: 'Aspetto',
  },
  slider_listing_appearance_description: {
    id: 'slider_listing_appearance_description',
    defaultMessage:
      "Qui puoi selezionare, per il template 'Carousel', un aspetto diverso da quello di default per gli elementi mostrati nello slider.",
  },
  slider_listing_appearance_simplecard: {
    id: 'slider_listing_appearance_simplecard',
    defaultMessage: 'Card semplice',
  },
  slider_listing_appearance_imagecard: {
    id: 'slider_listing_appearance_imagecard',
    defaultMessage: 'Card con immagine',
  },
  slider_listing_appearance_gallery: {
    id: 'slider_listing_appearance_gallery',
    defaultMessage: 'Gallery',
  },
});

export const CarouselTemplateAppearance_SIMPLECARD = 'simple_card';
export const CarouselTemplateAppearance_IMAGECARD = 'image_card';
export const CarouselTemplateAppearance_GALLERY = 'gallery_item';

export const addCarouselTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  addSchemaField(
    schema,
    'full_width',
    intl.formatMessage(messages.show_full_width),
    null,
    { type: 'boolean' },
    pos,
  );
  pos++;

  addSchemaField(
    schema,
    'show_dots',
    intl.formatMessage(messages.show_dots),
    null,
    { type: 'boolean', default: true },
    pos,
  );
  pos++;

  addSchemaField(
    schema,
    'autoplay',
    intl.formatMessage(messages.autoplay),
    null,
    { type: 'boolean', default: false },
    pos,
  );
  pos++;

  addSchemaField(
    schema,
    'autoplay_speed',
    intl.formatMessage(messages.autoplay_speed),
    intl.formatMessage(messages.autoplay_speed_description),
    { type: 'number', default: 2 },
    pos,
  );
  pos++;

  addSchemaField(
    schema,
    'slidesToShow',
    intl.formatMessage(messages.slidesToShow),
    null,
    { type: 'number', default: 1 },
    pos,
  );
  pos++;
  //appearance options

  let choices = [
    [
      CarouselTemplateAppearance_SIMPLECARD,
      intl.formatMessage(messages.slider_listing_appearance_simplecard),
    ],
    [
      CarouselTemplateAppearance_IMAGECARD,
      intl.formatMessage(messages.slider_listing_appearance_imagecard),
    ],
    [
      CarouselTemplateAppearance_GALLERY,
      intl.formatMessage(messages.slider_listing_appearance_gallery),
    ],
  ];

  addFieldsetAfter(schema, 'default', {
    id: 'appearance',
    title: 'Aspetto delle slide',
    fields: [],
  });
  addSchemaField(
    schema,
    'slide_appearance',
    intl.formatMessage(messages.appearance),
    intl.formatMessage(messages.slider_listing_appearance_description),
    {
      choices,
    },
    pos,
    'appearance',
  );
  pos++;

  if (formData.slide_appearance === CarouselTemplateAppearance_SIMPLECARD) {
    simpleCardTemplateOptions_appearance_default(
      schema,
      formData,
      intl,
      pos,
      ['show_path_filters'],
      'appearance',
    );
    pos++;
  } else if (
    formData.slide_appearance === CarouselTemplateAppearance_IMAGECARD
  ) {
    imageCardTemplateOptions(
      schema,
      formData,
      intl,
      pos,
      ['set_four_columns'],
      'appearance',
    );
    pos++;
  } else if (formData.slide_appearance === CarouselTemplateAppearance_GALLERY) {
    addSchemaField(
      schema,
      'show_image_title',
      intl.formatMessage(messages.show_image_title),
      null,
      { type: 'boolean', default: true },
      pos,
      'appearance',
    );
    pos++;
    addSchemaField(
      schema,
      'show_image_description',
      intl.formatMessage(messages.show_image_description),
      null,
      { type: 'boolean', default: true },
      pos,
      'appearance',
    );
    pos++;
    addSchemaField(
      schema,
      'show_image_popup',
      intl.formatMessage(messages.show_image_popup),
      null,
      { type: 'boolean', default: false },
      pos,
      'appearance',
    );
    pos++;
  } else {
    addSchemaField(
      schema,
      'show_image_title',
      intl.formatMessage(messages.show_image_title),
      null,
      { type: 'boolean', default: true },
      pos,
      'appearance',
    );
    pos++;
  }
  return pos;
};
