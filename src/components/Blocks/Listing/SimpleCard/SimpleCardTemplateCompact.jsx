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
      {title && (
        <Row>
          <Col>
            <h2
              className={cx('mb-4', {
                'mt-5': !show_block_bg,
              })}
            >
              {title}
            </h2>
          </Col>
        </Row>
      )}
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3 mb-3">
        {items.map((item, index) => (
          <CardSimple item={item} key={index} />
        ))}
      </div>

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
