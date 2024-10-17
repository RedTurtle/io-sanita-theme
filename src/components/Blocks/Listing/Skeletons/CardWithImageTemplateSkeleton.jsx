import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Chip,
} from 'design-react-kit';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';
import './cardWithImageTemplateSkeleton.scss';

const CardWithImageTemplateSkeleton = (props) => {
  const {
    isEditMode,
    title,
    linkHref,
    show_block_bg = false,
    always_show_image = false,
    hide_dates = false,
    full_width = true,
    set_four_columns = false,
  } = props;

  const layoutSelected = set_four_columns ? '3' : '4';

  return (
    <div className="card-with-image-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <div className="skeleton-template">
          <Row className="items mb-3">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => {
              return (
                <Col
                  md={6}
                  xl={layoutSelected}
                  lg={layoutSelected}
                  key={i}
                  className="col-item mb-3"
                >
                  <Card className={cx('listing-item card-bg no-after')}>
                    {/* wrapperClassName="card-overlapping" */}
                    {(i < 3 || always_show_image) && (
                      <div className="img-responsive-wrapper">
                        <div className="img-responsive img-responsive-panoramic">
                          <figure className="img-wrapper"></figure>
                        </div>
                      </div>
                    )}
                    <CardBody className="px-4">
                      <CardTitle tag="h4"> </CardTitle>
                      <CardText className="mb-3"></CardText>
                      <div>
                        {[0, 1].map((argument) => (
                          <Chip
                            color="primary"
                            disabled={false}
                            simple
                            tag="div"
                            className="me-2"
                            key={argument}
                          ></Chip>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {linkHref && <div className="link-button text-center"></div>}
        </div>
      </ListingContainer>
    </div>
  );
};

CardWithImageTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CardWithImageTemplateSkeleton;
