import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import {AGGREGATION_PAGE_ARGOMENTO} from 'io-sanita-theme/config/ioSanitaConfig';

const CardCategoryBottom = ({ category, date, isEditMode }) => {
  return category || date ? (
    <div className="category-bottom">
      <div className="category">
        {/* ToDo: usare il componente che fa il link alla tassonomia
                    argomento */}
        {category.token ? (
          <UniversalLink
            href={isEditMode ? '#' : AGGREGATION_PAGE_ARGOMENTO + category.token}
          >
            <span className="text">{category.title}</span>
          </UniversalLink>
        ) : (
          <span className="text">{category.title}</span>
        )}
      </div>
      {date && <div className="data">{date}</div>}
    </div>
  ) : (
    <></>
  );
};
export default CardCategoryBottom;
