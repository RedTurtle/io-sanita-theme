import React from 'react';
import { useIntl } from 'react-intl';
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
import { Address, hasGeolocation } from 'io-sanita-theme/helpers';
import './cardPersona.scss';

/*TODO:
- capire da dove deve essere preso eventualmente l'indirizzo
*/

// const messages = defineMessages({
//   address: {
//     id: 'CardPersona: address label',
//     defaultMessage: 'Indirizzo',
//   },
//   view_on_googlemaps: {
//     id: 'CardPersona: view on googlemaps',
//     defaultMessage: 'Apri in mappa',
//   },
// });

export const CardPersona = ({
  showDistance = false,
  size = 'big',
  imgSrc,
  item,
  isEditMode,
  titleTag = 'h3',
  className,
  titleDataElement,
  show_image = true,
}) => {
  const Image = config.getComponent({ name: 'Image' }).component;

  let img = null;
  if (show_image) {
    img =
      item.image_field &&
      item.image_scales?.[item.image_field]?.filter((i) => i != null)?.length >
        0 ? (
        <Image item={item} alt="" />
      ) : imgSrc ? (
        <img src={imgSrc} alt="" />
      ) : null;
  }

  const incarico_field =
    item.incarico_metadata?.length > 0 ? item.incarico_metadata : item.incarico;
  const incarico =
    incarico_field?.length > 0
      ? incarico_field[incarico_field.length - 1]
      : null;

  return (
    <Card className={cx('shadow rounded card-persona no-after', className)}>
      <CardBody className="d-flex">
        <div className="card-persona-content flex-grow-1 pe-2 pe-lg-5">
          <CardTitle tag={titleTag} className="mb-0">
            <UniversalLink
              item={!isEditMode ? item : null}
              href={isEditMode ? '#' : ''}
              className="card-title-link"
              data-element={titleDataElement}
            >
              {item.title}
            </UniversalLink>
          </CardTitle>

          <CardText tag="div">
            {incarico && (
              <p className="mb-0">
                {typeof incarico == 'string' ? incarico : incarico.title}
              </p>
            )}
            {size !== 'small' && (
              <>
                {item.struttura_ricevimento?.length > 0 ? (
                  <div className="mb-2 mt-2">
                    <div>
                      <UniversalLink
                        item={
                          !isEditMode ? item.struttura_ricevimento[0] : null
                        }
                        href={isEditMode ? '#' : ''}
                        className="fw-bold"
                      >
                        {item.struttura_ricevimento[0].title}
                      </UniversalLink>
                    </div>
                    <Address
                      item={item.struttura_ricevimento[0]}
                      showDistance={showDistance}
                    />
                  </div>
                ) : (
                  <>
                    {hasGeolocation(item) && (
                      <div className="mb-2 mt-2">
                        <Address item={item} showDistance={showDistance} />
                      </div>
                    )}
                  </>
                )}
              </>
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
