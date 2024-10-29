/*
 * componente per visulizzare i risultati del blocco Listing con il template 'Card con immagine'
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'design-react-kit';
import {
  ListingLinkMore,
  ListingContainer,
} from 'io-sanita-theme/components/Blocks';
import CardWithImageDefault from 'io-sanita-theme/components/Blocks/Listing/CardWithImage/Card/CardWithImageDefault';

const CardWithImageTemplate = (props) => {
  const {
    items,
    linkAlign,
    linkTitle,
    linkHref,
    show_block_bg = false,
    set_four_columns = false,
    linkmore_id_lighthouse,
    isEditMode,
  } = props;

  return (
    <div className="card-with-image-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <Row className="mb-3">
          {items.map((item, index) => {
            const layoutSelected = set_four_columns ? '3' : '4';

            return (
              <Col
                md={6}
                xl={layoutSelected}
                lg={layoutSelected}
                key={item['@id']}
              >
                <CardWithImageDefault {...props} item={item} index={index} />
              </Col>
            );
          })}
        </Row>
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          className={show_block_bg ? 'mt-4' : 'my-4'}
          linkAlign={linkAlign}
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </ListingContainer>
    </div>
  );
};

CardWithImageTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CardWithImageTemplate;
