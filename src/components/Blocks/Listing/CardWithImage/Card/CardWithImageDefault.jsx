/*
 * componente per visulizzare un elemento del template 'Card con immagine' del blocco listing con l'aspetto di default.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import { CardPersona, CardImage } from 'io-sanita-theme/components';
import { getComponentWithFallback } from 'io-sanita-theme/helpers';

import { ListingText, RassegnaInfo } from 'io-sanita-theme/components/Blocks';

const CardWithImageDefault = (props) => {
  const {
    item,
    index,
    isEditMode,
    always_show_image = false,
    set_four_columns = false,
    show_description = true,
    show_category,
    hide_dates = false,
    natural_image_size = false,
    id_lighthouse,
  } = props;

  const imagesToShow = set_four_columns ? 4 : 3;

  // const icon = show_icon ? getItemIcon(item) : null;

  const listingText = show_description ? <ListingText item={item} /> : null;

  const showImage = index < imagesToShow || always_show_image;

  const BlockExtraTags = getComponentWithFallback({
    name: 'BlockExtraTags',
    dependencies: ['CardWithImageDefault', item['@type']],
  }).component;

  const isEventAppointment =
    item?.parent?.['@type'] === 'Event' && item?.['@type'] === 'Event';

  return (
    <>
      {item['@type'] === 'Persona' ? (
        <CardPersona
          item={item}
          show_image={showImage}
          className={cx({ 'natural-image-size': natural_image_size })}
          size={show_description ? 'big' : 'small'}
          isEditMode={isEditMode}
          titleDataElement={id_lighthouse}
          showCategory={show_category}
        />
      ) : (
        <>
          <CardImage
            item={item}
            showImage={showImage}
            showDescription={listingText != null}
            showCategory={show_category}
            description={listingText}
            className={cx({
              'rassegna-appointment': isEventAppointment,
              'natural-image-size': natural_image_size,
            })}
            otherChildren={{
              afterTitle: isEventAppointment ? (
                <RassegnaInfo eventoPadre={item.parent} />
              ) : null,
              afterText: (
                <>
                  <BlockExtraTags {...props} item={item} itemIndex={index} />
                </>
              ),
            }}
            showDates={!hide_dates}
            titleDataElement={id_lighthouse}
          />
        </>
      )}
    </>
  );
};

CardWithImageDefault.propTypes = {
  item: PropTypes.any.isRequired,
  isEditMode: PropTypes.bool,
};

export default injectLazyLibs(['rrule'])(CardWithImageDefault);
