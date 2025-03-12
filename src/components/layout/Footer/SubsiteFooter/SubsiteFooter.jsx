/**
 * SubsiteFooter component.
 * @module components/layout/Footer/SubsiteFooter
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { isCmsUi } from '@plone/volto/helpers/Url/Url';
import { flattenHTMLToAppURL } from '@plone/volto/helpers/Url/Url';
import { richTextHasContent } from 'io-sanita-theme/helpers';
import './subsite-footer.scss';

const SubsiteFooter = () => {
  const location = useLocation();
  const isCmsUI = isCmsUi(location.pathname);
  const subsite = useSelector((state) => state.subsite?.data);
  return richTextHasContent(subsite?.subsite_footer) ? (
    <div className={`subsite-footer ${isCmsUI ? 'public-ui' : ''}`}>
      <div className="text">
        <div className="container px-md-4">
          <div
            dangerouslySetInnerHTML={{
              __html: flattenHTMLToAppURL(subsite.subsite_footer.data),
            }}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default SubsiteFooter;
