/**
 * UOView view component.
 * @module components/theme/View/DocumentoView
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { ContentTypeViewSections } from 'io-sanita-theme/helpers';
import {
  PageHeader,
  SkipToMainContent,
  ContentImage,
  useSideMenu,
  Metadata,
} from 'io-sanita-theme/components/View/commons';

import {
  DocumentoCosE,
  DocumentoAChiERivolto,
  DocumentoDocumenti,
  DocumentoServiziProcedure,
  DocumentoResponsabile,
  DocumentoAutori,
} from 'io-sanita-theme/components/View/Documento';

export const DocumentoViewSectionsOrder = [
  { /* COS'è */ component: DocumentoCosE },
  { /* DOCUMENTI */ component: DocumentoDocumenti },
  { /* SERVIZI E PROCEDURE */ component: DocumentoServiziProcedure },
  { /* RESPONSABILE */ component: DocumentoResponsabile },
  { /* AUTORI */ component: DocumentoAutori },
  { /* A CHI SI RIVOLGE */ component: DocumentoAChiERivolto },
  { /* METADATA */ component: Metadata },
];

/**
* DocumentoView view component class.
* @function DocumentoView
* @params {object} content Content object.
* @returns {string} Markup of the component.
*/
const DocumentoView = ({ content }) => {
  let documentBody = createRef();
  const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

  return (
    <>
      <div className="container px-4 my-4 documento-view">
        <SkipToMainContent />
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          showdates={false}
          showtassonomiaargomenti={true}
        />
      {/* HEADER IMAGE */}
      <ContentImage content={content}   />

        <div className="row row-column-border border-light row-column-menu-left">
          <aside className="col-lg-4">
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
              defaultSections={DocumentoViewSectionsOrder}
            />
          </section>
        </div>
      </div>
    </>
  );
};

DocumentoView.propTypes = {
  content: PropTypes.shape({
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
    competenze: PropTypes.shape({
      data: PropTypes.string,
    }),
    description: PropTypes.string,
    geolocation: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    immagine: PropTypes.shape({
      download: PropTypes.string,
    }),
    struttura_correlata: PropTypes.array,
    personale_correlato: PropTypes.array,
    responsabile_correlato: PropTypes.array,
    pdc_correlato: PropTypes.array,
    servizi: PropTypes.array,
    title: PropTypes.string.isRequired,
  }),
};

export default DocumentoView;
