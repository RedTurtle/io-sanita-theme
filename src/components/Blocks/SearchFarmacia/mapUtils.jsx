import ReactDOMServer from 'react-dom/server';
import { mapPinDirections } from 'io-sanita-theme/helpers';
import ioSanitaPin from 'io-sanita-theme/components/Blocks/SearchMap/map-pin.svg';

const LeafIcon = (options, item) => {
  return {
    html: ReactDOMServer.renderToString(
      <img
        src={options.iconUrl}
        alt={item.title}
        width={options.iconSize[0]}
        height={options.iconSize[1]}
      />,
    ),
    ...options,
  };
};

// i dati delle farmacie arrivano da @searchfarmacie con lat/lng piatte
// (latitudine/longitudine) invece del campo geolocation annidato
export const hasFarmaciaGeolocation = (item) => {
  const lat = Number(item?.latitudine);
  const lng = Number(item?.longitudine);
  return !!item && !!lat && !!lng;
};

export const getFarmaciaMarker = (item, intl) => {
  if (!hasFarmaciaGeolocation(item)) {
    return null;
  }
  const latitude = Number(item.latitudine);
  const longitude = Number(item.longitudine);
  const point = {
    ...item,
    latitude,
    longitude,
    geolocation: { latitude, longitude },
    city: item.comune,
    province: item.provincia,
  };

  return {
    ...point,
    divIcon: LeafIcon(
      {
        iconUrl: ioSanitaPin,
        iconSize: [25, 40],
        iconAnchor: [12.5, 20],
        className: '',
      },
      point,
    ),
    popupContent: mapPinDirections(point, intl),
  };
};

export const getFarmacieMarkers = (items, intl) =>
  (items ?? []).map((item) => getFarmaciaMarker(item, intl)).filter(Boolean);
