/*
 Usa la Card Featured per mettere in evidenza notizie, comunicati stampa, eventi, bandi e concorsi.
*/

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

const CardFeatured = ({ size = 'large', item, titleTag = 'h3', imgSrc,  isEditMode }) => {
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
        <CardTitle tag={titleTag}>
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

        <CardCategoryBottom item={item} isEditMode={isEditMode} />
      </CardBody>

      {img && <div className="card-image card-image-rounded">{img}</div>}
    </Card>
  );
};

export default CardFeatured;
