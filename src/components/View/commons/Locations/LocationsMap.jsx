import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { getContent, resetContent } from '@plone/volto/actions/content/content';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { OSMMap } from 'volto-venue';
import { hasGeolocation, mapPinDirections } from 'io-sanita-theme/helpers';

/**
 * LocationsMap view component class.
 * @function LocationMap
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const LocationsMap = ({ center, locations }) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const fetchedLocations = useSelector((state) => state.content.subrequests);
  const venues = locations.map((location) => {
    let url = flattenToAppURL(location['@id']);
    return {
      key: `luogo${url}`,
      url: url,
    };
  });

  useEffect(() => {
    venues.forEach((loc) => {
      if (
        !fetchedLocations?.[loc.key]?.loading &&
        !fetchedLocations?.[loc.key]?.loaded
      ) {
        dispatch(getContent(loc.url, null, loc.key));
      }
    });

    return () =>
      venues.forEach((loc) => {
        dispatch(resetContent(loc.key));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, locations]);

  let venuesData = venues.reduce((acc, val) => {
    let venue = fetchedLocations?.[val.key]?.data;

    if (hasGeolocation(venue)) {
      return [
        ...acc,
        {
          latitude: venue.geolocation.latitude,
          longitude: venue.geolocation.longitude,
          title: venue.title,
          popupContent: mapPinDirections(venue, intl),
        },
      ];
    }

    return acc;
  }, []);

  if (hasGeolocation(center)) {
    venuesData = [
      {
        latitude: center.geolocation.latitude,
        longitude: center.geolocation.longitude,
        title: center.title,
        popupContent: mapPinDirections(center, intl),
      },
      ...venuesData,
    ];
  }

  return venuesData?.length > 0 ? (
    <>
      {__CLIENT__ ? (
        <OSMMap
          center={[venuesData[0].latitude, venuesData[0].longitude]}
          markers={venuesData}
          showTooltip={true}
          showPopup={true}
          mapOptions={{
            scrollWheelZoom: false,
            // tap: false,
            // dragging: false,
          }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  ) : null;
};

LocationsMap.propTypes = {
  content: PropTypes.shape({
    '@id': PropTypes.string,
    geolocation: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  }),
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      '@id': PropTypes.string,
      '@type': PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      review_state: PropTypes.string,
    }),
  ),
};

export default LocationsMap;
