/*
 * Contenuto in evidenza: serve per mostrare uno o più contenuti in evidenza a tutta larghezza e con tutte le info necesarie
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { CardReadMore } from 'design-react-kit';
import cx from 'classnames';

import { UniversalLink } from '@plone/volto/components';

import { getComponentWithFallback } from 'io-sanita-theme/helpers';

import { CardFeatured } from 'io-sanita-theme/components';
import {
  ListingContainer,
  ListingText,
  RassegnaInfo,
} from 'io-sanita-theme/components/Blocks';
import './highlightedContentTemplate.scss';

const HighlightedContentTemplate = (props) => {
  const {
    items,
    isEditMode,
    linkTitle,
    linkHref,
    show_block_bg,
    id_lighthouse,
  } = props;
  const intl = useIntl();

  return (
    <ListingContainer data={props} isEditMode={isEditMode}>
      {items.map((item, index) => {
        const listingText = <ListingText item={item} />;

        const isEventAppointment =
          item?.parent?.['@type'] === 'Event' && item?.['@type'] === 'Event';

        const BlockExtraTags = getComponentWithFallback({
          name: 'BlockExtraTags',
          dependencies: ['HighlightedContentTemplate', item['@type']],
        }).component;

        const readMoreHref = linkHref?.[0]?.['@id'];
        return (
          <>
            <CardFeatured
              item={item}
              key={item['@id']}
              titleTag="h2"
              titleDataElement={id_lighthouse}
              isEditMode={isEditMode}
              className={cx({ 'has-link-more': readMoreHref })}
              otherChildren={{
                afterTitle: isEventAppointment ? (
                  <RassegnaInfo eventoPadre={item.parent} />
                ) : null,
                afterText: (
                  <>
                    <BlockExtraTags {...props} item={item} itemIndex={index} />

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
    </ListingContainer>
  );
};

HighlightedContentTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default HighlightedContentTemplate;

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});
