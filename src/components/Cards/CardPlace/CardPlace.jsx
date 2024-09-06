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
import { Address, hasGeolocation } from 'io-sanita-theme/helpers';
import './cardPlace.scss';

const messages = defineMessages({
  view_on_googlemaps: {
    id: 'CardPlace: view on googlemaps',
    defaultMessage: 'Apri in mappa',
  },
});

const CardPlace = ({
  size = 'big', // 'small'
  type = 'complete', // ['complete','essential','synthetic']
  showDistance = false,
  showAddress = true,
  item,
  isEditMode,
  titleTag = 'h3',
  className,
}) => {
  const intl = useIntl();
  const latLong = hasGeolocation(item)
    ? item?.geolocation?.latitude + ',' + item?.geolocation?.longitude
    : '';
  const showGeolocation =
    latLong?.length > 0 ||
    (item?.street?.length > 0 &&
      (item?.zip_code?.length > 0 || item.city?.length > 0));

  return (
    <Card
      className={cx('shadow rounded card-place no-after', className, {
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
          <div className="card-place-content-top">
            <CardTitle tag={titleTag}>
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
                    <Address item={item} showDistance={false} tag="p" />
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
            </CardText>
          </div>
          {type !== 'synthetic' && (
            <CardCategoryBottom item={item} isEditMode={isEditMode} />
          )}
        </div>
        <AvatarIcon size={size == 'small' ? 'l' : 'xl'}>
          <VoltoIcon className="icon-svg-custom" name={ASLIcon} />
        </AvatarIcon>
      </CardBody>

      {type == 'complete' && size != 'small' && showGeolocation && (
        <CardFooter className="mx-4 py-3 text-end pe-0 fw-semibold">
          <UniversalLink
            href={`http://maps.google.com/?q=${item?.street ?? ''} ${
              item?.zip_code ?? ''
            } ${item?.city ?? ''} ${item?.province ?? ''} ${latLong}`}
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
