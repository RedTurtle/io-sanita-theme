/*
 * Blocco link solo immagini
 */
import PropTypes from 'prop-types';
import { Row, Col } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';

import {
  ListingImage,
  ListingContainer,
} from 'io-sanita-theme/components/Blocks';
import { LinkMore } from 'io-sanita-theme/components';

import './smallblockLinksTemplate.scss';

const SmallBlockLinksTemplate = (props) => {
  const {
    items,
    isEditMode,
    linkAlign,
    linkTitle,
    linkHref,
    linkmore_id_lighthouse,
    override_links_accessibility_marker,
  } = props;

  return (
    <div className="small-block-links">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <Row className="items">
          {items.map((item, index) => {
            const image = ListingImage({
              item,
              sizes: '(max-width:575px) 520px, 200px',
              style: {},
              alt: item.title,
              noWrapLink: true,
            });

            return (
              <Col
                md="3"
                key={item['@id']}
                className="col-item col-sm-4 col-lg-2"
              >
                {image && (
                  <div className="center-image-card">
                    <UniversalLink
                      item={!isEditMode ? item : null}
                      href={isEditMode ? '#' : ''}
                      className="img-link"
                      overrideMarkSpecialLinks={
                        override_links_accessibility_marker
                      }
                    >
                      {image}
                    </UniversalLink>
                  </div>
                )}
              </Col>
            );
          })}
        </Row>
        <LinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </ListingContainer>
    </div>
  );
};

SmallBlockLinksTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SmallBlockLinksTemplate;
