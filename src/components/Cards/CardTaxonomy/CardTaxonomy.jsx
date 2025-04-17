/*
Implementa la
- Card user. Evidenzia le diverse tipologie di utenti dell’ASL
*/

import React from 'react';

import { Card, CardBody, CardTitle, CardText, Badge } from 'design-react-kit';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { Icon } from 'io-sanita-theme/components';
import { getAggregationPageUrl } from 'io-sanita-theme/helpers/aggregation';

import './cardTaxonomy.scss';

export const CardTaxonomy = ({
  showIcon = true,
  icon = 'it-user',
  item,
  isEditMode,
  className,
  titleTag = 'h3',
  titleDataElement,
  type = 'topics', //topics,users
}) => {
  const title = item.title ?? item.label;
  const href = getAggregationPageUrl(type, item.value);

  return (
    <Card
      className={`shadow rounded no-after card-taxonomy ${className ?? ''}`}
    >
      <CardBody>
        <div className="card-taxonomy-content">
          <CardTitle
            tag={titleTag}
            className="d-flex my-0 align-items-center h5"
          >
            <UniversalLink
              href={isEditMode ? '#' : href}
              className="card-title-link"
              data-element={titleDataElement}
            >
              {title}
            </UniversalLink>
          </CardTitle>
          {showIcon && <Icon icon={icon} color="accent" aria-hidden={true} />}
        </div>
      </CardBody>
    </Card>
  );
};

export default CardTaxonomy;
