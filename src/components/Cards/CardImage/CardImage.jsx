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
  show_image = true,
  show_dates = true,
  show_type = true,
  imgSrc,
  isEditMode,
  titleTag = 'h3',
  rrule = {},
  titleDataElement,
  otherChildren,
  className,
}) => {
  const img = show_image ? (
    item.image_field && item.image_scales?.[item.image_field] ? (
      ListingImage({ item, showTitleAttr: false })
    ) : imgSrc ? (
      <img src={imgSrc} alt="" />
    ) : null
  ) : null;

  const date = show_dates && getCalendarDate(item, rrule.rrulestr);
  const eventRecurrenceMore =
    show_dates && getEventRecurrenceMore(item, isEditMode);

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
          show_type={show_type}
          show_default={false}
          date={date && item['@type'] !== 'Event' ? date : null}
          isEditMode={isEditMode}
        />
      </CardBody>
    </Card>
  );
};

export default injectLazyLibs(['rrule'])(CardImage);
