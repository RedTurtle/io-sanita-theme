import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

import { Icon } from 'io-sanita-theme/components';

import './cardGhost.scss';

export const CardGhost = ({ item, isEditMode, titleDataElement }) => {
  return (
    <Card className="no-after card-ghost border-bottom-card">
      <CardBody className="p-0 pb-3">
        <CardTitle tag="h3" className="card-title-icon">
          <UniversalLink
            item={!isEditMode ? item : null}
            href={isEditMode ? '#' : ''}
            className="card-title-link"
            data-element={titleDataElement}
          >
            {item.title}

            <Icon icon="it-chevron-right" />
          </UniversalLink>
        </CardTitle>

        {item.description && <CardText>{item.description}</CardText>}
      </CardBody>
    </Card>
  );
};

export default CardGhost;
