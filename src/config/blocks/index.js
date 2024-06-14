import { v4 as uuid } from 'uuid';
import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import {
  BreakView,
  BreakEdit,
  HTMLBlockSchema,
} from 'io-sanita-theme/components/Blocks';

export const cloneBlock = (blockData) => {
  const blockID = uuid();
  const clonedData = { ...blockData, block: blockID };
  return [blockID, clonedData];
};

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
  console.log(config.blocks.blocksConfig.search);
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
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
};
