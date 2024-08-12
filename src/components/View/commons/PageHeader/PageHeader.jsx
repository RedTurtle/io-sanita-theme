/*
 * Page Header Component used in most of the views
 */
import cx from 'classnames';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  PageHeaderBando,
  PageHeaderDates,
  PageHeaderEventDates,
  PageHeaderExtend,
  PageHeaderNewsItem,
  PageHeaderStatoServizio,
  PageHeaderLinkServizio,
  PageHeaderDocumento,
  Sharing,
} from 'io-sanita-theme/components/View/commons';

import config from '@plone/volto/registry';

const messages = defineMessages({
  reading_time: {
    id: 'reading_time',
    defaultMessage: 'Tempo di lettura',
  },
  minutes: {
    id: 'minutes',
    defaultMessage: 'min',
  },
});

/**
 * PageHeader view component class.
 * @function PageHeader
 * @params content {object} content object
 * @params readingtime {number} reading time in minutes
 * @params showreadingtime {boolean} show or hide reading time
 * @params showdates {boolean} show or hide dates in header
 * @returns {string} Markup of the component.
 */
const PageHeader = (props) => {
  const { content, readingtime, showdates, showreadingtime } = props;
  const intl = useIntl();

  const render_reading_time = showreadingtime && readingtime;
  const render_dates = showdates ? <PageHeaderDates content={content} /> : null;

  return (
    <div className="PageHeaderWrapper mb-4">
      <div className="row mb-2 mb-lg-0 page-header">
        <div className="py-lg-2 col-lg-10 page-header-left">
          <h1
            data-element={
              content['@type'] === 'Servizio' ? 'service-title' : 'page-name'
            }
          >
            {content.title}
          </h1>
          <p className="subtitle">
            {content.sottotitolo && `${content.sottotitolo}`}
          </p>

          <PageHeaderEventDates content={content} />

          <PageHeaderStatoServizio content={content} />

          <PageHeaderDocumento content={content} />

          {content.description && (
            <p
              className="description"
              data-element={
                content['@type'] === 'Servizio'
                  ? 'service-description'
                  : undefined
              }
            >
              {content.description}
            </p>
          )}

          <PageHeaderBando content={content} />

          <PageHeaderNewsItem content={content} />

          <PageHeaderLinkServizio content={content} />

          <PageHeaderExtend {...props} />

          {(render_reading_time || render_dates) && (
            <div className="row mt-5 mb-4 readingtime-dates">
              {render_dates ? (
                <>{render_dates}</>
              ) : (
                <div className="col-6"></div>
              )}

              {render_reading_time &&
                ((
                  <div className="col-6">
                    <small>{intl.formatMessage(messages.reading_time)}:</small>
                    <p className="font-monospace">
                      {readingtime} {intl.formatMessage(messages.minutes)}
                    </p>
                  </div>
                ) || <div className="col-6" />)}
            </div>
          )}
        </div>

        <div className={'page-header-right py-lg-4 col-lg-2 text-end'}>
          <Sharing url={content['@id']} title={content.title} />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

PageHeader.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object.isRequired,
    readingtime: PropTypes.string,
    showdates: PropTypes.bool,
    showreadingtime: PropTypes.bool,
  }),
};
