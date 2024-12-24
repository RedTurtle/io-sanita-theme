import React from 'react';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import {
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  hasBlocksData,
} from '@plone/volto/helpers/Blocks/Blocks';

import VoltoRenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';

/**
 * RenderBlocks view component class.
 * @function RenderBlocks
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RenderBlocks = ({ content, exclude = ['title', 'description'] }) => {
  /* Render text or blocks in view, skip title and description blocks by default*/
  const blockContent = content;
  const blocksFieldname = getBlocksFieldname(blockContent);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(blockContent);
  const location = useLocation();

  let blocksLayoutFiltered = [];

  if (hasBlocksData(content)) {
    blocksLayoutFiltered =
      blockContent[blocksLayoutFieldname]?.items?.length > 0
        ? blockContent[blocksLayoutFieldname].items.filter((block) => {
            const blockType = blockContent[blocksFieldname]?.[block]?.['@type'];
            return exclude.indexOf(blockType) < 0;
          })
        : null;

    //è il caso in cui c'è solo il primo blocco di testo vuoto. Non si vuole renderizzare il <br/>
    if (blocksLayoutFiltered?.length === 1) {
      const block = blockContent[blocksFieldname][blocksLayoutFiltered[0]];
      if (block['@type'] === 'text' && !block.text) {
        blocksLayoutFiltered = [];
      }
      if (block['@type'] === 'slate' && block.plaintext?.length === 0) {
        blocksLayoutFiltered = [];
      }
    }
  }

  const contentWithFilteredBlocks = {
    ...content,
    [blocksLayoutFieldname]: {
      ...content[blocksLayoutFieldname],
      items: blocksLayoutFiltered,
    },
  };

  return blocksLayoutFiltered?.length > 0 ? (
    <VoltoRenderBlocks
      content={contentWithFilteredBlocks}
      location={location}
    />
  ) : null;
};

RenderBlocks.propTypes = {
  data: PropTypes.any,
};

export default RenderBlocks;
