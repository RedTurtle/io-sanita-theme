import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { values } from 'lodash';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { hasBlocksData } from '@plone/volto/helpers';
export { richTextHasContent } from 'io-sanita-theme/helpers';
import { RenderBlocks } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

/**
 * RichTextRender view component class.
 * @function RichTextRender
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RichTextRender = ({
  data,
  add_class,
  serif = true,
  lighthouseId = '',
  content,
}) => {
  let hasContent = richTextHasContent(data);

  return hasContent ? (
    hasBlocksData(data) ? (
      <div
        className={cx(`richtext-blocks ${add_class ?? ''}`, {
          'font-serif': serif,
        })}
        {...(lighthouseId && {
          'data-element': lighthouseId,
        })}
      >
        <RenderBlocks data={data} content={content} />
      </div>
    ) : (
      <div
        className={cx(add_class, { 'font-serif': serif })}
        dangerouslySetInnerHTML={{ __html: flattenHTMLToAppURL(data.data) }}
        {...(lighthouseId && {
          'data-element': lighthouseId,
        })}
      />
    )
  ) : null;
};

export { RichTextRender, richTextHasContent };

RichTextRender.propTypes = {
  data: PropTypes.object,
  add_class: PropTypes.string,
  lighthouseId: PropTypes.string,
  content: PropTypes.object,
};
