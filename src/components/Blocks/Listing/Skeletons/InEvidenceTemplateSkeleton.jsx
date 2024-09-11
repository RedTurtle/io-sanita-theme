import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Chip,
} from 'design-react-kit';
import cx from 'classnames';

const InEvidenceTemplateSkeleton = ({
  title,
  isEditMode,
  show_block_bg,
  linkHref,
}) => {
  return (
    <div className="in-evidence">
      <Container className="px-4">
        <div className="skeleton-template">
          <div className="in-evidence-cards-wrapper mb-5">
            {[0, 1, 2, 3, 4].map((i) => {
              return (
                <Card key={i} className={cx('listing-item')}>
                  {i === 0 && (
                    <div className="img-responsive-wrapper">
                      <div className="img-responsive">
                        <figure className="img-wrapper"></figure>
                      </div>
                    </div>
                  )}

                  <CardBody className="px-4">
                    <CardTitle tag="h4"> </CardTitle>
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
                </Card>
              );
            })}
          </div>
          {linkHref && <div className="link-button text-center"></div>}
        </div>
      </Container>
    </div>
  );
};

InEvidenceTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default InEvidenceTemplateSkeleton;
