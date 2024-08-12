import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'design-react-kit';
import { LocationsMap } from 'io-sanita-theme/components/View/commons';
import { CardPlace } from 'io-sanita-theme/components';

/**
 * Locations view component class.
 * @function Locations
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Locations = ({ content = {}, locations = [] }) => {
  let location_items = [];
  if (
    content?.nome_sede ||
    content.street ||
    content.city ||
    content.zip_code ||
    content.quartiere ||
    content.circoscrizione
  ) {
    location_items.push(content);
  }

  location_items = [...location_items, ...locations];
  return (
    <>
      <Row className="align-items-stretch mb-4">
        {[...location_items].map((item, i) => (
          <Col lg={6} className="py-lg-2" key={item['@id'] + i}>
            <CardPlace item={item} showDistance={false} />
          </Col>
        ))}
      </Row>
      <LocationsMap center={content} locations={locations} />
    </>
  );
};

Locations.propTypes = {
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
  show_icon: PropTypes.bool,
};

export default Locations;
