import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { Row, Col } from 'design-react-kit';

import { CardGuide, LinkMore } from 'io-sanita-theme/components';

const SimpleCardTemplateGuide = ({
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
    <div className="simple-card-guide-template">
      <Row className="mb-3">
        {items.map((item, index) => (
          <Col md={6} lg={6} key={index}>
            <CardGuide
              item={item}
              isEditMode={isEditMode}
              titleDataElement={id_lighthouse}
            />
          </Col>
        ))}
      </Row>

      <LinkMore
        title={linkTitle}
        href={linkHref}
        className={show_block_bg ? 'mt-4' : 'my-4'}
        linkAlign={linkAlign}
        linkmoreIdLighthouse={linkmore_id_lighthouse}
      />
    </div>
  );
};

SimpleCardTemplateGuide.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  c: PropTypes.any,
};

export default SimpleCardTemplateGuide;
