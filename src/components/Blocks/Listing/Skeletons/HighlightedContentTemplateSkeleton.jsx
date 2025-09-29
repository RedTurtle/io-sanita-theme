import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, CardText, Chip, Row, Col } from 'design-react-kit';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';

import 'io-sanita-theme/components/Blocks/Listing/HighlightedContent/highlightedContentTemplate.scss';

const HighlightedContentTemplateSkeleton = (props) => {
  const { title, isEditMode, show_block_bg, linkHref } = props;
  return (
    <ListingContainer data={props} isEditMode={isEditMode}>
      <div className="skeleton-template">
        {title && (
          <Row>
            <Col>
              <h2 className="mb-4">{title}</h2>
            </Col>
          </Row>
        )}
        {[0].map((i) => {
          return (
            <Card
              teaser
              className="shadow rounded card-teaser-image card-flex mb-3"
              wrapperClassName={`card-teaser-wrapper-equal card-teaser-block-2 card-featured`}
              key={i}
            >
              <CardBody className="p-4">
                <CardTitle tag="h2"></CardTitle>
                <CardText></CardText>

                <div>
                  {[0, 1].map((index) => (
                    <Chip
                      color="primary"
                      disabled={false}
                      simple
                      tag="div"
                      className="me-2"
                      key={index}
                    ></Chip>
                  ))}
                </div>
              </CardBody>
              <div className="card-image card-image-rounded">
                <div className="img-responsive">
                  <div className="img-wrapper"></div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      {linkHref && <div className="link-button text-center"></div>}
    </ListingContainer>
  );
};

HighlightedContentTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default HighlightedContentTemplateSkeleton;
