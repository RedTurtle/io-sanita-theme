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

import {
  getCalendarDate,
  getEventRecurrenceMore,
} from 'io-sanita-theme/helpers';

import config from '@plone/volto/registry';

export const CardImage = ({ item, imgSrc, isEditMode, rrule = {} }) => {
  const Image = config.getComponent({ name: 'Image' }).component;

  const img =
    item.image_field && item[item.image_field] ? (
      <Image item={item} alt="" />
    ) : imgSrc ? (
      <img src={imgSrc} alt="" />
    ) : null;

  const date = getCalendarDate(item, rrule.rrulestr);
  const eventRecurrenceMore = getEventRecurrenceMore(item, isEditMode);

  return (
    <Card className="shadow rounded no-after">
      {img && (
        <div class="img-responsive-wrapper">
          <div class="img-responsive img-responsive-panoramic">
            <figure class="img-wrapper">{img}</figure>
          </div>
        </div>
      )}
      <CardBody className="p-4">
        <UniversalLink
          item={!isEditMode ? item : null}
          href={isEditMode ? '#' : ''}
        >
          <CardTitle tag="h3">{item.title}</CardTitle>
        </UniversalLink>

        {item['@type'] === 'Event' && <p className="event-date">{date}</p>}

        {item.description && <CardText>{item.description}</CardText>}

        {eventRecurrenceMore && (
          <div className="py-2">{eventRecurrenceMore}</div>
        )}

        {(item.topic || (item['@type'] !== 'Event' && date)) && (
          <div className="category-bottom">
            {item.topic && (
              <div className="category">
                <UniversalLink href="#">
                  <span className="text">{item.topic}</span>
                </UniversalLink>
              </div>
            )}
            {date && item['@type'] !== 'Event' && (
              <div className="data">{date}</div>
            )}
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default injectLazyLibs(['rrule'])(CardImage);
