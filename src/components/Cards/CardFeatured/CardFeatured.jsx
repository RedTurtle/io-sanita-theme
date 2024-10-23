/*
 Usa la Card Featured per mettere in evidenza notizie, comunicati stampa, eventi, bandi e concorsi.
*/

import React from 'react';
import cx from 'classnames';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import { ListingImage } from 'io-sanita-theme/components/Blocks';
import { CardCategoryBottom } from 'io-sanita-theme/components';
import {
  getCalendarDate,
  getEventRecurrenceMore,
} from 'io-sanita-theme/helpers';
import './cardFeatured.scss';

const CardFeatured = ({
  size = 'large',
  item,
  titleTag = 'h3',
  imgSrc,
  isEditMode,
  className,
  category,
  text,
  otherChildren,
  titleDataElement,
  date,
  showCategory,
  showDescription = true,
  showDates = true,
  rrule,
}) => {
  const img =
    item.image_field && item.image_scales?.[item.image_field] ? (
      ListingImage({ item, showTitleAttr: false, isEditMode })
    ) : imgSrc ? (
      <img src={imgSrc} alt="" />
    ) : null;

  const eventRecurrenceMore =
    showDates && getEventRecurrenceMore(item, isEditMode);
  const _date = showDates && (date ?? getCalendarDate(item, rrule.rrulestr));

  return (
    <Card
      className={cx('shadow rounded card-teaser-image card-flex', className)}
      teaser
      wrapperClassName={`card-teaser-wrapper-equal card-teaser-block-2 card-featured card-featured-${size}`}
    >
      <CardBody className={cx('p-4', { 'no-image': !img })}>
        <div className="card-body-main">
          <CardTitle tag={titleTag} className="mb-3 mt-0">
            <UniversalLink
              item={!isEditMode ? item : null}
              href={isEditMode ? '#' : ''}
              className="card-title-link"
              data-element={titleDataElement}
            >
              {item.title}
            </UniversalLink>
          </CardTitle>

          {size !== 'small' && showDescription && (
            <>
              {otherChildren?.afterTitle && otherChildren.afterTitle}

              {(text || item.description) && (
                <CardText>{text || item.description}</CardText>
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
          showCategory={showCategory}
          date={_date}
          isEditMode={isEditMode}
        />
      </CardBody>

      {img && <div className="card-image card-image-rounded">{img}</div>}
    </Card>
  );
};

export default injectLazyLibs(['rrule'])(CardFeatured);
