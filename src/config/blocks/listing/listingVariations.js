import {
  BandiTemplate,
  BandiTemplateSkeleton,
  CardWithImageTemplate,
  CardWithImageTemplateSkeleton,
  CardWithSlideUpTextTemplate,
  CardWithSlideUpTextTemplateSkeleton,
  CompleteBlockLinksTemplate,
  CompleteBlockLinksTemplateSkeleton,
  HighlightedContentTemplate,
  HighlightedContentTemplateSkeleton,
  InEvidenceTemplate,
  InEvidenceTemplateSkeleton,
  MapTemplate,
  MapTemplateSkeleton,
  SimpleCardTemplate,
  SimpleListTemplate,
  SimpleListTemplateSkeleton,
  SmallBlockLinksTemplate,
  SmallBlockLinksTemplateSkeleton,
} from 'io-sanita-theme/components/Blocks';

// import RibbonCardTemplate from 'io-sanita-theme/components/Blocks/Listing/RibbonCardTemplate';
// import RibbonCardTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/TemplatesSkeletons/RibbonCardTemplateSkeleton';

// import PhotogalleryTemplate from 'io-sanita-theme/components/Blocks/Listing/PhotogalleryTemplate';
// import PhotogalleryTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/TemplatesSkeletons/PhotogalleryTemplateSkeleton';

// import SliderTemplate from 'io-sanita-theme/components/Blocks/Listing/SliderTemplate';
// import SliderTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/TemplatesSkeletons/SliderTemplateSkeleton';
// import SlideItemDefault from 'io-sanita-theme/components/Blocks/Listing/Slider/SlideItemDefault';
// import SlideItemSimpleCard from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/Card/SimpleCardDefault';
// import SlideItemImageCard from 'io-sanita-theme/components/Blocks/Listing/CardWithImage/CardWithImageDefault';

// import GridGalleryTemplate from 'io-sanita-theme/components/Blocks/Listing/GridGalleryTemplate';
// import GridGalleryTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/TemplatesSkeletons/GridGalleryTemplateSkeleton';

// import SquaresImageTemplate from 'io-sanita-theme/components/Blocks/Listing/SquaresImageTemplate';
// import SquaresImageTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/TemplatesSkeletons/SquaresImageTemplateSkeleton';

import {
  addBandiTemplateOptions,
  addCardWithImageTemplateOptions,
  addCardWithSlideUpTextTemplateOptions,
  addCompleteBlockLinksTemplateOptions,
  addDefaultOptions,
  addInEvidenceTemplateOptions,
  addLighthouseField,
  addLinkMoreOptions,
  addMapTemplateOptions,
  addSimpleCardTemplateOptions,
  addSimpleListTemplateOptions,
  addSmallBlockLinksTemplateOptions,
  // addRibbonCardTemplateOptions,
  // addBandiInEvidenceTemplateOptions,
  // addSliderTemplateOptions,
  // addPhotogalleryTemplateOptions,
} from 'io-sanita-theme/config/blocks/listing/ListingOptions';
import { cloneBlock, removeListingVariation } from 'io-sanita-theme/helpers';

const iosanitaListingVariations = [
  {
    id: 'simpleCard',
    isDefault: true,
    title: 'Card semplice',
    template: SimpleCardTemplate,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addSimpleCardTemplateOptions(schema, formData, intl);
      addLinkMoreOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'cardWithImageTemplate',
    isDefault: false,
    title: 'Card con immagine',
    template: CardWithImageTemplate,
    skeleton: CardWithImageTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addCardWithImageTemplateOptions(schema, formData, intl);
      addLinkMoreOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'inEvidenceTemplate',
    isDefault: false,
    title: 'In evidenza',
    template: InEvidenceTemplate,
    skeleton: InEvidenceTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addInEvidenceTemplateOptions(schema, formData, intl);
      addLinkMoreOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'contentInEvidenceTemplate',
    isDefault: false,
    title: 'Contenuto in evidenza',
    template: HighlightedContentTemplate,
    skeleton: HighlightedContentTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addLighthouseField(schema, intl);
      addDefaultOptions(schema, formData, intl, pos);
      addLinkMoreOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'simpleListTemplate',
    isDefault: false,
    title: 'Lista semplice',
    template: SimpleListTemplate,
    skeleton: SimpleListTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addSimpleListTemplateOptions(schema, formData, intl, pos);
      addLinkMoreOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'mapTemplate',
    isDefault: false,
    title: 'Mappa',
    template: MapTemplate,
    skeleton: MapTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addMapTemplateOptions(schema, formData, intl, pos);
      addLinkMoreOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'smallBlockLinksTemplate',
    isDefault: false,
    title: 'Link solo immagini',
    template: SmallBlockLinksTemplate,
    skeleton: SmallBlockLinksTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addSmallBlockLinksTemplateOptions(schema, formData, intl, pos);
      addLinkMoreOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'completeBlockLinksTemplate',
    isDefault: false,
    title: 'Link completi',
    template: CompleteBlockLinksTemplate,
    skeleton: CompleteBlockLinksTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addCompleteBlockLinksTemplateOptions(schema, formData, intl);
      addLinkMoreOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'cardSlideUpTextTemplate',
    isDefault: false,
    title: 'Card con testo animato',
    template: CardWithSlideUpTextTemplate,
    skeleton: CardWithSlideUpTextTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addCardWithSlideUpTextTemplateOptions(schema, formData, intl);
      addLinkMoreOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'bandiInEvidenceTemplate',
    isDefault: false,
    title: 'Bandi',
    template: BandiTemplate,
    skeleton: BandiTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addBandiTemplateOptions(schema, formData, intl, pos);
      addLinkMoreOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  // {
  //   id: 'ribbonCardTemplate',
  //   isDefault: false,
  //   title: 'Card con nastro',
  //   template: RibbonCardTemplate,
  //   skeleton: RibbonCardTemplateSkeleton,
  //   schemaEnhancer: ({ schema, formData, intl }) => {
  //     addRibbonCardTemplateOptions(schema, formData, intl);
  //     addLinkMoreOptions(schema, formData, intl);
  //     return schema;
  //   },
  //   cloneData: cloneBlock,
  // },
  // {
  //   id: 'quaresImageTemplate',
  //   isDefault: false,
  //   title: 'Quadratoni con immagine',
  //   template: SquaresImageTemplate,
  //   skeleton: SquaresImageTemplateSkeleton,
  //   schemaEnhancer: ({ schema, formData, intl }) => {
  //     let pos = addLighthouseField(schema, intl);
  //     addDefaultOptions(schema, formData, intl, pos);
  //     addLinkMoreOptions(schema, formData, intl);
  //     return schema;
  //   },
  //   cloneData: cloneBlock,
  // },

  // {
  //   id: 'photogallery',
  //   isDefault: false,
  //   title: 'Photogallery',
  //   template: PhotogalleryTemplate,
  //   skeleton: PhotogalleryTemplateSkeleton,
  //   schemaEnhancer: ({ schema, formData, intl }) => {
  //     let pos = addDefaultOptions(schema, formData, intl);
  //     addPhotogalleryTemplateOptions(schema, formData, intl, pos);
  //     addLinkMoreOptions(schema, formData, intl);
  //     return schema;
  //   },
  //   cloneData: cloneBlock,
  // },
  // {
  //   id: 'slider',
  //   isDefault: false,
  //   title: 'Slider',
  //   template: SliderTemplate,
  //   skeleton: SliderTemplateSkeleton,
  //   schemaEnhancer: ({ schema, formData, intl }) => {
  //     let pos = addDefaultOptions(schema, formData, intl);
  //     addSliderTemplateOptions(schema, formData, intl, pos);
  //     addLinkMoreOptions(schema, formData, intl);
  //     return schema;
  //   },
  //   cloneData: cloneBlock,
  //   appearance: {
  //     default: SlideItemDefault,
  //     simple_card: SlideItemSimpleCard,
  //     image_card: SlideItemImageCard,
  //   },
  // },
  // {
  //   id: 'gridGalleryTemplate',
  //   isDefault: false,
  //   title: 'Gallery a griglia',
  //   template: GridGalleryTemplate,
  //   skeleton: GridGalleryTemplateSkeleton,
  //   schemaEnhancer: ({ schema, formData, intl }) => {
  //     /*let pos = */ addDefaultOptions(schema, formData, intl);
  //     addLinkMoreOptions(schema, formData, intl);
  //     return schema;
  //   },
  //   cloneData: cloneBlock,
  // },
];

export const getIoSanitaListingVariations = (config) => {
  return iosanitaListingVariations;
};
