import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardCategory,
} from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';

import './cardFeatured.scss';

const CardFeatured = ({ size = 'large', item, imgSrc, isEditMode }) => {
  const Image = config.getComponent({ name: 'Image' }).component;

  const img =
    item.image_field && item[item.image_field] ? (
      <Image item={item} alt="" />
    ) : imgSrc ? (
      <img src={imgSrc} alt="" />
    ) : null;

  return (
    <Card
      className="shadow rounded card-teaser-image card-flex"
      teaser
      wrapperClassName={`card-teaser-wrapper-equal card-teaser-block-2 card-featured card-featured-${size}`}
    >
      <CardBody className="p-4">
        <UniversalLink
          item={!isEditMode ? item : null}
          href={isEditMode ? '#' : ''}
        >
          <CardTitle tag="h3">{item.title}</CardTitle>
        </UniversalLink>

        {item.description && size !== 'small' && (
          <CardText>{item.description}</CardText>
        )}

        <div className="category-bottom">
          {item.topic && (
            <div className="category">
              <UniversalLink href="#">
                <span className="text">{item.topic}</span>
              </UniversalLink>
            </div>
          )}
        </div>
      </CardBody>

      {img && <div className="card-image card-image-rounded">{img}</div>}
    </Card>
  );
};

export default CardFeatured;
