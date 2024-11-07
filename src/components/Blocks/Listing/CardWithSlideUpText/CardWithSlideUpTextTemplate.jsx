/*
 * Blocco card con testo animato
 */

import PropTypes from 'prop-types';
import { CardReadMore } from 'design-react-kit';
import cx from 'classnames';

import { UniversalLink } from '@plone/volto/components';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import {
  getCalendarDate,
  getComponentWithFallback,
} from 'io-sanita-theme/helpers';
import {
  getListingImageBackground,
  ListingContainer,
} from 'io-sanita-theme/components/Blocks';
import { LinkMore } from 'io-sanita-theme/components';
import { defineMessages, useIntl } from 'react-intl';
import { CardCategoryBottom } from 'io-sanita-theme/components';

import './cardWithSlideUpText.scss';

const messages = defineMessages({
  vedi: {
    id: 'card_vedi',
    defaultMessage: 'Vedi',
  },
});

const CardWithSlideUpTextTemplate = (props) => {
  const intl = useIntl();

  const {
    items,
    isEditMode,
    linkAlign,
    linkTitle,
    linkHref,
    show_category = true,
    show_description = true,
    hide_dates = false,
    id_lighthouse,
    linkmore_id_lighthouse,
    rrule,
  } = props;

  return (
    <div className="card-slide-text-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <div className="grid mb-3 mt-5">
          {items.map((item, index) => {
            const image = getListingImageBackground(item, 'large');
            const date = hide_dates
              ? null
              : getCalendarDate(item, rrule.rrulestr);
            const title = item?.title || '';

            const BlockExtraTags = getComponentWithFallback({
              name: 'BlockExtraTags',
              dependencies: ['CardWithSlideUpTextTemplate', item['@type']],
            }).component;

            return (
              <UniversalLink
                item={!isEditMode ? item : null}
                href={isEditMode ? '#' : null}
                style={
                  image && {
                    backgroundImage: `url(${image})`,
                  }
                }
                className="listing-item box bg-img"
                key={index}
                data-element={id_lighthouse}
              >
                <div className="bg-gradient"></div>

                <CardCategoryBottom
                  item={item}
                  date={date}
                  isEditMode={isEditMode}
                  showCategory={show_category}
                />

                <h3
                  className={cx('title', {
                    ellipsis: title.length > 50,
                  })}
                  title={title.length > 50 ? title : undefined}
                >
                  {title.substring(0, 50)}
                </h3>
                <div className="box-slide-up">
                  {show_description && item.description && (
                    <p>{item.description}</p>
                  )}
                  <BlockExtraTags {...props} item={item} itemIndex={index} />
                  <CardReadMore
                    iconName="it-arrow-right"
                    tag={UniversalLink}
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
                    text={intl.formatMessage(messages.vedi)}
                    className="justify-content-end"
                  />
                </div>
              </UniversalLink>
            );
          })}
        </div>

        <LinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </ListingContainer>
    </div>
  );
};

CardWithSlideUpTextTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  linkHrefs: PropTypes.any,
};

export default injectLazyLibs(['rrule'])(CardWithSlideUpTextTemplate);
