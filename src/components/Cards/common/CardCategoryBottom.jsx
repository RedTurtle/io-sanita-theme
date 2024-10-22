import React from 'react';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';
import { AGGREGATION_PAGE_ARGOMENTO } from 'io-sanita-theme/config/ioSanitaConfig';

const CardCategoryBottom = ({
  item,
  date,
  isEditMode,
  className,
  //
  category,
  showCategory = true,
}) => {
  const defaultCategory = item?.type_title ? { title: item.type_title } : null;
  //TODO: calcolare la categoria come scritto nel ticket
  const display_category = showCategory ? category ?? defaultCategory : null;

  return display_category || date ? (
    <div className={cx('category-bottom', className)}>
      {display_category?.token || display_category?.title ? (
        <div className="category">
          {display_category?.token ? (
            <UniversalLink
              href={
                isEditMode
                  ? '#'
                  : AGGREGATION_PAGE_ARGOMENTO + display_category.token
              }
            >
              <span className="text">{display_category.title}</span>
            </UniversalLink>
          ) : (
            <span className="text">{display_category.title}</span>
          )}
        </div>
      ) : (
        display_category && (
          <div className="category">
            <span className="text">{category}</span>
          </div>
        )
      )}
      {date && <div className="data">{date}</div>}
    </div>
  ) : (
    <></>
  );
};
export default CardCategoryBottom;
