/**
 * UOView view component.
 * @module components/theme/View/PersonaView
 */

import React, { createRef } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import {
  PersonaIncarichi,
  PersonaCompetenze,
  PersonaUOAppartenenza,
  PersonaDove,
  PersonaOrariRicevimento,
  PersonaContatti,
  PersonaStrutture,
  PersonaBiografia,
  PersonaDocumenti,
  PersonaGalleria,
  PersonaUlterioriInformazioni,
  PersonaSchemaOrg,
} from 'io-sanita-theme/components/View/Persona';

import { ContentTypeViewSections } from 'io-sanita-theme/helpers';

import {
  PageHeader,
  SkipToMainContent,
  useSideMenu,
  Metadata,
  RelatedItems,
  Placeholder,
  commonIntlMessages,
} from 'io-sanita-theme/components/View/commons';

export const PersonaViewSectionsOrder = [
  { /* SCHEMA.ORG */ component: PersonaSchemaOrg },
  { /* INCARICHI */ component: PersonaIncarichi },
  { /* COMPETENZE */ component: PersonaCompetenze },
  { /* UO DI APPARTENENZA */ component: PersonaUOAppartenenza },
  { /* DOVE */ component: PersonaDove },
  { /* ORARI */ component: PersonaOrariRicevimento },
  { /* CONTATTI */ component: PersonaContatti },
  { /* STRUTTURE IN CUI OPERA */ component: PersonaStrutture },
  { /* BIOGRAFIA */ component: PersonaBiografia },
  { /* GALLERIA */ component: PersonaGalleria },
  { /* DOCUMENTI */ component: PersonaDocumenti },
  { /* ULTERIORI INFORMAZIONI */ component: PersonaUlterioriInformazioni },
  { /* METADATA */ component: Metadata },
];

/**
 * PersonaView view component class.
 * @function PersonaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const PersonaView = ({ content }) => {
  const intl = useIntl();
  let documentBody = createRef();
  const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

  return (
    <>
      <div className="container px-4 my-4 persona-view">
        <SkipToMainContent />
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          showdates={false}
          foto={true}
        />

        <div className="row row-column-border border-light row-column-menu-left">
          <aside
            className="col-lg-4"
            aria-label={intl.formatMessage(commonIntlMessages.sideMenuIndex)}
          >
            {__CLIENT__ && (
              <SideMenu data={sideMenuElements} content_uid={content?.UID} />
            )}
          </aside>
          <section
            ref={documentBody}
            id="main-content-section"
            className="col-lg-8 it-page-sections-container border-light"
            role="region"
            aria-label={intl.formatMessage(commonIntlMessages.pageContent)}
          >
            {/* SEZIONI */}
            <ContentTypeViewSections
              content={content}
              defaultSections={PersonaViewSectionsOrder}
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

PersonaView.propTypes = {
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

export default PersonaView;
