import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  view_on_googlemaps: {
    id: 'view_on_googlemaps',
    defaultMessage: 'Vedi su Google Maps',
  },
  view_on_bingmaps: {
    id: 'view_on_bingmaps',
    defaultMessage: 'Vedi su Bing Maps',
  },
  view_on_applemaps: {
    id: 'view_on_applemaps',
    defaultMessage: 'Vedi su Apple Maps',
  },
});

export const mapPinDirections = (item, intl) => {
  return (
    <div className="map-pin-popup">
      <div className="title">{item.title}</div>
      <p>
        <UniversalLink
          href={`http://maps.google.com/?q=${item.street ?? ''} ${
            item.zip_code ?? ''
          } ${item.city ?? ''} ${item.province ?? ''} ${
            item.geolocation.latitude
          },${item.geolocation.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {intl.formatMessage(messages.view_on_googlemaps)}
        </UniversalLink>
      </p>
      <p>
        <UniversalLink
          href={`https://bing.com/maps/default.aspx?where1=${
            item.street ?? ''
          } ${item.zip_code ?? ''} ${item.city ?? ''} ${item.province ?? ''}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {intl.formatMessage(messages.view_on_bingmaps)}
        </UniversalLink>
      </p>
      <p>
        <UniversalLink
          href={`http://maps.apple.com/?q=${item.street ?? ''} ${
            item.zip_code ?? ''
          } ${item.city ?? ''} ${item.province ?? ''}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {intl.formatMessage(messages.view_on_applemaps)}
        </UniversalLink>
      </p>
    </div>
  );
};
