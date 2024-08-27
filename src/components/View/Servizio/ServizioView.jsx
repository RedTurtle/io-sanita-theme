/**
 * ServizioView component.
 * @module components/theme/View/Servizio
 */

 import React, { createRef } from 'react';
 import PropTypes from 'prop-types';
 import {
   ServizioCosE,
   ServizioCosaServe,
   ServizioAccediAlServizio,
   ServizioTempiDiAttesa,
   ServizioCosti,
   ServizioDove,
   ServizioOrari,
   ServizioContatti,
   ServizioAChiSiRivolge,
   ServizioProcedureCollegate,
   ServizioUOResponsabile,
   ServizioResponsabile,
   ServizioServiziCorrelati,
   ServizioUlterioriInformazioni,
   ServizioDocumenti
 } from 'io-sanita-theme/components/View/Servizio';

 import { ContentTypeViewSections } from 'io-sanita-theme/helpers';

 import {
   PageHeader,
   SkipToMainContent,
   ContentImage,
   RelatedItems,
   useSideMenu,
   Metadata,
 } from 'io-sanita-theme/components/View/commons';

 export const ServizioSectionsOrder = [
   { /* COSA SERVE */ component: ServizioCosaServe },
   { /* ACCEDI AL SERVIZIO */ component: ServizioAccediAlServizio },
   { /* TEMPI DI ATTESA */ component: ServizioTempiDiAttesa },
   { /* COSTI */ component: ServizioCosti },
   { /* DOVE */ component: ServizioDove },
   { /* ORARI */ component: ServizioOrari },
   { /* CONTATTI */ component: ServizioContatti },
   { /* COS'è */ component: ServizioCosE },
   { /* A CHI SI RIVOLGE */ component: ServizioAChiSiRivolge },
   { /* PROCEDURE COLLEGATE */ component: ServizioProcedureCollegate },
   { /* UO RESPONSABILE */ component: ServizioUOResponsabile },
   { /* RESPONSABILE DEL SERVIZIO */ component: ServizioResponsabile },
   { /* DOCUMENTI */ component: ServizioDocumenti },
   { /* SERVIZI E PRESTAZIONI CORRELATI */ component: ServizioServiziCorrelati },
   { /* ULTERIORI INFO */ component: ServizioUlterioriInformazioni },
   { /* METADATA */ component: Metadata },
 ];

 /**
 * Servizio view component class.
 * @function Servizio
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
 const ServizioView = ({ content }) => {
   let documentBody = createRef();
   const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

   return (
     <>
       <div className="container px-4 my-4 servizio-view">
         <SkipToMainContent />
         <PageHeader
           content={content}
           readingtime={null}
           showreadingtime={false}
           showdates={false}
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
               defaultSections={ServizioSectionsOrder}
             />
           </section>
         </div>
       </div>
       <RelatedItems content={content} list={content?.related_news ?? []} />
     </>
   );
 };

 ServizioView.propTypes = {
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

 export default ServizioView;
