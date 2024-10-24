import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import searchSVG from '@plone/volto/icons/zoom.svg';
import calloutSVG from '@plone/volto/icons/megaphone.svg';
import heroSVG from '@plone/volto/icons/hero.svg';
import userSVG from '@plone/volto/icons/user.svg';
import {
  BreakView,
  BreakEdit,
  HTMLBlockSchema,
  SearchMapView,
  SearchMapEdit,
  SearchMapSchema,
  SearchServiziProcedureView,
  SearchServiziProcedureEdit,
  SearchServiziProcedureSchema,
  CalloutView,
  CalloutEdit,
  QuickSearchEdit,
  QuickSearchView,
  HeroView,
  HeroEdit,
  TopicsListView,
  TopicsListEdit,
  TopicsListSchema,
} from 'io-sanita-theme/components/Blocks';

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

  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,

    listing: {
      ...config.blocks.blocksConfig.listing,
      showLinkMore: true,
      blockSchema: schemaListing,
      variations: [
        ...config.blocks.blocksConfig.listing.variations,
        ...getIoSanitaListingVariations(config),
      ],
      listing_bg_colors: [], //{name:'blue', label:'Blu'},{name:'light-blue', label:'Light blue'},{name:'sidebar-background', label:'Grey'}
      listing_items_colors: [], //{name:'blue', label:'Blu'},{name:'light-blue', label:'Light blue'},{name:'sidebar-background', label:'Grey'}
      getAsyncData: null, // questo disabilita il ssr dei listing perché rallenta vistosamente la pagina
      defaultAdditionalOptions:
        null /*(schema, formData, intl, position = 0) => {
        let pos = position;

        return pos;
      };*/,
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
    maps: {
      ...config.blocks.blocksConfig.maps,
      restricted: true,
    },
    gridBlock: {
      ...config.blocks.blocksConfig.gridBlock,
      allowedBlocks: config.blocks.blocksConfig.gridBlock.allowedBlocks.filter(
        (item) => !['teaser'].includes(item),
      ),
    },
    html: {
      ...config.blocks.blocksConfig.html,
      sidebarTab: 1,
      schema: HTMLBlockSchema,
    },
    search: {
      ...config.blocks.blocksConfig.search,
      templates: ['simpleCard', 'simpleListTemplate'],
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
      title: 'Cerca servizi o prestazioni',
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

    quickSearch: {
      id: 'quickSearch',
      title: 'Ricerca rapida',
      icon: searchSVG,
      group: 'search',
      view: QuickSearchView,
      edit: QuickSearchEdit,
      restricted: false,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      sidebarTab: 0,
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
      const no_bg_for = ['hero'];

      if (data.show_block_bg && no_bg_for.indexOf(data['@type']) < 0) {
        styles.push('bg-primary-lightest');

        styles.push('full-width');
        styles.push('pb-4');
      }
      return [...classNames, ...styles];
    },
  );
};
