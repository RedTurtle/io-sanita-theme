/*
 * Page Header Component used in most of the views
 */
import cx from 'classnames';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import config from '@plone/volto/registry';
import {
  PageHeaderBando,
  PageHeaderDates,
  viewPageHeaderDates,
  PageHeaderEventDates,
  PageHeaderExtend,
  PageHeaderNewsItem,
  PageHeaderStatoServizio,
  PageHeaderLinkServizio,
  PageHeaderDocumento,
  PageHeaderPersona,
  Sharing,
} from 'io-sanita-theme/components/View/commons';

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
 * @params foto {boolean} if true, show image in header (eg. in PersonaView)
 * @returns {string} Markup of the component.
 */
const PageHeader = (props) => {
  const {
    content,
    readingtime,
    showdates,
    showreadingtime,
    foto = false,
  } = props;
  const intl = useIntl();

  const render_reading_time = showreadingtime && readingtime;
  const Image = config.getComponent({ name: 'Image' }).component;

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
          {content.sottotitolo && (
            <p className="subtitle">
              {content.sottotitolo && `${content.sottotitolo}`}
            </p>
          )}

          <PageHeaderPersona content={content} />

          <PageHeaderEventDates content={content} />

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
              {content.description.split('\n').map((d, i, { length }) => (
                <>
                  {d}
                  {i < length - 1 && <br />}
                </>
              ))}
            </p>
          )}

          <PageHeaderStatoServizio content={content} />

          <PageHeaderBando content={content} />

          <PageHeaderNewsItem content={content} />

          <PageHeaderLinkServizio content={content} />

          <PageHeaderExtend {...props} />

          {(render_reading_time ||
            (showdates && viewPageHeaderDates({ ...content })?.view)) && (
            <div className="row mt-5 mb-4 readingtime-dates">
              <PageHeaderDates content={content} />

              {render_reading_time && (
                <div className="col-6">
                  <small>{intl.formatMessage(messages.reading_time)}:</small>
                  <p className="font-monospace">
                    {readingtime} {intl.formatMessage(messages.minutes)}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className={'page-header-right py-lg-4 col-lg-2 text-end'}>
          <Sharing url={content['@id']} title={content.title} />

          {/* FOTO PERSONA */}
          {foto && content?.image ? (
            <div className="page-header-image mt-5">
              <figure>
                <Image
                  item={content}
                  alt=""
                  className="img-fluid"
                  sizes="(max-width:768px) 300px, 200px"
                />
              </figure>
            </div>
          ) : null}
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
