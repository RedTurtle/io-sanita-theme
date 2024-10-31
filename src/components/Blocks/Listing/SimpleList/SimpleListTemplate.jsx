/* Variation Lista Semplice of Listing block */
import React from 'react';
import PropTypes from 'prop-types';
import { ConditionalLink } from '@plone/volto/components';
import { Row, Col } from 'design-react-kit';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';
import { LinkMore } from 'io-sanita-theme/components';

import './simpleListTemplate.scss';

import SimpleListTemplateSkeleton from '../Skeletons/SimpleListTemplateSkeleton';
import CardWithImageTemplateSkeleton from '../Skeletons/CardWithImageTemplateSkeleton';

const SimpleListTemplate = (props) => {
  const {
    items,
    title,
    isEditMode,
    linkAlign,
    linkTitle,
    linkHref,
    show_block_bg,
    show_pointer_list,
    titleLine,
    linkmore_id_lighthouse,
  } = props;
  return (
    <div className="simple-list-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        {items.length > 0 && (
          <Row>
            <Col>
              <ul className={show_pointer_list ? 'decoration-pointer' : ''}>
                {items.map((item, index) => {
                  return (
                    <li key={index}>
                      <ConditionalLink condition={!isEditMode} item={item}>
                        {item.title}
                      </ConditionalLink>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        )}
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

SimpleListTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SimpleListTemplate;
