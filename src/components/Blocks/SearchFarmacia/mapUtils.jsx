import ReactDOMServer from 'react-dom/server';
import { defineMessages } from 'react-intl';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { mapPinDirections } from 'io-sanita-theme/helpers';
import ioSanitaPin from 'io-sanita-theme/components/Blocks/SearchMap/map-pin.svg';
import { getActiveTurni } from './turniUtils';

const messages = defineMessages({
  period_from: {
    id: 'search_farmacia_map_period_from',
    defaultMessage: 'Dal',
  },
  period_to: {
    id: 'search_farmacia_map_period_to',
    defaultMessage: 'al',
  },
  turni: {
    id: 'search_farmacia_map_turni',
    defaultMessage: 'Periodo e tipologia di turno',
  },
  view_details: {
    id: 'search_farmacia_map_view_details',
    defaultMessage: 'Vedi scheda della farmacia',
  },
});

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

// stesse informazioni mostrate in una riga della tabella dei risultati (Results.jsx)
const FarmaciaPopupInfo = ({
  item,
  intl,
  isEditMode,
  searchType,
  showCap,
  showProvincia,
  showLocalitaColonna,
  showTipoTurno,
  onlyActiveTurno,
  searchDate,
}) => {
  const showZip = showCap && item?.zip_code;
  const showProv = showProvincia && item?.provincia;
  const turniDaMostrare =
    onlyActiveTurno && searchDate
      ? getActiveTurni(item.turni, searchDate)
      : item.turni;
  const periods = searchType === 'vacations' ? item.ferie : turniDaMostrare;

  return (
    <div className="farmacia-map-popup-info">
      <p className="mb-1">
        {item?.street} - {item?.comune}
        {showLocalitaColonna && item?.localita ? ` - ${item.localita}` : ''}
        {showZip ? ` ${item.zip_code}` : ''}
        {showProv ? ` (${item.provincia})` : ''}
      </p>
      {periods?.length > 0 && (
        <p className="mb-1">
          <strong>{intl.formatMessage(messages.turni)}</strong>
          <br />
          {periods.map((pd, i) => (
            <span key={i}>
              {intl.formatMessage(messages.period_from)}
              {pd?.dal && <> {pd.dal}</>}{' '}
              {intl.formatMessage(messages.period_to)}
              {pd?.al && <> {pd.al}</>}
              {showTipoTurno && pd?.tipo_turno && <> – {pd.tipo_turno}</>}
              <br />
            </span>
          ))}
        </p>
      )}
      {item?.['@id'] && (
        <p className="mb-0">
          <UniversalLink
            item={!isEditMode ? item : null}
            href={isEditMode ? '#' : null}
          >
            {intl.formatMessage(messages.view_details)}
          </UniversalLink>
        </p>
      )}
    </div>
  );
};

// i dati delle farmacie arrivano da @searchfarmacie con lat/lng piatte
// (latitudine/longitudine) invece del campo geolocation annidato
export const hasFarmaciaGeolocation = (item) => {
  const lat = Number(item?.latitudine);
  const lng = Number(item?.longitudine);
  return !!item && !!lat && !!lng;
};

export const getFarmaciaMarker = (item, intl, options = {}) => {
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
    popupContent: mapPinDirections(
      point,
      intl,
      <FarmaciaPopupInfo item={point} intl={intl} {...options} />,
    ),
  };
};

export const getFarmacieMarkers = (items, intl, options = {}) =>
  (items ?? [])
    .map((item) => getFarmaciaMarker(item, intl, options))
    .filter(Boolean);

// firma indipendente dall'ordine degli item: usata per evitare di ricreare
// l'array dei marker (e quindi lo zoom/i bounds della mappa) quando cambia solo
// l'ordinamento della tabella dei risultati, e non l'insieme delle farmacie mostrate
export const getFarmacieMarkersSignature = (items, options = {}) => {
  const {
    isEditMode,
    searchType,
    showCap,
    showProvincia,
    showLocalitaColonna,
    showTipoTurno,
    onlyActiveTurno,
    searchDate,
  } = options;

  const itemsSignature = (items ?? [])
    .filter(hasFarmaciaGeolocation)
    .map((item) =>
      JSON.stringify([
        item['@id'],
        item.latitudine,
        item.longitudine,
        item.comune,
        item.localita,
        item.street,
        item.zip_code,
        item.provincia,
        item.telefono,
        item.telefono_turno,
        item.turni,
        item.ferie,
      ]),
    )
    .sort()
    .join('|');

  return [
    itemsSignature,
    isEditMode,
    searchType,
    showCap,
    showProvincia,
    showLocalitaColonna,
    showTipoTurno,
    onlyActiveTurno,
    searchDate,
  ].join('::');
};
