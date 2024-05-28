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
import { Icon } from 'io-sanita-theme/components';

import './cardGhost.scss';

export const CardGhost = ({ item, isEditMode, rrule = {} }) => {
  return (
    <Card className="no-after card-ghost">
      <CardBody className="p-4">
        <UniversalLink
          item={!isEditMode ? item : null}
          href={isEditMode ? '#' : ''}
        >
          <CardTitle tag="h3" className="card-title-icon">
            <span>{item.title}</span>
            <div className="icon-wrapper">
              <Icon icon="it-chevron-right" />
            </div>
          </CardTitle>
        </UniversalLink>

        {item.description && <CardText>{item.description}</CardText>}
      </CardBody>
    </Card>
  );
};

export default injectLazyLibs(['rrule'])(CardGhost);
