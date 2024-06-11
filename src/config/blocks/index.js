import { v4 as uuid } from 'uuid';
import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import { BreakView, BreakEdit } from 'io-sanita-theme/components/Blocks';

export const cloneBlock = (blockData) => {
  const blockID = uuid();
  const clonedData = { ...blockData, block: blockID };
  return [blockID, clonedData];
};

export const applyIoSanitaBlocksConfig = (config) => {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
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
};
