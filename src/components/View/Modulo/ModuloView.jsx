/**
 * ModuloView view component.
 * @module components/theme/View/ModuloView
 */

import React from 'react';
import { ContentTypeViewSections } from 'io-sanita-theme/helpers';
import {
  PageHeader,
  RelatedItems,
  Metadata,
  Placeholder,
} from 'io-sanita-theme/components/View/commons';

import {
  ModuloFiles,
  ModuloText,
} from 'io-sanita-theme/components/View/Modulo';

export const ModuloViewSectionsOrder = [
  { /* FILES */ component: ModuloFiles },
  { /* TESTO */ component: ModuloText },
];

/**
 * ModuloView view component class.
 * @function ModuloView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const ModuloView = ({ content }) => {
  return (
    <>
      <div className="container px-4 my-4 modulo-view">
        <PageHeader content={content} />

        {/* SEZIONI */}
        <ContentTypeViewSections
          content={content}
          defaultSections={ModuloViewSectionsOrder}
        />
      </div>

      <Placeholder position="afterContent" content={content} />

      <RelatedItems content={content} />

      <Placeholder position="afterRelatedItems" content={content} />
    </>
  );
};

export default ModuloView;
