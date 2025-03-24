import React from 'react';
import PropTypes from 'prop-types';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { Row, Col, Table } from 'design-react-kit';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';

const SimpleListTemplateSkeleton = (props) => {
  const { isEditMode, title, linkHref, show_block_bg, show_pointer_list } =
    props;
  return (
    <div className="table-skeleton-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}

          <Table size="sm" responsive bordered>
            <thead>
              <tr>
                {[0, 1, 2, 3, 4].map((i) => (
                  <th scope="col" key={i}></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <tr key={i}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <td scope="col" key={i}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
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
