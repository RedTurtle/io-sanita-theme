/*
 * In evidenza: serve a mettere in evidenza uno o piu contenuti. Il primo contenuto ha rilevanza maggiore, infatti occupa l'intero spazio orizzontale e vengono mostrate piu informazioni nella card.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Row, Col, CardReadMore } from 'design-react-kit';

import {
  CardPersona,
  CardFeatured,
  LinkMore,
} from 'io-sanita-theme/components';
import { getComponentWithFallback } from 'io-sanita-theme/helpers';
import {
  ListingText,
  ListingContainer,
  RassegnaInfo,
} from 'io-sanita-theme/components/Blocks';

import './inEvidence.scss';

const InEvidenceTemplate = (props) => {
  const {
    items,
    isEditMode,
    show_block_bg,
    show_description = true,
    show_category = true,
    id_lighthouse,
    hide_dates,
    linkAlign,
    linkTitle,
    linkHref,
    linkmore_id_lighthouse,
  } = props;

  return (
    <div className="in-evidence">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <div className="in-evidence-cards-wrapper mb-4">
          <Row>
            {items.map((item, index) => {
              const listingText = show_description ? (
                <ListingText item={item} />
              ) : null;

              const isEventAppointment =
                item?.parent?.['@type'] === 'Event' &&
                item?.['@type'] === 'Event';

              const BlockExtraTags = getComponentWithFallback({
                name: 'BlockExtraTags',
                dependencies: ['InEvidenceTemplate', item['@type']],
              }).component;

              return (
                <Col lg={index > 0 ? 6 : 12} key={index}>
                  {item['@type'] === 'Persona' ? (
                    <CardPersona
                      item={item}
                      className="listing-item"
                      size={show_description ? 'big' : 'small'}
                      isEditMode={isEditMode}
                      titleDataElement={id_lighthouse}
                      showCategory={show_category}
                    />
                  ) : (
                    <>
                      <CardFeatured
                        item={item}
                        size={index > 0 ? 'small' : 'large'}
                        titleDataElement={id_lighthouse}
                        isEditMode={isEditMode}
                        className={cx('listing-item', {
                          'rassegna-appointment': isEventAppointment,
                        })}
                        showDates={!hide_dates}
                        showCategory={show_category}
                        otherChildren={{
                          afterTitle: isEventAppointment && (
                            <RassegnaInfo eventoPadre={item.parent} />
                          ),
                          afterText: (
                            <>
                              <BlockExtraTags
                                {...props}
                                item={item}
                                itemIndex={index}
                              />
                            </>
                          ),
                        }}
                        text={listingText}
                        showDescription={show_description}
                      />
                    </>
                  )}
                </Col>
              );
            })}
          </Row>
        </div>
        <LinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className={show_block_bg ? 'mt-4' : 'my-4'}
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </ListingContainer>
    </div>
  );
};

InEvidenceTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default InEvidenceTemplate;
