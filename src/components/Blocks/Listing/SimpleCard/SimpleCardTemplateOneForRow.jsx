import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment';
import cx from 'classnames';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
} from 'design-react-kit';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { UniversalLink } from '@plone/volto/components';

import { getItemIcon } from 'io-sanita-theme/helpers';

import { CardCategoryTop } from 'io-sanita-theme/components';
import { ListingLinkMore } from 'io-sanita-theme/components/Blocks';

import { ListingText } from 'io-sanita-theme/components/Blocks';

import {
  getCalendarDate,
  getEventRecurrenceMore,
  getComponentWithFallback,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  card_detail_label: { id: 'Card detail label', defaultMessage: 'Vedi' },
  publication_date: {
    id: 'publication_date',
    defaultMessage: 'Data di pubblicazione',
  },
  update_date: {
    id: 'update_date',
    defaultMessage: 'Data di aggiornamento',
  },
});

const SimpleCardTemplateDefaultOneForRow = (props) => {
  const intl = useIntl();

  moment.locale(intl.locale);

  const {
    items,
    isEditMode,
    linkTitle,
    linkHref,
    linkAlign,
    show_icon = false,
    show_section = true,
    show_description = true,
    show_detail_link,
    detail_link_label,

    hide_dates,
    id_lighthouse,
    linkmore_id_lighthouse,
    rrule,
  } = props;

  const getItemClass = (item) => {
    let className = null;
    switch (item['@type']) {
      case 'News Item':
        className =
          item.tipologia_notizia
            ?.map?.((tipologia) =>
              tipologia.token.toLowerCase().replace(' ', '_'),
            )
            .join(' ') ?? '';
        break;
      default:
        className = null;
        break;
    }
    return className;
  };

  return (
    <div className="simple-card-default">
      <div className="card-wrapper flex-wrap mb-3">
        {items.map((item, index) => {
          const icon = show_icon ? getItemIcon(item) : null;
          const itemTitle = item.title || item.id;
          const date = hide_dates
            ? null
            : getCalendarDate(item, rrule.rrulestr);
          const eventRecurrenceMore = hide_dates
            ? null
            : getEventRecurrenceMore(item, isEditMode);
          const listingText = show_description ? (
            <ListingText item={item} />
          ) : null;

          const type = item['@type'];
          const BlockExtraTags = getComponentWithFallback({
            name: 'BlockExtraTags',
            dependencies: ['SimpleCardTemplateOneForRow', type],
          }).component;

          return (
            <Card
              className={`align-items-top rounded shadow ${getItemClass(
                item,
              )} ${index < items.length - 1 ? 'mb-4' : ''}`}
              noWrapper
              teaser
              key={index}
            >
              <CardBody
                className={cx('', {
                  'pb-5': show_detail_link || eventRecurrenceMore,
                })}
              >
                {(icon || date) && (
                  <CardCategoryTop iconName={icon} date={date} />
                )}
                <CardTitle tag="h3">
                  <UniversalLink
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
                    data-element={id_lighthouse}
                  >
                    {itemTitle}
                  </UniversalLink>
                </CardTitle>
                {listingText && (
                  <CardText className={cx('', { 'mb-5': eventRecurrenceMore })}>
                    {listingText}
                    {(type === 'Modulo' || type === 'Documento') && (
                      <div className="document-date mt-3">
                        <strong>
                          {intl.formatMessage(messages.publication_date)}:{' '}
                        </strong>
                        {moment(item.CreationDate).format('DD-MM-YYYY')}
                        <br />
                        <strong>
                          {intl.formatMessage(messages.update_date)}:{' '}
                        </strong>
                        {moment(item.modified).format('DD-MM-YYYY')}
                      </div>
                    )}
                  </CardText>
                )}
                <BlockExtraTags {...props} item={item} itemIndex={index} />
                {eventRecurrenceMore}
                {show_detail_link && (
                  <CardReadMore
                    iconName="it-arrow-right"
                    tag={UniversalLink}
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
                    text={
                      detail_link_label ||
                      intl.formatMessage(messages.card_detail_label)
                    }
                  />
                )}
              </CardBody>
            </Card>
          );
        })}
      </div>

      <ListingLinkMore
        title={linkTitle}
        href={linkHref}
        className="my-4"
        linkAlign={linkAlign}
        linkmoreIdLighthouse={linkmore_id_lighthouse}
      />
    </div>
  );
};

SimpleCardTemplateDefaultOneForRow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
};

export default injectLazyLibs(['rrule'])(SimpleCardTemplateDefaultOneForRow);
