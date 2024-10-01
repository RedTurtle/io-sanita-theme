/**
 * FaqView view component.
 * @module components/theme/View/FaqView/FaqView
 */

import React from 'react';

import {
  PageHeader,
  SkipToMainContent,
  RelatedItems,
  Metadata,
  Placeholder,
} from 'io-sanita-theme/components/View/commons';

import { TextOrBlocks } from 'io-sanita-theme/helpers';

/**
 * FaqView view component class.
 * @function FaqView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const FaqView = ({ content }) => {
  return (
    <div id="page-document">
      <div className="ui container px-4">
        <SkipToMainContent />
        <PageHeader
          content={content}
          showdates={true}
          showtassonomiaargomenti={true}
        />
        <TextOrBlocks content={content} />

        <Metadata content={content} showDates={true} className="my-4" />
      </div>

      <Placeholder position="afterContent" content={content} />
      <RelatedItems content={content} />
      <Placeholder position="afterRelatedItems" content={content} />
    </div>
  );
};

export default FaqView;
