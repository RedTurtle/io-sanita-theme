/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
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
  Metadata,
  RelatedItemInEvidence,
  //useReadingTime,
} from 'io-sanita-theme/components/View/commons';

import {
  //NewsItemDescrizione,
  NewsItemTesto,
  NewsItemDocumenti,
  NewsItemGallery,
  NewsItemPersone,
  NewsItemStrutture,
  NewsItemServiziEPrestazioni,
  NewsItemACuraDi,
  NewsItemNotizieCorrelate,
  NewsItemUlterioriInformazioni
} from 'io-sanita-theme/components/View/Evento';

 export const NewsItemViewSectionsOrder = [
   {
     /* HEADER IMAGE */
     component: ContentImage,
     props: { position: 'documentBody' },
   },
   //{ /* TIPOLOGIA NOTIZIA */ component: NewsItemText }, /* TO DO: da capire se va aggiunto nell'header come tassonomia */
   //{ /* DESCRIZIONE BREVE */ component: NewsItemDescrizione },
   //{ /* DATE */ component: NewsItemText }, /* DATA DI PUBBLICAZIONE E SCADENZA DELLA NOTIZIA */ TO DO: capire se basta visualizzarlo nell'header
   // { /* NUMERO PROGRESSIVO COMUNICATO STAMPA */ component: NewsItemText }, -> TO DO: dice che viene visualizzato nell'hero */
   { /* TESTO COMPLETO */ component: NewsItemTesto },
   { /* DOCUMENTI */ component: NewsItemDocumenti },
   { /* GALLERY */ component: NewsItemGallery },
  //  { /* RELAZIONE CON LE PERSONE */ component: NewsItemPersone },
  //  { /* RELAZIONE CON LE STRUTTURE */ component: NewsItemStrutture },
  //  { /* RELAZIONE CON SERVIZI E PRESTAZIONI */ component: NewsItemServiziEPrestazioni },
   { /* A CURA DI */ component: NewsItemACuraDi },
  // { /* NOTIZIE CORRELATE */ component: NewsItemNotizieCorrelate }, // TO DO: forse ci basta il RelatedItems
   { /* ULTERIORI INFORMAZIONI - PARLIAMO DI */ component: NewsItemUlterioriInformazioni }, //TO DO: CHIPS ARGOMENTI E UTENTI
   { /* METADATA */ component: Metadata },
 ];

 /**
  * NewsItemView view component class.
  * @function NewsItemView
  * @params {object} content Content object.
  * @returns {string} Markup of the component.
  */
 const NewsItemView = ({ content, location }) => {
   let documentBody = createRef();
   const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);
   //const { readingtime } = useReadingTime(content, documentBody);

   let related_items = [];
   if (content?.notizie_correlate?.length > 0) {
     related_items = [...related_items, ...content.notizie_correlate];
   }
   if (content?.relatedItems?.length > 0) {
     related_items = [...related_items, ...content.relatedItems];
   }

   return (
     <>
       <div className="container px-4 my-4 newsitem-view">
         <SkipToMainContent />
         <PageHeader
           content={content}
          //  readingtime={readingtime}
          //  showreadingtime={true}
          // TO DO: forse qua a aggiunto il numero progressivo
           showdates={true}
           showtassonomiaargomenti={true}
         />

         {/* HEADER IMAGE */}
         <ContentImage content={content} position="afterHeader" />
         <div className="row row-column-border border-light row-column-menu-left">
          <aside className="col-md-12 col-lg-4">
            {__CLIENT__ && (
              <SideMenu data={sideMenuElements} content_uid={content?.UID} />
            )}
          </aside>
           <section
             className="col-lg-8 it-page-sections-container border-light"
             id="main-content-section"
             ref={documentBody}
           >
             {/* SEZIONI */}
             <ContentTypeViewSections
               content={content}
               defaultSections={NewsItemViewSectionsOrder}
             />
           </section>
         </div>
       </div>
       {/* <NewsItemPlaceholderAfterContent content={content} /> */}
       <RelatedItems list={related_items} />
       <RelatedItemInEvidence content={content} />
       {/* <NewsItemPlaceholderAfterRelatedItems content={content} /> */}
     </>
   );
 };

 /**
  * Property types.
  * @property {Object} propTypes Property types.
  * @static
  */
 NewsItemView.propTypes = {
   content: PropTypes.shape({
     title: PropTypes.string.isRequired,
     subtitle: PropTypes.string,
     description: PropTypes.string,
     effective: PropTypes.string,
     expires: PropTypes.string,
     image: PropTypes.object,
     image_caption: PropTypes.string,
     text: PropTypes.shape({
       data: PropTypes.string,
     }),
     items: PropTypes.array,
     a_cura_di: PropTypes.array.isRequired,
     a_cura_di_persone: PropTypes.array,
     dataset: PropTypes.shape({
       data: PropTypes.string,
     }),
     modified: PropTypes.string,
     rights: PropTypes.string,
     luoghi_correlati: PropTypes.array,
     related_news: PropTypes.array,
     tassonomia_argomenti: PropTypes.arrayOf(
       PropTypes.shape({
         title: PropTypes.string,
         token: PropTypes.string,
       }),
     ),
     tipologia_notizia: PropTypes.shape({
       title: PropTypes.string,
       token: PropTypes.string,
     }).isRequired,
   }).isRequired,
 };

 export default NewsItemView;
