import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody, CardTitle } from 'design-react-kit';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';

const AttachmentCardTemplateSkeleton = (props) => {
  const { isEditMode, title, linkHref, show_block_bg, show_pdf_preview } =
    props;
  return (
    <div className="attachment-card-skeleton-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}

          <Row>
            {[0, 1, 2].map((i) => (
            <Col lg={4}>
              <Card
                className="align-items-top rounded shadow no-after"
                noWrapper
                teaser
                key={i}
              >
                <CardBody className="pb-5">
                  <CardTitle tag="h5"> </CardTitle>
                </CardBody>
              </Card>
            </Col>
            ))}
          </Row>
        </div>
      </ListingContainer>
    </div>
  );
};

AttachmentCardTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default AttachmentCardTemplateSkeleton;
