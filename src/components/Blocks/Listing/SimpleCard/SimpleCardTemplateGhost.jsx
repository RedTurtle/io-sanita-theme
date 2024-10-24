import React from 'react';

import PropTypes from 'prop-types';

import { Row, Col } from 'design-react-kit';

import { CardGhost } from 'io-sanita-theme/components';
import { ListingLinkMore } from 'io-sanita-theme/components/Blocks';

const SimpleCardTemplateGhost = ({
  items,
  isEditMode,
  linkTitle,
  linkHref,
  show_block_bg,
  title,
  id_lighthouse,
  linkAlign,
  linkmore_id_lighthouse,
}) => {
  return (
    <div className="simple-card-ghost-template">
      <Row className="mb-3">
        {items.map((item, index) => (
          <Col md={6} lg={4} key={index}>
            <CardGhost
              item={item}
              isEditMode={isEditMode}
              titleDataElement={id_lighthouse}
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

SimpleCardTemplateGhost.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  c: PropTypes.any,
};

export default SimpleCardTemplateGhost;
