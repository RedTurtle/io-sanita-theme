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
 * Un blocco listing senza criteri di ricerca non ha nulla di sensato da
 * mostrare, ma soprattutto in withQuerystringResults di Volto ricade nel ramo
 * `dispatch(getContent(initialPath))`: una GET_CONTENT *non* subrequest, che
 * sovrascrive lo stesso `state.content.data` usato dalla pagina corrente. Con
 * più di un blocco così nella stessa pagina si innesca un ciclo di
 * fetch/re-render senza fine, quindi qui non li renderizziamo affatto.
 * La variante imageGallery è esclusa dal controllo perché, pur senza criteri,
 * in Volto segue un ramo diverso (getQueryStringResults) e funziona.
 */
const isListingWithoutQuery = (blockData) => {
  if (blockData?.['@type'] !== 'listing') return false;

  const isImageGallery =
    (!blockData.variation && blockData.template === 'imageGallery') ||
    blockData.variation === 'imageGallery';
  if (isImageGallery) return false;

  // stessa fallback di Volto per i blocchi salvati prima dello schema blocks
  const querystring = blockData.querystring || blockData;
  return !(querystring?.query?.length > 0);
};

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
            const blockData = blockContent[blocksFieldname]?.[block];
            if (isListingWithoutQuery(blockData)) return false;
            return exclude.indexOf(blockData?.['@type']) < 0;
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
