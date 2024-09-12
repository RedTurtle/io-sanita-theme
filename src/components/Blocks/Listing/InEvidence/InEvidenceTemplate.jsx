/*
 * In evidenza
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Container, Row, Col } from 'design-react-kit';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import {
  getCalendarDate,
  getEventRecurrenceMore,
  getItemListingCategory,
} from 'io-sanita-theme/helpers';

import { CardPersona, CardFeatured } from 'io-sanita-theme/components';

import {
  ListingCategory,
  ListingText,
  ListingLinkMore,
  RassegnaInfo,
} from 'io-sanita-theme/components/Blocks';

import './inEvidence.scss';

const InEvidenceTemplate = (props) => {
  const {
    items,
    isEditMode,
    show_block_bg,
    show_section,
    show_type = true,
    show_topics,
    show_description = true,
    id_lighthouse,
    hide_dates,
    linkAlign,
    linkTitle,
    linkHref,
    linkmore_id_lighthouse,
    rrule,
  } = props;

  return (
    <div className="in-evidence">
      <Container className={!show_block_bg || isEditMode ? 'px-0' : 'px-4'}>
        <div className="in-evidence-cards-wrapper mb-5">
          <Row>
            {items.map((item, index) => {
              const date = hide_dates
                ? null
                : getCalendarDate(item, rrule.rrulestr);
              const eventRecurrenceMore = hide_dates
                ? null
                : getEventRecurrenceMore(item, isEditMode);
              const listingText = show_description ? (
                <ListingText item={item} />
              ) : null;

              const category = getItemListingCategory({
                ...props,
                item,
                show_type,
                show_section,
                show_topics,
              });

              const isEventAppointment =
                item?.parent?.['@type'] === 'Event' &&
                item?.['@type'] === 'Event';

              return (
                <Col lg={index > 0 ? 6 : 12} key={index}>
                  {item['@type'] === 'Persona' ? (
                    <CardPersona
                      item={item}
                      className="listing-item"
                      size={show_description ? 'big' : 'small'}
                      isEditMode={isEditMode}
                      titleDataElement={id_lighthouse}
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
                        date={date}
                        category={
                          category && (
                            <ListingCategory category={category} item={item} />
                          )
                        }
                        showDefaultCategory={false}
                        otherChildren={{
                          afterTitle: isEventAppointment && (
                            <RassegnaInfo eventoPadre={item.parent} />
                          ),
                          afterText: eventRecurrenceMore,
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
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
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

export default injectLazyLibs(['rrule'])(InEvidenceTemplate);
