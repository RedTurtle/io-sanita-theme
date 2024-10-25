import React from 'react';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import { AGGREGATION_PAGE_ARGOMENTO } from 'io-sanita-theme/config/ioSanitaConfig';

const messages = defineMessages({
  uo: { id: 'CardCategoryBottom_UO', defaultMessage: 'Unità operativa' },
});
const CardCategoryBottom = ({
  item,
  date,
  isEditMode,
  className,
  //
  category,
  showCategory = true,
}) => {
  const intl = useIntl();
  let defaultCategory = item?.type_title ? { title: item.type_title } : null;
  const portal_type = item['@type'] ?? item.portal_type;
  switch (item['@type']) {
    case 'Servizio':
      defaultCategory =
        item.tipologia_servizio_metadata?.[0]?.title ??
        item.tipologia_servizio?.[0];
      break;
    case 'News Item':
      defaultCategory =
        item.tipologia_notizia_metadata?.[0]?.title ??
        item.tipologia_notizia?.[0];
      break;
    case 'Struttura':
      defaultCategory = item.tipologia_struttura?.[0];
      break;
    case 'UnitaOrganizzativa':
      defaultCategory = intl.formatMessage(messages.uo);
      break;
    default:
      break;
  }

  const display_category = showCategory ? category ?? defaultCategory : null;

  return display_category || date ? (
    <div className={cx('category-bottom', className)}>
      {display_category?.token ||
      display_category?.title ||
      (typeof display_category === 'string' && display_category?.length > 0) ? (
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
          ) : display_category.title ? (
            <span className="text">{display_category.title}</span>
          ) : (
            <span className="text">{display_category}</span>
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
