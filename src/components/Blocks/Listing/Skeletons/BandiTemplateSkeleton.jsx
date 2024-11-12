import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
} from 'design-react-kit';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';

const BandiTemplateSkeleton = (props) => {
  const { title, isEditMode, show_block_bg, linkHref } = props;
  return (
    <div className="bandi-template public-ui">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}
          <div className="bandi-template-cards-wrapper mb-5">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              return (
                <Card key={i} className="mb-4 mb-lg-2 card-bg">
                  <CardBody>
                    <CardTitle tag="h4" className="title"></CardTitle>
                    <div className="bando-description"></div>
                    <div className="bando-dati"></div>

                    <CardReadMore
                      iconName="it-arrow-right"
                      tag={Link}
                      to={'#'}
                      text=""
                    />
                  </CardBody>
                </Card>
              );
            })}
          </div>
          {linkHref && <div className="link-button text-center my-4"></div>}
        </div>
      </ListingContainer>
    </div>
  );
};

BandiTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default BandiTemplateSkeleton;
