/**
 * StrutturaView component.
 * @module components/theme/View/Struttura
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import {
  StrutturaCosE,
  StrutturaAChiERivolto,
  StrutturaDove,
  StrutturaComeAccedere,
  StrutturaDateOrari,
  StrutturaContatti,
  StrutturaServizi,
  StrutturaResponsabile,
  StrutturaPersonale,
  StrutturaGalleria,
  StrutturaUfficiCorrelati,
  StrutturaStruttureCorrelate,
  StrutturaUlterioriInformazioni,
} from 'io-sanita-theme/components/View/Struttura';

import { ContentTypeViewSections } from 'io-sanita-theme/helpers';

import {
  PageHeader,
  SkipToMainContent,
  ContentImage,
  RelatedItems,
  useSideMenu,
  Metadata,
} from 'io-sanita-theme/components/View/commons';

export const StrutturaSectionsOrder = [
  { /* COS'è */ component: StrutturaCosE },
  { /* A CHI è RIVOLTO */ component: StrutturaAChiERivolto },
  { /* DOVE */ component: StrutturaDove },
  { /* COME ACCEDERE */ component: StrutturaComeAccedere },
  { /* DATE E ORARI */ component: StrutturaDateOrari },
  { /* CONTATTI */ component: StrutturaContatti },
  { /* SERVIZI */ component: StrutturaServizi },
  { /* RESPONSABILE */ component: StrutturaResponsabile },
  { /* PERSONALE */ component: StrutturaPersonale },
  { /* GALLERIA */ component: StrutturaGalleria },
  { /* UFFICIO DI APPARTENENZA */ component: StrutturaUfficiCorrelati },
  { /* STRUTTURE CORRELATE */ component: StrutturaStruttureCorrelate },
  { /* ULTERIORI INFORMAZIONI */ component: StrutturaUlterioriInformazioni },
  { /* METADATA */ component: Metadata },
];

/**
* Struttura view component class.
* @function Struttura
* @params {object} content Content object.
* @returns {string} Markup of the component.
*/
const StrutturaView = ({ content }) => {
  let documentBody = createRef();
  const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

  return (
    <>
      <div className="container px-4 my-4 uo-view">
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
              defaultSections={StrutturaSectionsOrder}
            />
          </section>
        </div>
      </div>
      <RelatedItems content={content} list={content?.related_news ?? []} />
    </>
  );
};

StrutturaView.propTypes = {
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
    relatedItems: PropTypes.array,
    title: PropTypes.string.isRequired,
  }),
};

export default StrutturaView;
