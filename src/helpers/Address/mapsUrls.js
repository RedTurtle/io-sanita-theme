/**
 * URL dei servizi di mappe per un luogo con indirizzo e/o geolocalizzazione.
 *
 * Indirizzo e coordinate non vanno mai mescolati nella stessa query: Google
 * risolverebbe il testo e ignorerebbe (o penalizzerebbe) le coordinate,
 * finendo su un POI vicino. Con coordinate valide si usano quelle, altrimenti
 * l'indirizzo, sempre URL-encoded.
 */

const toNumber = (value) => {
  if (value === null || value === undefined || value === '') return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
};

export const getCoordinates = (item) => {
  const latitude = toNumber(item?.geolocation?.latitude);
  const longitude = toNumber(item?.geolocation?.longitude);
  if (latitude === null || longitude === null) return null;
  if (latitude === 0 && longitude === 0) return null;
  return { latitude, longitude };
};

export const getAddressQuery = (item) =>
  [item?.street, item?.zip_code, item?.city, item?.province ?? item?.provincia]
    .filter(Boolean)
    .join(' ')
    .trim();

export const getGoogleMapsUrl = (item) => {
  const coordinates = getCoordinates(item);
  const query = coordinates
    ? `${coordinates.latitude},${coordinates.longitude}`
    : getAddressQuery(item);
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`;
};

export const getBingMapsUrl = (item) =>
  `https://www.bing.com/maps/default.aspx?where1=${encodeURIComponent(
    getAddressQuery(item),
  )}`;

export const getAppleMapsUrl = (item) =>
  `https://maps.apple.com/?q=${encodeURIComponent(getAddressQuery(item))}`;
