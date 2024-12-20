import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { Row, Col } from 'design-react-kit';
import {
  RichTextSection,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';
import { CardFile } from 'io-sanita-theme/components';

import PropTypes from 'prop-types';

const messages = defineMessages({
  attachments: {
    id: 'attachments',
    defaultMessage: 'Allegati',
  },
});

/**
 * Attachments view component class.
 * @function Attachments
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const Attachments = ({
  content,
  folder_name,
  items,
  title,
  as_section = true,
  article_id = folder_name,
}) => {
  const intl = useIntl();
  const url = content
    ? `${flattenToAppURL(content['@id'])}/${folder_name}`
    : null;
  const key = folder_name + url;
  const searchResults = useSelector((state) => state.search.subrequests);
  const dispatch = useDispatch();

  const hasChildren = folder_name
    ? contentFolderHasItems(content, folder_name)
    : items?.length > 0;

  useEffect(() => {
    if (folder_name && hasChildren) {
      dispatch(
        searchContent(
          url,
          {
            'path.depth': 1,
            sort_on: 'getObjPositionInParent',
            fullobjects: 1,
            // the default maximum b_size allowed in redturtle.volto is 500
            b_size: 499,
          },
          key,
        ),
      );

      return () => {
        dispatch(resetSearchContent(key));
      };
    }
    // eslint-disable-next-line
  }, [key]);

  const attachments = searchResults?.[key]?.items || items || [];

  const attachments_view = (
    <Row className="attachments">
      {attachments.map((item, _i) => (
        <Col lg={6} className="py-lg-2" key={item['@id']}>
          <CardFile item={item} />
        </Col>
      ))}
    </Row>
  );

  return !hasChildren ? null : as_section ? (
    <RichTextSection
      tag_id={article_id}
      className="it-page-section mb-5"
      title={title ? title : intl.formatMessage(messages.attachments)}
    >
      {attachments.length > 0 && attachments_view}
      {/** aggiunte conditions per attendere il render del componente mentre
       * i risultati della query stanno ancora caricando
       */}
      {searchResults?.[key]?.loading && !searchResults?.[key]?.loaded && <></>}
    </RichTextSection>
  ) : (
    <div className="mb-5 mt-3">
      {title && <h4 className="h5">{title}</h4>}
      {attachments.length > 0 && attachments_view}
      {searchResults?.[key]?.loading && !searchResults?.[key]?.loaded && <></>}
    </div>
  );
};
Attachments.propTypes = {
  content: PropTypes.object,
  folder_name: PropTypes.string,
  title: PropTypes.string,
};
export default Attachments;
