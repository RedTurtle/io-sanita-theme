import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { values } from 'lodash';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { hasBlocksData } from '@plone/volto/helpers';
import { richTextHasContent, RenderBlocks } from 'io-sanita-theme/helpers';

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
        <RenderBlocks content={data} />
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

export default RichTextRender;

RichTextRender.propTypes = {
  data: PropTypes.object,
  add_class: PropTypes.string,
  lighthouseId: PropTypes.string,
  content: PropTypes.object,
};
