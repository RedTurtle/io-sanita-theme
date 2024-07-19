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
import { CardCategoryBottom } from 'io-sanita-theme/components';

import './cardFeatured.scss';

const CardFeatured = ({ size = 'large', item, imgSrc, isEditMode }) => {
  const Image = config.getComponent({ name: 'Image' }).component;
  const img =
    item.image_field && item.image_scales?.[item.image_field] ? (
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
        <CardTitle tag="h3">
          <UniversalLink
            item={!isEditMode ? item : null}
            href={isEditMode ? '#' : ''}
            className="card-title-link"
          >
            {item.title}
          </UniversalLink>
        </CardTitle>

        {item.description && size !== 'small' && (
          <CardText>{item.description}</CardText>
        )}

        <CardCategoryBottom
          category={item.parliamo_di_metadata?.[0]}
          isEditMode={isEditMode}
        />
      </CardBody>

      {img && <div className="card-image card-image-rounded">{img}</div>}
    </Card>
  );
};

export default CardFeatured;
