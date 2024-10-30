import { values } from 'lodash';
import { hasBlocksData } from '@plone/volto/helpers';
import { RenderBlocks } from 'io-sanita-theme/helpers';
import { serializeNodesToText } from '@plone/volto-slate/editor/render';

export const richTextHasContent = (data) => {
  if (hasBlocksData(data)) {
    //ReactDOMServer.renderToStaticMarkup(RenderBlocks({ data: data })),
    const renderedBlocks = RenderBlocks({ content: data });

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
    console.log(data);
    const textToDisplay = data?.data?.replace(/(<([^>]+)>)/g, '') ?? '';
    return textToDisplay.length > 0 ? true : false;
  }
};

export const checkRichTextHasContent = (text) => {
  if (text?.[0]?.children) {
    return serializeNodesToText(text?.[0]?.children || [])?.length > 0;
  }
  return false;
};
