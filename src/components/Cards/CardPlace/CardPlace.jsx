import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  AvatarIcon,
} from 'design-react-kit';

import { UniversalLink, Icon as VoltoIcon } from '@plone/volto/components';
import ASLIcon from 'io-sanita-theme/icons/ASL.svg';
import { Icon, CardCategoryBottom } from 'io-sanita-theme/components';
import { Address } from 'io-sanita-theme/helpers';
import './cardPlace.scss';

const messages = defineMessages({
  address: {
    id: 'CardPlace: address label',
    defaultMessage: 'Indirizzo',
  },
  view_on_googlemaps: {
    id: 'CardPlace: view on googlemaps',
    defaultMessage: 'Apri in mappa',
  },
});

const CardPlace = ({
  size = 'big', // 'small'
  type = 'complete', // 'synthetic'
  showDistance = false,
  showAddress = true,
  item,
  isEditMode,
}) => {
  const intl = useIntl();

  return (
    <Card
      className={cx('shadow rounded card-place no-after', {
        'card-place-small': size == 'small',
      })}
    >
      <CardBody className="pe-3 d-flex">
        <div
          className={cx('card-place-content flex-grow-1', {
            'pe-5': size != 'small',
            'pe-3': size == 'small',
          })}
        >
          <CardTitle tag="h5">
            {item['@id'] ? (
              <UniversalLink
                item={!isEditMode ? item : null}
                href={isEditMode ? '#' : ''}
                className="card-title-link"
              >
                {item.nome_sede || item.title}
              </UniversalLink>
            ) : (
              <>{item.nome_sede || item.title}</>
            )}
          </CardTitle>

          <CardText tag="div">
            {size != 'small' && (
              <>
                {showAddress && (
                  <p>
                    {intl.formatMessage(messages.address)}:{' '}
                    <Address item={item} showDistance={false} />
                  </p>
                )}
                {showDistance && (
                  <Address
                    item={item}
                    showAddress={false}
                    showDistance={true}
                  />
                )}
              </>
            )}
            {type !== 'synthetic' && (
              <CardCategoryBottom item={item} isEditMode={isEditMode} />
            )}
          </CardText>
        </div>
        <AvatarIcon size={size == 'small' ? 'l' : 'xl'}>
          <VoltoIcon className="icon-svg-custom" name={ASLIcon} />
        </AvatarIcon>
      </CardBody>
      {(size != 'small' && type == 'complete') &&
        (item?.geolocation?.latitude && item?.geolocation?.longitude) && (
        <CardFooter className="mx-4 py-3 text-end pe-0 fw-semibold">
          <UniversalLink
            href={`http://maps.google.com/?q=${item?.street ?? ''} ${
              item?.zip_code ?? ''
            } ${item?.city ?? ''} ${item?.province ?? ''} ${
              item.geolocation.latitude
            },${item.geolocation.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {intl.formatMessage(messages.view_on_googlemaps)}
          </UniversalLink>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardPlace;
