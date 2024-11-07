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

const CompleteBlockLinksTemplateSkeleton = (props) => {
  const { title, isEditMode } = props;
  return (
    <div className="complete-block-links-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}
          <Row className="items">
            {[0, 1, 2, 3].map((i) => (
              <Col md="6" lg="3" key={i} className="col-item">
                <Card color="" className="card-bg rounded" noWrapper={false}>
                  <div className="d-flex">
                    <div className="image-container"> </div>

                    <CardBody>
                      <CardTitle tag="h5">-</CardTitle>
                      <CardText tag="p"></CardText>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </ListingContainer>
    </div>
  );
};

CompleteBlockLinksTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CompleteBlockLinksTemplateSkeleton;
