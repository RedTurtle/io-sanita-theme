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
 * Un blocco listing senza criteri di ricerca in Volto elenca i figli del
 * contenuto corrente (`properties.items`) e per la paginazione ricade nel ramo
 * `dispatch(getContent(initialPath))` di withQuerystringResults, con
 * `initialPath` preso dalla location. Sulla pagina che possiede i blocchi è un
 * uso legittimo (es. una pagina che elenca le sue sottopagine).
 * Quando invece si renderizzano i blocchi di un altro oggetto (`nested`, es. le
 * FAQ annidate di una cartella FAQ) `properties` e `initialPath` non
 * coincidono: il listing mostra i figli sbagliati e la GET_CONTENT *non*
 * subrequest sovrascrive `state.content.data` della pagina corrente,
 * innescando un ciclo di fetch/re-render senza fine. Solo in quel caso non li
 * renderizziamo.
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
 * @params {boolean} nested: true se content non è la pagina corrente.
 * @returns {string} Markup of the component.
 */
const RenderBlocks = ({
  content,
  exclude = ['title', 'description'],
  nested = false,
}) => {
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
            if (nested && isListingWithoutQuery(blockData)) return false;
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
