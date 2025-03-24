/* Variation Card Allegati of Listing block */
import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from '@plone/volto/components/manage/ConditionalLink/ConditionalLink';
import { Row, Col } from 'design-react-kit';
import { ListingContainer } from 'io-sanita-theme/components/Blocks';
import { LinkMore } from 'io-sanita-theme/components';
import { CardFile } from 'io-sanita-theme/components';

import AttachmentCardTemplateSkeleton from '../Skeletons/AttachmentCardTemplateSkeleton';

const AttachmentCardTemplate = (props) => {
  const {
    items,
    title,
    isEditMode,
    linkAlign,
    linkTitle,
    linkHref,
    show_block_bg,
    show_pdf_preview,
    linkmore_id_lighthouse,
  } = props;
  return (
    <div className="attachment-card-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        {items.length > 0 && (
          <Row className="attachments">
            {items.map((item, _i) => (
              <Col lg={4} className="py-lg-2" key={item['@id']}>
                <CardFile item={item} showPDFPreview={show_pdf_preview} />
              </Col>
            ))}
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

AttachmentCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default AttachmentCardTemplate;
