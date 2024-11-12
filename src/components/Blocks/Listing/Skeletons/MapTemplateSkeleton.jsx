import React from 'react';
import PropTypes from 'prop-types';

import { ListingContainer } from 'io-sanita-theme/components/Blocks';

const MapTemplateSkeleton = (props) => {
  const {
    isEditMode,
    linkHref,
    title,
    show_only_first_ribbon,
    show_detail_link,
    detail_link_label,
    show_block_bg,
    hide_dates,
  } = props;

  return (
    <div className="map-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <div className="template-skeleton">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}
          {title && <h2 className="mb-4">{title}</h2>}

          <div className="mb-4">
            <div className="map-skeleton"></div>
          </div>
          {linkHref && <div className="link-button text-center my-5"></div>}
        </div>
      </ListingContainer>
    </div>
  );
};

MapTemplateSkeleton.propTypes = {
  isEditMode: PropTypes.bool,
  linkHref: PropTypes.any,
};

export default MapTemplateSkeleton;
