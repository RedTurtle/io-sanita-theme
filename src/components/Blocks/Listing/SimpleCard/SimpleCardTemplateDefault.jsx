import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Row, Col } from 'design-react-kit';
import { v4 as uuid } from 'uuid';
import SimpleCardDefault from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/Card/SimpleCardDefault';
import { ListingLinkMore } from 'io-sanita-theme/components/Blocks';

const SimpleCardTemplateDefault = (props) => {
  const {
    items,
    linkTitle,
    linkHref,
    linkAlign,
    title,
    show_block_bg,
    linkmore_id_lighthouse,
  } = props;

  const resultsUID = uuid();

  return (
    <div className="simple-card-default">
      <Row className="mb-3" id={resultsUID + '_results'}>
        {items.map((item, index) => (
          <Col md={6} lg={4} key={index}>
            <SimpleCardDefault {...props} item={item} index={index} />
          </Col>
        ))}
      </Row>

      <ListingLinkMore
        title={linkTitle}
        href={linkHref}
        className="my-4"
        linkAlign={linkAlign}
        linkmoreIdLighthouse={linkmore_id_lighthouse}
      />
    </div>
  );
};

SimpleCardTemplateDefault.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
};

export default SimpleCardTemplateDefault;