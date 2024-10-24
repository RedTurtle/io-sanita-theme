import React from 'react';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';
import { Row, Col } from 'design-react-kit';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';

const SimpleListTemplateSkeleton = (props) => {
  const { isEditMode, title, linkHref, show_block_bg, show_pointer_list } =
    props;
  return (
    <div className="simple-list-skeleton-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}

          <ul className={show_pointer_list ? 'decoration-pointer' : ''}>
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <li key={i}>
                <UniversalLink href="#">
                  <h3 className="skeleton-item-title"> </h3>
                </UniversalLink>
              </li>
            ))}
          </ul>
          {linkHref && <div className="link-button text-center my-5"></div>}
        </div>
      </ListingContainer>
    </div>
  );
};

SimpleListTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SimpleListTemplateSkeleton;
