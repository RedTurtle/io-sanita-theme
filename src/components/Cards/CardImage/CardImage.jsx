import React from 'react';
import cx from 'classnames';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { UniversalLink } from '@plone/volto/components';
import { CardCategoryBottom } from 'io-sanita-theme/components';

import {
  getCalendarDate,
  getEventRecurrenceMore,
} from 'io-sanita-theme/helpers';

import { ListingImage } from 'io-sanita-theme/components/Blocks';

import './cardImage.scss';

/*
 - Implementa la Card Eventi e la Card News del template AGID delle AUSL
 - Used to display Events and other content-types with image like News
 */
export const CardImage = ({
  item,
  description, //to override default description
  showDescription = true,
  showImage = true,
  showDates = true,
  showCategory,
  imgSrc,
  isEditMode,
  titleTag = 'h3',
  rrule = {},
  titleDataElement,
  otherChildren,
  className,
}) => {
  const img = showImage ? (
    item.image_field && item.image_scales?.[item.image_field] ? (
      ListingImage({ item, showTitleAttr: false, isEditMode })
    ) : imgSrc ? (
      <img src={imgSrc} alt="" />
    ) : null
  ) : null;

  const date = showDates && getCalendarDate(item, rrule.rrulestr);
  const eventRecurrenceMore =
    showDates && getEventRecurrenceMore(item, isEditMode);

  return (
    <Card className={cx('shadow rounded no-after card-image', className)}>
      {img && (
        <div className="img-responsive-wrapper">
          <div className="img-responsive img-responsive-panoramic">
            <figure className="img-wrapper">{img}</figure>
          </div>
        </div>
      )}
      <CardBody className="p-4">
        <div className="card-body-main">
          <CardTitle tag={titleTag}>
            <UniversalLink
              item={!isEditMode ? item : null}
              href={isEditMode ? '#' : ''}
              className="card-title-link"
              data-element={titleDataElement}
            >
              {item.title}
            </UniversalLink>
          </CardTitle>

          {date &&
            item['@type'] ===
              'Event' /*Solo per gli eventi la data viene visualizzata qui. Per tutti gli altri tipi di contenuto viene mostrata nel category bottom*/ && (
              <p className="item-date">{date}</p>
            )}

          {showDescription && (
            <>
              {otherChildren?.afterTitle && otherChildren.afterTitle}

              {description ? (
                <CardText>{description}</CardText>
              ) : item.description ? (
                <CardText>{item.description}</CardText>
              ) : (
                <></>
              )}
              {otherChildren?.afterText && otherChildren.afterText}
            </>
          )}

          {eventRecurrenceMore && (
            <div className="py-2">{eventRecurrenceMore}</div>
          )}
        </div>
        <CardCategoryBottom
          item={item}
          date={date && item['@type'] !== 'Event' ? date : null}
          isEditMode={isEditMode}
          showCategory={showCategory}
        />
      </CardBody>
    </Card>
  );
};

export default injectLazyLibs(['rrule'])(CardImage);
