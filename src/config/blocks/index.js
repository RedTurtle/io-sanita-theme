import { rssBlock as defaultRssBlock } from 'volto-rss-block';
import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import searchSVG from '@plone/volto/icons/zoom.svg';
import calloutSVG from '@plone/volto/icons/megaphone.svg';
import heroSVG from '@plone/volto/icons/hero.svg';
import userSVG from '@plone/volto/icons/user.svg';
import flashSVG from '@plone/volto/icons/flash.svg';
import alertSVG from '@plone/volto/icons/alert.svg';
import emailSVG from '@plone/volto/icons/email.svg';
import listArrowsSVG from '@plone/volto/icons/list-arrows.svg';
import iconsBlockSVG from 'io-sanita-theme/icons/blocco-icone.svg';

import {
  AccordionView,
  AccordionEdit,
  BreakView,
  BreakEdit,
  HTMLBlockSchema,
  SearchMapView,
  SearchMapEdit,
  SearchMapSchema,
  SearchServiziProcedureView,
  SearchServiziProcedureEdit,
  SearchServiziProcedureSchema,
  SearchBandiView,
  SearchBandiEdit,
  SearchBandiFiltersConfig,
  CalloutView,
  CalloutEdit,
  QuickSearchEdit,
  QuickSearchView,
  QuickSearchSchema,
  HeroView,
  HeroEdit,
  IconsView,
  IconsEdit,
  IconsSchema,
  TopicsListView,
  TopicsListEdit,
  TopicsListSchema,
  CTAView,
  CTAEdit,
  CTASchema,
  AlertView,
  AlertEdit,
  AlertSchema,
  ContactsView,
  ContactsEdit,
  ContactsSchema,
  CardWithoutImageRssTemplate,
  CardWithoutImageRssTemplateSkeleton,
  CardWithImageRssTemplate,
  CardWithImageRssTemplateSkeleton,
} from 'io-sanita-theme/components/Blocks';
import {
  AccordionLayoutSchema,
  defaultAllowedBlocks,
} from 'io-sanita-theme/components/Blocks/Accordion/Schema';
import { schemaListing } from 'io-sanita-theme/components/Blocks/Listing/schema';
import { getIoSanitaListingVariations } from 'io-sanita-theme/config/blocks/listing/listingVariations';
import { cloneBlock } from 'io-sanita-theme/helpers';

const customBlocksOrder = [
  // { id: 'news', title: 'News' },
  // { id: 'homePage', title: 'Home Page' },
  { id: 'search', title: 'Ricerca' },
];
const customInitialBlocks = {
  // 'Pagina Argomento': ['title', 'description', 'text'],
  // 'Bando Folder Deepening': ['title', 'description', 'listing'],
};
const customRequiredBlocks = [
  // 'description'
];

export const applyIoSanitaBlocksConfig = (config) => {
  delete config.blocks.blocksConfig.teaser;
  delete config.blocks.blocksConfig.leadimage;

  const listingVariations = [
    ...config.blocks.blocksConfig.listing.variations,
    ...getIoSanitaListingVariations(config),
  ];

  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,

    listing: {
      ...config.blocks.blocksConfig.listing,
      showLinkMore: true,
      blockSchema: schemaListing,
      variations: listingVariations,
      listing_bg_colors: [], //{name:'blue', label:'Blu'},{name:'light-blue', label:'Light blue'},{name:'sidebar-background', label:'Grey'}
      listing_items_colors: [], //{name:'blue', label:'Blu'},{name:'light-blue', label:'Light blue'},{name:'sidebar-background', label:'Grey'}
      getAsyncData: null, // questo disabilita il ssr dei listing perché rallenta vistosamente la pagina
      defaultAdditionalOptions:
        null /*(schema, formData, intl, position = 0) => {
        let pos = position;

        return pos;
      };*/,
    },
    accordion: {
      id: 'accordion',
      title: 'Accordion',
      icon: listArrowsSVG,
      group: 'text',
      view: AccordionView,
      edit: AccordionEdit,
      restricted: false,
      mostUsed: false,
      blockHasOwnFocusManagement: true,
      sidebarTab: 1,
      schema: AccordionLayoutSchema(config),
      schemaEnhancer: null,
      defaults: {},
      security: {
        addPermission: [],
        view: [],
      },
    },
    alert: {
      id: 'alert',
      title: 'Alert',
      icon: alertSVG,
      group: 'text',
      view: AlertView,
      edit: AlertEdit,
      schema: AlertSchema,
      restricted: false,
      mostUsed: false,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      sidebarTab: 1,
    },
    break: {
      id: 'break',
      title: 'Interruzione di pagina',
      icon: divideHorizontalSVG,
      group: 'text',
      view: BreakView,
      edit: BreakEdit,
      restricted: false,
      mostUsed: false,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
    },
    callout_block: {
      id: 'callout_block',
      title: 'Callout',
      icon: calloutSVG,
      group: 'text',
      view: CalloutView,
      edit: CalloutEdit,
      restricted: false,
      mostUsed: false,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      sidebarTab: 1,
      blockHasOwnFocusManagement: true,
    },
    contacts: {
      id: 'contacts',
      title: 'Contatti',
      icon: emailSVG,
      group: 'text',
      view: ContactsView,
      edit: ContactsEdit,
      schema: ContactsSchema,
      restricted: false,
      mostUsed: false,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      sidebarTab: 1,
      blockHasOwnFocusManagement: true,
    },
    cta_block: {
      id: 'cta_block',
      title: 'CTA - Call To Action',
      icon: flashSVG,
      group: 'common',
      view: CTAView,
      edit: CTAEdit,
      schema: CTASchema,
      restricted: false,
      mostUsed: false,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      sidebarTab: 1,
    },
    gridBlock: {
      ...config.blocks.blocksConfig.gridBlock,
      allowedBlocks: config.blocks.blocksConfig.gridBlock.allowedBlocks.filter(
        (item) => !['teaser'].includes(item),
      ),
    },
    hero: {
      id: 'hero',
      title: 'Hero',
      icon: heroSVG,
      group: 'text',
      view: HeroView,
      edit: HeroEdit,
      restricted: false,
      mostUsed: false,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      sidebarTab: 1,
      blockHasOwnFocusManagement: true,
    },
    html: {
      ...config.blocks.blocksConfig.html,
      sidebarTab: 1,
      schema: HTMLBlockSchema,
    },
    iconBlocks: {
      id: 'iconBlocks',
      title: 'Blocchi con icone',
      icon: iconsBlockSVG,
      group: 'text',
      view: IconsView,
      edit: IconsEdit,
      restricted: false,
      mostUsed: true,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      sidebarTab: 1,
      schema: IconsSchema,
      blockHasOwnFocusManagement: true,
    },
    maps: {
      ...config.blocks.blocksConfig.maps,
      restricted: true,
    },
    quickSearch: {
      id: 'quickSearch',
      title: 'Ricerca rapida',
      icon: searchSVG,
      group: 'search',
      view: QuickSearchView,
      edit: QuickSearchEdit,
      schema: QuickSearchSchema,
      restricted: false,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      sidebarTab: 1,
    },
    rssBlock: {
      ...config.blocks.blocksConfig.rssBlock, //defaultRssBlock,
      templates: {
        ...config.blocks.blocksConfig.rssBlock.templates, //defaultRssBlock.templates,
        default: {
          label: 'Card senza immagine',
          template: CardWithoutImageRssTemplate,
          skeleton: CardWithoutImageRssTemplateSkeleton,
        },
        card_without_image: {
          label: 'Card con immagine',
          template: CardWithImageRssTemplate,
          skeleton: CardWithImageRssTemplateSkeleton,
        },
      },
    },
    search: {
      ...config.blocks.blocksConfig.search,
      templates: [
        ...listingVariations.map((v) => v.id).filter((v) => v !== 'carousel'),
      ],
    },
    searchMap: {
      id: 'searchMap',
      title: 'Cerca con mappa',
      icon: searchSVG,
      group: 'search',
      view: SearchMapView,
      edit: SearchMapEdit,
      restricted: false,
      mostUsed: true,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      schema: SearchMapSchema,
      sidebarTab: 1,
    },
    SearchServiziProcedure: {
      id: 'SearchServiziProcedure',
      title: 'Cerca servizi o procedure',
      icon: searchSVG,
      group: 'search',
      view: SearchServiziProcedureView,
      edit: SearchServiziProcedureEdit,
      restricted: false,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      schema: SearchServiziProcedureSchema,
      sidebarTab: 1,
    },
    searchBandi: {
      id: 'searchBandi',
      title: 'Ricerca bandi',
      icon: searchSVG,
      group: 'search',
      view: SearchBandiView,
      edit: SearchBandiEdit,
      filtersConfig: SearchBandiFiltersConfig,
      restricted: false,
      cloneData: cloneBlock,
      mostUsed: false,
      security: {
        addPermission: [],
        view: [],
      },
      sidebarTab: 1,
    },
    topics_list: {
      id: 'topics_list',
      title: 'Tutto per',
      description: 'Lista delle tassonomie',
      icon: userSVG,
      group: 'common',
      view: TopicsListView,
      edit: TopicsListEdit,
      schema: TopicsListSchema,
      restricted: false,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      sidebarTab: 1,
    },
  };

  config.blocks.groupBlocksOrder =
    config.blocks.groupBlocksOrder.concat(customBlocksOrder);
  config.blocks.initialBlocks = {
    ...config.blocks.initialBlocks,
    ...customInitialBlocks,
  };
  config.blocks.requiredBlocks = [
    ...config.blocks.requiredBlocks,
    ...customRequiredBlocks,
  ];
  config.blocks.showEditBlocksInBabelView = true;

  config.settings['volto-blocks-widget'] = {
    ...config.settings['volto-blocks-widget'],
    allowedBlocks: [
      ...(config.settings['volto-blocks-widget']?.allowedBlocks ?? []).filter(
        (block) => block !== 'maps',
      ),
      'break',
      'testo_riquadro_semplice',
      'testo_riquadro_immagine',
      'callout_block',
      'rssBlock',
      //se si aggiunge un nuovo blocco, verificare che in edit non ci siano bottoni che provocano il submit della form. Se succede, gestirli con e.prevenDefault() e.stopPropagation().
    ],

    showRestricted: false,
  };

  config.settings.styleClassNameExtenders.push(
    ({ block, content, data, classNames }) => {
      let styles = [];
      const no_bg_for = ['hero', 'accordion'];

      if (data.show_block_bg && no_bg_for.indexOf(data['@type']) < 0) {
        if (classNames.indexOf('bg-primary-lightest') < 0) {
          styles.push('bg-primary-lightest');
        }
        if (classNames.indexOf('full-width') < 0) {
          styles.push('full-width');
        }
        if (classNames.indexOf('py-4') < 0) {
          styles.push('py-4');
        }
      }

      return [...classNames, ...styles];
    },
  );
};
