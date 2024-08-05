import React from 'react';
import { UniversalLink } from '@plone/volto/components';

const CardCategoryBottom = ({ item, category, date, isEditMode }) => {
  const defaultCategory =
    item?.parliamo_di_metadata?.[0] ?? item?.portal_type_title
      ? { title: item.portal_type_title }
      : null;
  const display_category = category ?? defaultCategory;

  return display_category || date ? (
    <div className="category-bottom">
      <div className="category">
        {/* ToDo: usare il componente che fa il link alla tassonomia
                    argomento */}
        {display_category.token ? (
          <UniversalLink
            href={isEditMode ? '#' : '/argomento/' + display_category.token}
          >
            <span className="text">{display_category.title}</span>
          </UniversalLink>
        ) : (
          <span className="text">{display_category.title}</span>
        )}
      </div>
      {date && <div className="data">{date}</div>}
    </div>
  ) : (
    <></>
  );
};
export default CardCategoryBottom;
