/**
 * BandoVies view component.
 * @module components/theme/View/BandoView
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { ContentTypeViewSections } from 'io-sanita-theme/helpers';

import {
  BandoCosE,
  BandoAChiSiRivolge,
  BandoDate,
  BandoComePartecipare,
  BandoModalitaSelezione,
  BandoAllegati,
  BandoServizi,
  BandoUlterioriInformazioni,
  BandoMetadata,
} from 'io-sanita-theme/components/View/Bando';

import {
  PageHeader,
  RelatedItems,
  SkipToMainContent,
  useSideMenu,
} from 'io-sanita-theme/components/View/commons';

import './bando.scss';

export const BandoViewSectionsOrder = [
  { /* COS'è  + tipologia + ente */ component: BandoCosE },
  { /* A CHI SI RIVOLGE */ component: BandoAChiSiRivolge },
  { /* DATE  */ component: BandoDate },
  { /* COME PARTECIPARE */ component: BandoComePartecipare },
  { /* MODALITA DI SELEZIONE */ component: BandoModalitaSelezione },
  {
    /* GRADUATORIA ,ADEMPIMENTI CONSEQUENZIALI, ALTRI ALLEGATI, altre cartelle approfondimento*/ component:
      BandoAllegati,
  },

  { /* SERVIZI */ component: BandoServizi }, //potrebbe non servire. E' stato preso da io-comune per retrocompatibilità ma agid-ausl non dice che serve
  { /* ULTERIORI INFORMAZIONI  */ component: BandoUlterioriInformazioni },

  { /* METADATA */ component: BandoMetadata },
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
