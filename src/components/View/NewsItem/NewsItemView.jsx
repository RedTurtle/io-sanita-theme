/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import {
  ContentTypeViewSections,
  useReadingTime,
} from 'io-sanita-theme/helpers';
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
  //NewsItemDescrizione,
  NewsItemTesto,
  NewsItemDocumenti,
  NewsItemGallery,
  NewsItemPersone,
  NewsItemStrutture,
  NewsItemServiziEPrestazioni,
  NewsItemACuraDi,
  NewsItemNotizieCorrelate,
  NewsItemUlterioriInformazioni,
} from 'io-sanita-theme/components/View/NewsItem';

export const NewsItemViewSectionsOrder = [
  { /* TESTO COMPLETO */ component: NewsItemTesto },
  { /* DOCUMENTI */ component: NewsItemDocumenti },
  { /* GALLERY */ component: NewsItemGallery },
  { /* RELAZIONE CON LE PERSONE */ component: NewsItemPersone },
  { /* RELAZIONE CON LE STRUTTURE */ component: NewsItemStrutture },
  {
    /* RELAZIONE CON SERVIZI E PRESTAZIONI */ component:
      NewsItemServiziEPrestazioni,
  },
  { /* A CURA DI */ component: NewsItemACuraDi },
  { /* NOTIZIE CORRELATE */ component: NewsItemNotizieCorrelate },
  {
    /* ULTERIORI INFORMAZIONI - PARLIAMO DI */ component:
      NewsItemUlterioriInformazioni,
  },
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
  const { readingtime } = useReadingTime(content, documentBody);

  let related_items = [];
  if (content?.relatedItems?.length > 0) {
    related_items = [...related_items, ...content.relatedItems];
  }

  return (
    <>
      <div className="container px-4 my-4 newsitem-view">
        <SkipToMainContent />
        <PageHeader
          content={content}
          readingtime={readingtime}
          showreadingtime={true}
          showdates={true}
        />

        {/* HEADER IMAGE */}
        <ContentImage content={content} />
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

      <Placeholder position="afterContent" content={content} />
      <RelatedItems list={related_items} />
      <Placeholder position="afterRelatedItems" content={content} />
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
    uo_correlata: PropTypes.array.isRequired,
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
