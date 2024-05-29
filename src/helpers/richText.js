import { values } from 'lodash';
import { hasBlocksData } from '@plone/volto/helpers';
import { RenderBlocks } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

export const richTextHasContent = (data) => {
  if (hasBlocksData(data)) {
    //ReactDOMServer.renderToStaticMarkup(RenderBlocks({ data: data })),
    const renderedBlocks = RenderBlocks({ data: data });

    const textBlocks = values(data.blocks).filter(
      (b) => b['@type'] === 'slate',
    );
    const noTextBlocks = values(data.blocks).filter(
      (b) => b['@type'] !== 'slate',
    );

    const textContent = textBlocks?.filter(
      (b) => b.plaintext != null && b.plaintext?.trim().length > 0,
    )?.[0];

    return (
      renderedBlocks !== null &&
      ((textBlocks?.length > 0 && textContent && textContent !== '') ||
        noTextBlocks.length > 0)
    );
  } else {
    const textToDisplay = data?.data?.replace(/(<([^>]+)>)/g, '') ?? '';
    return textToDisplay.length > 0 ? true : false;
  }
};
