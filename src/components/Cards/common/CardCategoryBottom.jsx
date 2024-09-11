import React from 'react';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';
import { AGGREGATION_PAGE_ARGOMENTO } from 'io-sanita-theme/config/ioSanitaConfig';

const CardCategoryBottom = ({
  item,
  category,
  date,
  isEditMode,
  show_type = true,
  show_topics = true,
  show_default = true,
  className,
}) => {
  const defaultCategory =
    (show_topics && item?.parliamo_di_metadata?.[0]) ??
    (show_type && item?.type_title ? { title: item.type_title } : null);
  const display_category = category ?? (show_default && defaultCategory);

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
