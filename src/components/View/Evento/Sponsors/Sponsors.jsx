import React from 'react';
import PropTypes from 'prop-types';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';
import './_sponsors.scss';

/**
 * Sponsor view component class.
 * @function Sponsor
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const Sponsor = ({ item }) => {
  const Image = config.getComponent({ name: 'Image' }).component;
  const image =
    item?.image_field &&
    Image({
      item: item,
      sizes: '600px',
      loading: 'lazy',
      className: 'img-fluid',
      alt: item.title,
    });
  return item ? (
    <div className="sponsor-item">
      <UniversalLink href={item.remoteUrl}>
        {image ? image : item.title}
      </UniversalLink>
    </div>
  ) : null;
};

/**
 * Sponsors view component class (used in EventSponsors)
 * @function Sponsors
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const Sponsors = ({ sponsors }) => {
  const sponsors_no_logos = sponsors.filter((sponsor) => !sponsor.image_field);
  const sponsors_logos = sponsors.filter((sponsor) => sponsor.image_field);
  return sponsors?.length > 0 ? (
    <>
      <div className="sponsor-wrapper">
        {sponsors_logos.length > 0 && (
          <div className="sponsor-logos">
            {sponsors_logos.map((item, i) => (
              <Sponsor key={'sponsor'+item['@id']} item={item} />
            ))}
          </div>
        )}
        {sponsors_no_logos.length > 0 && (
          <div className="sponsor-no-logos">
            {sponsors_no_logos.map((item, i) => (
              <Sponsor key={'sponsor-no'+item['@id']} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  ) : null;
};
Sponsors.propTypes = {
  sponsors: PropTypes.array,
};
export default Sponsors;
