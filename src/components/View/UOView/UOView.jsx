/**
 * UOView view component.
 * @module components/theme/View/UOView
 */

import React, { createRef } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import {
  UOContatti,
  UODocumenti,
  UOUlterioriInformazioni,
  UOPersonale,
  UOServizi,
  UODove,
  UOResponsabile,
  UOFaParteDi,
  UODateOrari,
  UOCompetenze,
  UOStrutture,
  UONotizie,
  UOUfficiInterni,
} from 'io-sanita-theme/components/View/UOView';

import { ContentTypeViewSections } from 'io-sanita-theme/helpers';

import {
  PageHeader,
  SkipToMainContent,
  ContentImage,
  RelatedItems,
  Placeholder,
  useSideMenu,
  Metadata,
  commonIntlMessages,
} from 'io-sanita-theme/components/View/commons';

export const UOViewSectionsOrder = [
  { /* COMPETENZE */ component: UOCompetenze },
  { /* DOVE - STRUTTURE */ component: UODove },
  { /* DATE E ORARI */ component: UODateOrari },
  { /* FA PARTE DI */ component: UOFaParteDi },
  { /* SERVIZI O UFFICI INTERNI*/ component: UOUfficiInterni },
  { /* RESPONSABILE */ component: UOResponsabile },
  { /* SERVIZI */ component: UOServizi },
  { /* STRUTTURE */ component: UOStrutture },
  { /* PERSONE */ component: UOPersonale },
  { /* CONTATTI */ component: UOContatti },
  { /* DOCUMENTI */ component: UODocumenti },
  { /* AVVISI E NOTIZIE */ component: UONotizie },
  { /* ULTERIORI INFORMAZIONI */ component: UOUlterioriInformazioni },
  { /* METADATA */ component: Metadata },
];

/**
 * UOView view component class.
 * @function UOView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const UOView = ({ content }) => {
  const intl = useIntl();
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
        />
        {/* HEADER IMAGE */}
        <ContentImage content={content} />

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
              defaultSections={UOViewSectionsOrder}
            />
          </section>
        </div>
      </div>
      <Placeholder position="afterContent" content={content} />
      <RelatedItems content={content} list={content?.related_news ?? []} />
      <Placeholder position="afterRelatedItems" content={content} />
    </>
  );
};

UOView.propTypes = {
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

export default UOView;
