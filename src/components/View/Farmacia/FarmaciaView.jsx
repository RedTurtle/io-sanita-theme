import {
  ContentImage,
  PageHeader,
  RelatedItems,
  SkipToMainContent,
  useSideMenu,
  Metadata,
} from 'io-sanita-theme/components/View/commons';
import { ContentTypeViewSections } from 'io-sanita-theme/helpers';
import PropTypes from 'prop-types';
import { createRef, useEffect } from 'react';
import {
  FarmaciaContatti,
  FarmaciaUlterioriInformazioni,
  FarmaciaTurni,
  FarmaciaFerie,
  FarmaciaDove,
} from 'io-sanita-theme/components/View/Farmacia';

export const FarmaciaViewSectionsOrder = [
  { /* MAPPA */ component: FarmaciaDove },
  { /* TURNI */ component: FarmaciaTurni },
  { /* FERIE */ component: FarmaciaFerie },
  { /* CONTATTI */ component: FarmaciaContatti },
  { /* ULTERIORI INFORMAZIONI */ component: FarmaciaUlterioriInformazioni },
  { /* METADATA */ component: Metadata },
];

/**
 * FarmaciaView view component class.
 * @function FarmaciaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const FarmaciaView = ({ content }) => {
  const documentBody = createRef();
  const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

  useEffect(() => {
    if (
      content.nome_alternativo &&
      !content.title?.includes(content.nome_alternativo)
    ) {
      content.subtitle = content.nome_alternativo;
    }
  });

  return (
    <>
      <div className="container px-4 my-4 farmacia-view">
        <SkipToMainContent />
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          showdates={false}
          showtassonomiaargomenti={true}
        />
        {/* HEADER IMAGE */}
        <ContentImage content={content} />

        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
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
              defaultSections={FarmaciaViewSectionsOrder}
            />
          </section>
        </div>
      </div>
      <RelatedItems
        list={[
          ...(content.relatedItems ?? []),
          ...(content.related_news ?? []),
        ]}
      />
      {/* TODO
      <RelatedItemInEvidence content={content} /> */}
    </>
  );
};
FarmaciaView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default FarmaciaView;
