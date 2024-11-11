import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';

import {
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
  Row,
  Col,
} from 'design-react-kit';

import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';

import { LinkMore } from 'io-sanita-theme/components';
import { getViewDate } from 'io-sanita-theme/components/Blocks/Rss/utils';
import './rssBlock.scss';

const messages = defineMessages({
  readMore: { id: 'rss_read_more', defaultMessage: 'Read more' },
  noResults: {
    id: 'rss_no_results',
    defaultMessage: 'No results from RSS feed.',
  },
});

const CardWithImageRssTemplate = ({
  items = [],
  isEditMode,
  data = {},
  moment: Moment,
}) => {
  const intl = useIntl();
  const titleID = data?.title ? data.title.replace(/[^A-Z0-9]+/gi, '_') : '';
  return (
    <div className={cx('', { 'public-ui': isEditMode })} aria-live="polite">
      {items?.length > 0 ? (
        <>
          {data.title && (
            <Row>
              <Col>
                <h2 className="mb-4 mt-5" id={titleID}>
                  {data.title}
                </h2>
              </Col>
            </Row>
          )}
          <Row>
            {items.map((item) => (
              <Col lg={3} className="mb-3" key={item['@id']}>
                <Card className="card-bg" noWrapper={false} tag="div">
                  {item.enclosure?.url && (
                    <div className="img-responsive-wrapper">
                      <div className="img-responsive img-responsive-panoramic">
                        <figure className="img-wrapper">
                          <img
                            aria-hidden="true"
                            alt={item.title}
                            src={item.enclosure.url}
                            loading="lazy"
                          />
                        </figure>
                      </div>
                    </div>
                  )}
                  <CardBody tag="div" className="px-4">
                    <div className="category-top">
                      {item?.categories?.length > 0 && item.categories[0]._ && (
                        <>
                          <span className="category">
                            {item.categories[0]._}
                          </span>
                          <span className="mx-1">&mdash;</span>
                        </>
                      )}
                      <span>
                        {getViewDate(item.pubDate || item.date, intl.locale)}
                      </span>
                    </div>
                    <CardTitle tag={data.title ? 'h3' : 'h2'} className="h6">
                      {item.title}
                    </CardTitle>
                    {item?.source?.length > 0 && (
                      <div className="source-title mb-3">
                        <span className="source">{item.source}</span>
                      </div>
                    )}
                  </CardBody>
                  <CardReadMore
                    iconName="it-arrow-right"
                    className="ms-4"
                    tag="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item?.url}
                    text={intl.formatMessage(messages.readMore)}
                  />
                </Card>
              </Col>
            ))}
          </Row>
          <LinkMore
            title={data.linkMoreTitle}
            href={data.linkMore ? [{ '@id': data.linkMore }] : []}
          />
        </>
      ) : data.feed ? (
        <div className="no-rss-feed-results" aria-live="polite">
          {intl.formatMessage(messages.noResults)}
        </div>
      ) : null}
    </div>
  );
};

CardWithImageRssTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default CardWithImageRssTemplate;
