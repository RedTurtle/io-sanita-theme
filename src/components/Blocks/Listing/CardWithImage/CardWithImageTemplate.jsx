/*
 * componente per visulizzare i risultati del blocco Listing con il template 'Card con immagine'
 */
import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'design-react-kit';
import { ListingLinkMore } from 'io-sanita-theme/components/Blocks';

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
      <Container className={!show_block_bg || isEditMode ? 'px-0' : 'px-4'}>
        <Row className="mb-3">
          {items.map((item, index) => {
            const layoutSelected = set_four_columns ? '3' : '4';

            return (
              <Col
                md={6}
                xl={layoutSelected}
                lg={item['@type'] === 'Persona' ? 6 : layoutSelected}
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
          className="my-4"
          linkAlign={linkAlign}
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
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
