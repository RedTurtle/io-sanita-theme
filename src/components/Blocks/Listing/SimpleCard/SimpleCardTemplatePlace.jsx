import React from 'react';

import PropTypes from 'prop-types';

import { Row, Col } from 'design-react-kit';

import { CardPlace } from 'io-sanita-theme/components';
import { ListingLinkMore } from 'io-sanita-theme/components/Blocks';

const SimpleCardTemplatePlace = ({
  items,
  isEditMode,
  linkTitle,
  linkHref,
  show_block_bg,
  show_category,
  title,
  id_lighthouse,
  linkAlign,
  linkmore_id_lighthouse,
  cardType = 'essential',
}) => {
  return (
    <div className="simple-card-place-template">
      <Row className="mb-3">
        {items.map((item, index) => (
          <Col md={6} lg={4} key={index}>
            <CardPlace
              item={item}
              type={cardType}
              titleDataElement={id_lighthouse}
              isEditMode={isEditMode}
              showCategory={show_category}
            />
          </Col>
        ))}
      </Row>

      <ListingLinkMore
        title={linkTitle}
        href={linkHref}
        className={show_block_bg ? 'mt-4' : 'my-4'}
        linkAlign={linkAlign}
        linkmoreIdLighthouse={linkmore_id_lighthouse}
      />
    </div>
  );
};

SimpleCardTemplatePlace.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  c: PropTypes.any,
};

export default SimpleCardTemplatePlace;
