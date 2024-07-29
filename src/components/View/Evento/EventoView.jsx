/**
 * EventoView view component.
 * @module components/theme/View/Evento
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
  Placeholder,
} from 'io-sanita-theme/components/View/commons';

import {
  EventoCosE,
  EventoPartecipanti,
  EventoAChiSiRivolge,
  EventoUlterioriInformazioni,
  EventoDateOrari,
  EventoCosti,
  EventoLuoghi,
  EventoSponsors,
  EventoFaParteDi,
  EventoAppuntamenti,
  EventoDocumenti,
  EventoContatti,
  EventoOrganizzatoDa,
} from 'io-sanita-theme/components/View/Evento';

export const EventoViewSectionsOrder = [
  { /* COS'è */ component: EventoCosE },
  { /* CHI PARTECIPA */ component: EventoPartecipanti },
  { /* EVENTS */ component: EventoFaParteDi },
  { /* LUOGHI */ component: EventoLuoghi },
  { /* DATE E ORARI */ component: EventoDateOrari },
  { /* COSTI */ component: EventoCosti },
  { /* DOCUMENTI */ component: EventoDocumenti },
  { /* CONTATTI */ component: EventoContatti },
  { /* ORGANIZZATO DA */ component: EventoOrganizzatoDa },
  { /* EVENTS */ component: EventoAppuntamenti },
  { /* SPONSORS */ component: EventoSponsors },
  { /* ULTERIORI INFORMAZIONI */ component: EventoUlterioriInformazioni },
  // { /* EVENTI CORRELATI */ component: EventoEventiCorrelati },
  { /* METADATA */ component: Metadata },
];

/**
 * EventoView view component class.
 * @function EventoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const EventoView = ({ content, location }) => {
  let documentBody = createRef();
  const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

  return (
    <>
      <div className="container px-4 my-4 evento-view">
        <SkipToMainContent />
        <PageHeader content={content} showdates={true} />

        {/* HEADER IMAGE */}
        <ContentImage content={content} position={"afterHeader"} />

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
              defaultSections={EventoViewSectionsOrder}
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
EventoView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    effective: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    patrocinato_da: PropTypes.shape({
      'content-type': PropTypes.string,
      data: PropTypes.string,
      encoding: PropTypes.string,
    }),
    image: PropTypes.object,
    image_caption: PropTypes.string,
    orari: PropTypes.shape({
      data: PropTypes.string,
    }),
    prezzo: PropTypes.shape({
      data: PropTypes.string,
    }),
    organizzato_da_esterno: PropTypes.shape({
      data: PropTypes.string,
    }),

    descrizione_destinatari: PropTypes.shape({
      data: PropTypes.string,
    }),

    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
    sponsor: PropTypes.shape({
      data: PropTypes.string,
    }),
    items: PropTypes.array,
    strutture_politiche: PropTypes.array,
    supportato_da: PropTypes.array,
    organizzato_da_interno: PropTypes.array,
    persone_amministrazione: PropTypes.array,
    modified: PropTypes.string,
    luoghi_evento: PropTypes.array,
    related_news: PropTypes.array,
    parliamo_di_metadata: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default EventoView;
