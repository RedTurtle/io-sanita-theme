/**
 * BandoVies view component.
 * @module components/theme/View/BandoView
 */

 import React, { createRef } from 'react';
 import PropTypes from 'prop-types';
 import { ContentTypeViewSections } from 'io-sanita-theme/helpers';

 import {
   BandoDate,
   BandoCosE,
   BandoUlterioriInformazioni,
 } from 'io-sanita-theme/components/View/Bando';

 import {
  PageHeader,
  RelatedItems,
  SkipToMainContent,
  useSideMenu,
  Metadata,
} from 'io-sanita-theme/components/View/commons';

 export const BandoViewSectionsOrder = [
   { /* DATE  */ component: BandoDate },
   { /* COS'è  */ component: BandoCosE },
   { /* ULTERIORI INFORMAZIONI  */ component: BandoUlterioriInformazioni },
 ];
 /**
  * BandoView view component class.
  * @function BandoView
  * @params {object} content Content object.
  * @returns {string} Markup of the component.
  */
 const BandoView = ({ content, location }) => {
   let documentBody = createRef();
   const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

   return (
     <>
       <div className="container px-4 my-4 bando-view">
         <SkipToMainContent />
         <PageHeader
           content={content}
           readingtime={null}
           showreadingtime={false}
           showdates={false}
           showbandostate={true}
         />
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
               defaultSections={BandoViewSectionsOrder}
             />
           </section>
         </div>
       </div>
       <RelatedItems content={content} />
     </>
   );
 };
 /**
  * Property types.
  * @property {Object} propTypes Property types.
  * @static
  */
 BandoView.propTypes = {
   content: PropTypes.shape({
     title: PropTypes.string.isRequired,
     description: PropTypes.string,
     chiusura_procedimento_bando: PropTypes.string,
     scadenza_bando: PropTypes.string,
     scadenza_domande_bando: PropTypes.string,
     riferimenti_bando: PropTypes.shape({
       data: PropTypes.string,
     }),
     text: PropTypes.shape({
       data: PropTypes.string,
     }),
     ufficio_responsabile: PropTypes.arrayOf(
       PropTypes.shape({
         title: PropTypes.string,
         description: PropTypes.string,
       }),
     ),
     area_responsabile: PropTypes.arrayOf(
       PropTypes.shape({
         title: PropTypes.string,
         description: PropTypes.string,
       }),
     ),
     tipologia_bando: PropTypes.shape({
       title: PropTypes.string,
       token: PropTypes.string,
     }),
     tassonomia_argomenti: PropTypes.arrayOf(
       PropTypes.shape({
         title: PropTypes.string,
         token: PropTypes.string,
       }),
     ),
     servizi_correlati: PropTypes.shape({
       title: PropTypes.string,
       description: PropTypes.string,
     }),
     ente_bando: PropTypes.arrayOf(PropTypes.string),
     effective: PropTypes.string,
     expires: PropTypes.string,
     destinatari: PropTypes.arrayOf(
       PropTypes.shape({
         title: PropTypes.string,
         token: PropTypes.string,
       }),
     ),
   }).isRequired,
 };

 export default BandoView;
