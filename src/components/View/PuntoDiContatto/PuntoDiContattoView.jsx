/**
 * Default view component.
 * @module components/theme/View/PuntoDiContatto
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import {
  PuntoDiContattoContatti,
  PuntoDiContattoCorrelati,
  //IncaricoPersone
} from 'io-sanita-theme/components/View/PuntoDiContatto';

import {
  PageHeader,
  SkipToMainContent,
  RelatedItems,
  Placeholder,
  useSideMenu,
  Metadata,
} from 'io-sanita-theme/components/View/commons';

import { ContentTypeViewSections } from 'io-sanita-theme/helpers';

export const PuntoDiContattoSectionsOrder = [
  { /* CONTATTI */ component: PuntoDiContattoContatti },
  // { /* INCARICO PERSONE */ component: PuntoDiContattoContatti },
  { /* CORRELATI */ component: PuntoDiContattoCorrelati },
  { /* METADATA */ component: Metadata },
];

/**
 * Component to display the default view.
 * @function DefaultView
 * @param {Object} content Content object.
 * @returns {string} Markup of the component.
 */
const PuntoDiContattoView = ({ content }) => {
  let documentBody = createRef();
  const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

  return (
    <>
      <div className="container px-4 my-4 servizio-view">
        <SkipToMainContent />
        <PageHeader
          content={content}
          showreadingtime={false}
          showdates={false}
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
              defaultSections={PuntoDiContattoSectionsOrder}
            />
          </section>
        </div>
      </div>
      <Placeholder position="afterContent" content={content} />
      <RelatedItems list={content?.relatedItems} />
      <Placeholder position="afterRelatedItems" content={content} />
    </>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
PuntoDiContattoView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    value_punto_contatto: PropTypes.arrayOf(
      PropTypes.shape({
        pdc_type: PropTypes.arrayOf(PropTypes.string),
        pdc_value: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default injectIntl(PuntoDiContattoView);
