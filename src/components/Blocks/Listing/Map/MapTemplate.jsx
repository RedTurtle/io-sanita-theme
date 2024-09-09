/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import cx from 'classnames';
import { OSMMap } from 'volto-venue';
import { Row, Col, Container } from 'design-react-kit';
import { ListingLinkMore } from 'io-sanita-theme/components/Blocks';
import './mapTemplate.scss';

const messages = defineMessages({
  default_detail_link: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
  no_markers: {
    id: 'Non ci sono punti da mostrare sulla mappa',
    defaultMessage: 'Non ci sono punti da mostrare sulla mappa',
  },
});

const MapTemplate = ({
  items,
  isEditMode,
  linkAlign,
  linkTitle,
  linkHref,
  title,
  titleLine,
  show_map_full_width,
  map_size = 'medium',
  linkmore_id_lighthouse,
  ...rest
}) => {
  const intl = useIntl();
  let history = useHistory();

  moment.locale(intl.locale);

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    let points = items
      .filter(
        (item) =>
          (item.latitude &&
            item.longitude &&
            item.latitude !== 0 &&
            item.longitude !== 0) ||
          (item.geolocation && //for backward compatibility. To remove on next release.
            item.geolocation?.latitude &&
            item.geolocation?.longitude &&
            item.geolocation?.latitude !== 0 &&
            item.geolocation?.longitude !== 0),
      )
      .map((item) => {
        return {
          title: item.title,
          ...(item.geolocation
            ? item.geolocation
            : { latitude: item.latitude, longitude: item.longitude }),

          onMarkerClick: (e) => {
            history.push(item['@id']);
          },
        };
      });

    setMarkers(points);
  }, [items]);

  return (
    <div className="map-template">
      <Container
        className={!rest.show_block_bg || isEditMode ? 'px-0' : 'px-4'}
      >
        {items?.length > 0 && markers?.length > 0 ? (
          <div
            className={cx('mb-4 map-wrapper', {
              'full-width': show_map_full_width,
              ['size_' + map_size]: map_size,
            })}
          >
            <OSMMap
              markers={markers}
              showTooltip
              mapOptions={{
                scrollWheelZoom: false,
                // tap: false,
                // dragging: false,
              }}
            />
          </div>
        ) : (
          intl.formatMessage(messages.no_markers)
        )}

        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-5"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
    </div>
  );
};

MapTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
};

export default MapTemplate;
