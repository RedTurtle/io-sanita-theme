import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';
import { Row, Col } from 'design-react-kit';

import { CardSimple } from 'io-sanita-theme/components';
import { ListingLinkMore } from 'io-sanita-theme/components/Blocks';

const SimpleCardTemplateCompact = ({
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
  const intl = useIntl();
  return (
    <div className="simple-card-compact-template">
      <Row className="mb-3">
        {items.map((item, index) => (
          <Col md={6} lg={4} key={index}>
            <CardSimple item={item} showDescription={false} />
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

SimpleCardTemplateCompact.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  c: PropTypes.any,
};

export default SimpleCardTemplateCompact;