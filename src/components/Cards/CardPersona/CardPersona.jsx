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

import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
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

  const strutture = [
    ...(item.struttura_ricevimento ?? []),
    ...(item.struttura_in_cui_opera ?? []),
  ];

  return (
    <Card className={cx('shadow rounded card-persona no-after', className)}>
      <CardBody className="d-flex">
        <div className="card-persona-content flex-grow-1 pe-2 pe-lg-5">
          <CardTitle tag={titleTag} className="mb-0">
            {item['@id'] ? (
              <UniversalLink
                item={!isEditMode ? item : null}
                href={isEditMode ? '#' : ''}
                className="card-title-link"
                data-element={titleDataElement}
              >
                {item.title}
              </UniversalLink>
            ) : (
              item.title
            )}
          </CardTitle>

          <CardText tag="div">
            {incarico && (
              <p className="mb-0">
                {typeof incarico == 'string' ? incarico : incarico.title}
              </p>
            )}
            {size !== 'small' && (
              <>
                {hasGeolocation(item) && (
                  <div className="mb-2 mt-2">
                    <Address item={item} showDistance={showDistance} />
                  </div>
                )}

                {strutture.map((s, index_s) => (
                  <div className="mb-2 mt-2" key={index_s}>
                    <div>
                      <UniversalLink
                        item={!isEditMode ? s : null}
                        href={isEditMode ? '#' : ''}
                        className="fw-bold"
                      >
                        {s.title}
                      </UniversalLink>
                    </div>
                    <Address item={s} showDistance={showDistance} />
                  </div>
                ))}
              </>
            )}
          </CardText>
        </div>

        <AvatarIcon size="xl">
          {img ? (
            img
          ) : (
            <Icon icon="it-user" color="primary" aria-hidden={true} />
          )}
        </AvatarIcon>
      </CardBody>
    </Card>
  );
};

export default CardPersona;
