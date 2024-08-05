import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardCategory,
} from 'design-react-kit';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { UniversalLink } from '@plone/volto/components';
import { CardCategoryBottom } from 'io-sanita-theme/components';

import {
  getCalendarDate,
  getEventRecurrenceMore,
} from 'io-sanita-theme/helpers';

import config from '@plone/volto/registry';
import './cardImage.scss';

/*
 - Implementa la Card Eventi e la Card News del template AGID delle AUSL
 - Used to display Events and other content-types with image like News
 */
export const CardImage = ({
  item,
  showDescription = true,
  imgSrc,
  isEditMode,
  titleTag = 'h3',
  rrule = {},
}) => {
  const Image = config.getComponent({ name: 'Image' }).component;
  const img =
    item.image_field && item.image_scales?.[item.image_field] ? (
      <Image item={item} alt="" />
    ) : imgSrc ? (
      <img src={imgSrc} alt="" />
    ) : null;

  const date = getCalendarDate(item, rrule.rrulestr);
  const eventRecurrenceMore = getEventRecurrenceMore(item, isEditMode);

  return (
    <Card className="shadow rounded no-after card-image">
      {img && (
        <div className="img-responsive-wrapper">
          <div className="img-responsive img-responsive-panoramic">
            <figure className="img-wrapper">{img}</figure>
          </div>
        </div>
      )}
      <CardBody className="p-4">
        <CardTitle tag={titleTag}>
          <UniversalLink
            item={!isEditMode ? item : null}
            href={isEditMode ? '#' : ''}
            className="card-title-link"
          >
            {item.title}
          </UniversalLink>
        </CardTitle>

        {item['@type'] === 'Event' && date && (
          <p className="event-date">{date}</p>
        )}

        {item.description && showDescription && (
          <CardText>{item.description}</CardText>
        )}

        {eventRecurrenceMore && (
          <div className="py-2">{eventRecurrenceMore}</div>
        )}

        <CardCategoryBottom
          item={item}
          date={date && item['@type'] !== 'Event' ? date : null}
          isEditMode={isEditMode}
        />
      </CardBody>
    </Card>
  );
};

export default injectLazyLibs(['rrule'])(CardImage);
