import React from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'design-react-kit';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';

const DefaultSkeleton = (props) => {
  const { isEditMode, title } = props;
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
        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3 mb-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Card
              className="align-items-top rounded shadow"
              noWrapper
              teaser
              key={i}
            >
              <CardBody className="pb-5">
                <CardTitle tag="h5"> </CardTitle>
                <CardText> </CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </ListingContainer>
  );
};

export default DefaultSkeleton;
