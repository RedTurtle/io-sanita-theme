/**
 * ComeFarePerView view component.
 * @module components/theme/View/ComeFarePer
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import { ContentTypeViewSections } from 'io-sanita-theme/helpers';
import {
  PageHeader,
  SkipToMainContent,
  ContentImage,
  RelatedItems,
  useSideMenu,
  Topics,
  Metadata,
  Placeholder,
} from 'io-sanita-theme/components/View/commons';

import {
  ComeFarePerDescrizione,
  ComeFarePerAChiERivolto,
  ComeFarePerComeFare,
  ComeFarePerDocumenti,
  ComeFarePerUlterioriInformazioni,
} from 'io-sanita-theme/components/View/ComeFarePer';

export const ComeFarePerViewSectionsOrder = [
  { /* DESCRIZIONE ESTESA (Panoramica) */ component: ComeFarePerDescrizione },
  { /* A CHI E' RIVOLTO */ component: ComeFarePerAChiERivolto },
  { /* COME FARE */ component: ComeFarePerComeFare },
  { /* DOCUMENTI */ component: ComeFarePerDocumenti },
  { /* ULTERIORI INFORMAZIONI (e Parliamo di) */ component: ComeFarePerUlterioriInformazioni },
  { /* METADATA */ component: Metadata },
];

/**
 * ComeFarePerView view component class.
 * @function ComeFarePerView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const ComeFarePerView = ({ content, location }) => {
  let documentBody = createRef();
  const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

  return (
    <>
      <div className="container px-4 my-4 come-fare-per-view">
        <SkipToMainContent />
        <PageHeader content={content} showdates={true} />

        {/* HEADER IMAGE */}
        <ContentImage content={content} />

        <div className="row row-column-border border-light row-column-menu-left">
          <aside className="col-md-12 col-lg-4">
            {__CLIENT__ && (
              <SideMenu data={sideMenuElements} content_uid={content?.UID} />
            )}
          </aside>
          <section
            ref={documentBody}
            id="main-content-section"
            className="col-lg-8 it-page-sections-container border-light"
          >
            {/* SEZIONI */}
            <ContentTypeViewSections
              content={content}
              defaultSections={ComeFarePerViewSectionsOrder}
            />
          </section>
        </div>
      </div>
      <Placeholder position="afterContent" content={content} />
      <RelatedItems content={content} />
      <Placeholder position="afterRelatedItems" content={content} />
    </>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ComeFarePerView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
    image_caption: PropTypes.string,
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
    modified: PropTypes.string,
    related_news: PropTypes.array,
    tassonomia_argomenti: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default ComeFarePerView;