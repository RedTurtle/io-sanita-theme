import { v4 as uuid } from 'uuid';
import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import searchSVG from '@plone/volto/icons/zoom.svg';
import {
  BreakView,
  BreakEdit,
  HTMLBlockSchema,
  SearchStruttureView,
  SearchStruttureEdit,
  SearchStruttureSchema,
} from 'io-sanita-theme/components/Blocks';
import { schemaListing } from 'io-sanita-theme/components/Blocks/Listing/schema';
import { getIoSanitaListingVariations } from 'io-sanita-theme/config/blocks/listing/listingVariations';
import { cloneBlock } from 'io-sanita-theme/helpers';

const customBlocksOrder = [
  // { id: 'news', title: 'News' },
  // { id: 'homePage', title: 'Home Page' },
  // { id: 'search', title: 'Ricerca' },
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
    searchStrutture: {
      id: 'searchStrutture',
      title: 'Cerca strutture',
      icon: searchSVG,
      group: 'search',
      view: SearchStruttureView,
      edit: SearchStruttureEdit,
      restricted: false,
      mostUsed: true,
      cloneData: cloneBlock,
      security: {
        addPermission: [],
        view: [],
      },
      schema: SearchStruttureSchema,
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

  config.settings.styleClassNameExtenders.push(
    ({ block, content, data, classNames }) => {
      let styles = [];
      if (data.show_block_bg) {
        styles.push('bg-primary-lightest');
        styles.push('full-width');
        styles.push('pb-4');
      }
      return [...classNames, ...styles];
    },
  );
};
