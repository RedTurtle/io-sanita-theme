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
  Badge,
} from 'design-react-kit';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { UniversalLink } from '@plone/volto/components';

import {
  getItemIcon,
  getItemListingCategory,
  getCalendarDate,
  getEventRecurrenceMore,
  getComponentWithFallback,
} from 'io-sanita-theme/helpers';
import { CardCategoryBottom } from 'io-sanita-theme/components';
import {
  ListingCategory,
  ListingText,
} from 'io-sanita-theme/components/Blocks';

import { CardCategoryTop } from 'io-sanita-theme/components';

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
  servizioOnline: {
    id: 'servizio_online_chip',
    defaultMessage: 'Servizio online',
  },
});

const SimpleCardDefault = (props) => {
  const intl = useIntl();

  moment.locale(intl.locale);

  const {
    item,
    isEditMode,
    show_icon = false,
    show_section = true,
    show_type,
    show_description = true,
    show_detail_link,
    detail_link_label,
    hide_dates,
    id_lighthouse,
    rrule,
    index,
  } = props;

  const getItemClass = (item) => {
    let className = '';
    switch (item['@type']) {
      case 'News Item':
        className =
          item.tipologia_notizia
            ?.map?.((tipologia) => {
              return (
                typeof tiplogia === 'object' ? tipologia.token : tipologia
              )
                ?.toLowerCase()
                ?.replace(' ', '_');
            })
            .join(' ') ?? '';
        break;
      default:
        className = '';
        break;
    }
    return className;
  };

  const icon = show_icon ? getItemIcon(item) : null;
  const itemTitle = item.title || item.id;
  const date = hide_dates ? null : getCalendarDate(item, rrule.rrulestr);
  const eventRecurrenceMore = hide_dates
    ? null
    : getEventRecurrenceMore(item, isEditMode);
  const listingText = show_description ? <ListingText item={item} /> : null;
  const category = getItemListingCategory({
    ...props,
    item,
    show_type,
  });
  const type = item['@type'];
  const isServizioOnline =
    item['@type'] === 'Servizio' && item?.servizio_attivo;

  const BlockExtraTags = getComponentWithFallback({
    name: 'BlockExtraTags',
    dependencies: ['SimpleCardDefault', type],
  }).component;

  return (
    <Card
      className={`align-items-top rounded shadow no-after ${getItemClass(
        item,
      )} simple-card-default-item`}
      key={index}
    >
      <CardBody
        className={cx('', {
          'pb-5': show_detail_link || eventRecurrenceMore,
        })}
      >
        {(icon || category) && (
          <CardCategoryTop
            iconName={icon}
            children={
              category ? (
                <span className="text fw-bold">
                  <ListingCategory category={category} item={item} />
                </span>
              ) : null
            }
          />
        )}
        <CardTitle tag="h3">
          <UniversalLink
            item={!isEditMode ? item : null}
            href={isEditMode ? '#' : null}
            data-element={id_lighthouse}
            tabIndex={0}
            className="card-title-link"
          >
            {itemTitle}
          </UniversalLink>
        </CardTitle>

        {/* Chip servizio attivo */}
        {isServizioOnline && (
          <div className="mb-3">
            <Badge color="info">
              {intl.formatMessage(messages.servizioOnline)}
            </Badge>
          </div>
        )}
        {listingText && (
          <CardText className={cx('', { 'mb-5': eventRecurrenceMore })}>
            {listingText}
            {(type === 'Modulo' || type === 'Documento') && !hide_dates && (
              <div className="document-date mt-3">
                {item?.effective && (
                  <p className="mb-0">
                    <strong>
                      {intl.formatMessage(messages.publication_date)}:{' '}
                    </strong>
                    {moment(item.effective).format('DD-MM-YYYY')}
                  </p>
                )}
                {item?.modified && (
                  <p className="mb-0">
                    <strong>
                      {intl.formatMessage(messages.update_date)}:{' '}
                    </strong>
                    {moment(item.modified).format('DD-MM-YYYY')}
                  </p>
                )}
              </div>
            )}
          </CardText>
        )}
        <BlockExtraTags {...props} item={item} itemIndex={index} />
        {eventRecurrenceMore}

        <CardCategoryBottom
          item={item}
          date={date}
          isEditMode={isEditMode}
          show_type={false}
        />

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
            aria-hidden="true"
          />
        )}
      </CardBody>
    </Card>
  );
};

SimpleCardDefault.propTypes = {
  item: PropTypes.any.isRequired,
  isEditMode: PropTypes.bool,
};

export default injectLazyLibs(['rrule'])(SimpleCardDefault);
