/*
 * Skeleton card con testo animato
 */

import PropTypes from 'prop-types';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'design-react-kit';

const CardWithSlideUpTextTemplateSkeleton = (props) => {
  const { isEditMode, linkHref } = props;

  return (
    <div className="card-slide-text-template">
      <ListingContainer className="px-4" data={props} isEditMode={isEditMode}>
        <div className="skeleton-template">
          <Row className="items">
            {[0, 1, 2].map((i) => (
              <Col md="6" lg="4" key={i} className="col-item">
                <Card shadow rounded card-teaser-image card-flex mb-3>
                  <div className="d-flex">
                    <CardBody>
                      <CardTitle tag="h5"></CardTitle>
                      <CardText tag="p"></CardText>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          {linkHref && <div className="link-button text-center my-4"></div>}
        </div>
      </ListingContainer>
    </div>
  );
};

CardWithSlideUpTextTemplateSkeleton.propTypes = {
  title: PropTypes.string,
  linkTitle: PropTypes.any,
  linkHrefs: PropTypes.any,
};

export default CardWithSlideUpTextTemplateSkeleton;
