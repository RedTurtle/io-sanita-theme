import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  AvatarIcon,
} from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { Icon } from 'io-sanita-theme/components';
import { Address } from 'io-sanita-theme/helpers';
import './cardPersona.scss';

/*TODO:
- capire da dove deve essere preso eventualmente l'indirizzo
*/

const messages = defineMessages({
  address: {
    id: 'CardPersona: address label',
    defaultMessage: 'Indirizzo',
  },
  view_on_googlemaps: {
    id: 'CardPersona: view on googlemaps',
    defaultMessage: 'Apri in mappa',
  },
});

export const CardPersona = ({
  showDistance = false,
  size = 'big',
  imgSrc,
  item,
  isEditMode,
}) => {
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;

  const img =
    item.image_field &&
    item.image_scales?.[item.image_field]?.filter((i) => i != null)?.length >
      0 ? (
      <Image item={item} alt="" />
    ) : imgSrc ? (
      <img src={imgSrc} alt="" />
    ) : null;

  return (
    <Card className="shadow rounded card-persona no-after">
      <CardBody className="d-flex">
        <div className="card-persona-content flex-grow-1 pe-5">
          <CardTitle tag="h5" className="mb-0">
            <UniversalLink
              item={!isEditMode ? item : null}
              href={isEditMode ? '#' : ''}
              className="card-title-link"
            >
              {item.title}
            </UniversalLink>
          </CardTitle>

          <CardText tag="div">
            {item.incarico_principale && <p>{item.incarico_principale}</p>}
            {size != 'small' && item.uo && (
              <div className="mb-2">
                <div className="fw-bold primary-text">{item.uo.title}</div>
                <Address item={item.uo} showDistance={showDistance} />
              </div>
            )}
          </CardText>
        </div>
        <AvatarIcon size="xl">
          {img ? img : <Icon icon="it-user" color="primary" />}
        </AvatarIcon>
      </CardBody>
    </Card>
  );
};

export default CardPersona;
