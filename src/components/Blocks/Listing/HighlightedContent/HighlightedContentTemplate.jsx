/*
 * Contenuto in evidenza
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { Container, CardReadMore } from 'design-react-kit';
import cx from 'classnames';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { UniversalLink } from '@plone/volto/components';

import {
  getCalendarDate,
  getEventRecurrenceMore,
  getComponentWithFallback,
} from 'io-sanita-theme/helpers';

import { CardFeatured } from 'io-sanita-theme/components';
import {
  ListingCategory,
  ListingText,
  RassegnaInfo,
} from 'io-sanita-theme/components/Blocks';
import './highlightedContentTemplate.scss';

const HighlightedContentTemplate = (props) => {
  const { items, isEditMode, linkTitle, linkHref, rrule, show_block_bg } =
    props;
  const intl = useIntl();

  return (
    <Container className={!show_block_bg || isEditMode ? 'px-0' : 'px-4'}>
      {items.map((item, index) => {
        const date = getCalendarDate(item, rrule.rrulestr);
        const eventRecurrenceMore = getEventRecurrenceMore(item, isEditMode);
        const listingText = <ListingText item={item} />;

        const category = item.parent?.title;

        const BlockExtraTags = getComponentWithFallback({
          name: 'BlockExtraTags',
          dependencies: ['HighlightedContentTemplate', item['@type']],
        }).component;

        const isEventAppointment =
          item?.parent?.['@type'] === 'Event' && item?.['@type'] === 'Event';

        const readMoreHref = linkHref?.[0]?.['@id'];
        return (
          <>
            <CardFeatured
              item={item}
              key={item['@id']}
              titleTag="h2"
              isEditMode={isEditMode}
              className={cx({ 'has-link-more': readMoreHref })}
              category={
                category ? (
                  <ListingCategory category={category} item={item} />
                ) : null
              }
              date={date}
              otherChildren={{
                afterTitle: isEventAppointment ? (
                  <RassegnaInfo eventoPadre={item.parent} />
                ) : null,
                afterText: (
                  <>
                    <BlockExtraTags {...props} item={item} itemIndex={index} />
                    {eventRecurrenceMore}
                    {readMoreHref && (
                      <CardReadMore
                        tag={UniversalLink}
                        iconName="it-arrow-right"
                        text={
                          linkTitle || intl.formatMessage(messages.view_all)
                        }
                        href={readMoreHref}
                      />
                    )}
                  </>
                ),
              }}
              text={listingText}
            />
          </>
        );
      })}
    </Container>
  );
};

HighlightedContentTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default injectLazyLibs(['rrule'])(HighlightedContentTemplate);

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});
