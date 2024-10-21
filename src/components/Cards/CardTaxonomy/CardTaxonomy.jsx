/*
Implementa la
- Card user. Evidenzia le diverse tipologie di utenti dell’ASL
*/

import React from 'react';

import { Card, CardBody, CardTitle, CardText, Badge } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'io-sanita-theme/components';

import {
  AGGREGATION_PAGE_ARGOMENTO,
  AGGREGATION_PAGE_TIPOLOGIA_UTENTE,
} from 'io-sanita-theme/config/ioSanitaConfig';

import './cardTaxonomy.scss';

export const CardTaxonomy = ({
  showIcon = true,
  icon = 'it-user',
  item,
  isEditMode,
  className,
  titleTag = 'h5',
  titleDataElement,
  type = 'topics', //topics,users
}) => {
  const title = item.title ?? item.label;
  const href =
    (type === 'topics'
      ? AGGREGATION_PAGE_ARGOMENTO
      : AGGREGATION_PAGE_TIPOLOGIA_UTENTE) + item.value;

  return (
    <Card
      className={`shadow rounded no-after card-taxonomy ${className ?? ''}`}
    >
      <CardBody>
        <div className="card-taxonomy-content">
          <CardTitle tag={titleTag} className="d-flex my-0 align-items-center">
            <UniversalLink
              href={isEditMode ? '#' : href}
              className="card-title-link"
              data-element={titleDataElement}
            >
              {title}
            </UniversalLink>
          </CardTitle>
          {showIcon && <Icon icon={icon} color="accent" />}
        </div>
      </CardBody>
    </Card>
  );
};

export default CardTaxonomy;
