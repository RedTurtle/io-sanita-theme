import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Chip,
  Row,
  Col,
} from 'design-react-kit';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';

const InEvidenceTemplateSkeleton = (props) => {
  const { title, isEditMode, show_block_bg, linkHref } = props;
  return (
    <div className="in-evidence">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <div className="skeleton-template">
          <div className="in-evidence-cards-wrapper mb-5">
            <Row>
              {[0, 1, 2, 3, 4].map((i) => {
                return (
                  <Col lg={i > 0 ? 6 : 12} key={i}>
                    <Card
                      teaser
                      key={i}
                      className={cx(
                        'shadow rounded card-teaser-image card-flex mb-3',
                      )}
                      wrapperClassName={cx(
                        'card-teaser-wrapper-equal card-teaser-block-2 card-featured',
                        {
                          'card-featured-small': i > 0,
                          'card-featured-large': i === 0,
                        },
                      )}
                    >
                      <CardBody className="p-4">
                        <CardTitle tag="h2"> </CardTitle>
                        <CardText className="mb-3"> </CardText>
                        <div>
                          {[0, 1]?.map((index) => (
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
                  </Col>
                );
              })}
            </Row>
          </div>
          {linkHref && <div className="link-button text-center"></div>}
        </div>
      </ListingContainer>
    </div>
  );
};

InEvidenceTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default InEvidenceTemplateSkeleton;
