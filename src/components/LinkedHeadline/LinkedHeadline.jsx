import React, { useMemo } from 'react';
import Slugger from 'github-slugger';
import cx from 'classnames';
import { normalizeString } from '@plone/volto/helpers/Utils/Utils';
import { renderLinkElement } from '@plone/volto-slate/editor/render';

const LinkedHeadline = ({
  headlineTag = 'h2',
  id,
  title,
  children,
  className,
  isEditMode,
}) => {
  let attr = { id };
  const slug = Slugger.slug(normalizeString(title));
  attr.id = slug || id;

  const Headline = useMemo(() => renderLinkElement(headlineTag), [headlineTag]);

  return title ? (
    <Headline
      mode={!isEditMode && 'view'}
      children={title ?? children}
      attributes={attr}
      className={cx('headline', className)}
    />
  ) : (
    <></>
  );
};
export default LinkedHeadline;
