/**
 * UOView view component.
 * @module components/theme/View/UOView
 */

import React, { createRef } from 'react';

import PropTypes from 'prop-types';
import {
  UOContatti,
  UODocumenti,
  UOUlterioriInformazioni,
  UOPeople,
  UOServices,
  UOStructure,
  UODove,
  UOFaParteDi,
  UODateOrari,
  UOCompetenze,
} from 'io-sanita-theme/components/View/UOView';

import { ContentTypeViewSections } from 'io-sanita-theme/helpers';

import {
  PageHeader,
  SkipToMainContent,
  ContentImage,
  RelatedItems,
  useSideMenu,
  Metadata,
} from 'io-sanita-theme/components/View/commons';

export const UOViewSectionsOrder = [
  { /* COMPETENZE */ component: UOCompetenze },
  { /* DOVE */ component: UODove },
  { /* DATE E ORARI */ component: UODateOrari },
  { /* FA PARTE DI */ component: UOFaParteDi },
  { /* STRUTTURA */ component: UOStructure },
  { /* PERSONE */ component: UOPeople },
  { /* SERVIZI */ component: UOServices },
  { /* CONTATTI */ component: UOContatti },
  { /* DOCUMENTI */ component: UODocumenti },
  { /* ULTERIORI INFORMAZIONI */ component: UOUlterioriInformazioni },
];

/**
 * UOView view component class.
 * @function UOView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const UOView = ({ content }) => {
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
              defaultSections={UOViewSectionsOrder}
            />
          </section>
        </div>
      </div>
      <RelatedItems content={content} list={content?.related_news ?? []} />
    </>
  );
};

UOView.propTypes = {
  content: PropTypes.shape({
    assessore_riferimento: PropTypes.array,
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
    legami_con_altre_strutture: PropTypes.array,
    related_news: PropTypes.array,
    persone_struttura: PropTypes.array,
    responsabile: PropTypes.array,
    sedi: PropTypes.array,
    contact_info: PropTypes.array,
    servizi_offerti: PropTypes.array,
    tassonomia_argomenti: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
    tipologia_organizzazione: PropTypes.shape({
      title: PropTypes.string,
      token: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
  }),
};

export default UOView;
