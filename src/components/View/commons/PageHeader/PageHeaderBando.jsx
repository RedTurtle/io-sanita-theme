import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Icon } from 'io-sanita-theme/components';
import { BandoStatus } from 'io-sanita-theme/components/View/Bando';

/**
 * PageHeaderBando view component class.
 * @function PageHeaderBando
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  bando: {
    id: 'Bando',
    defaultMessage: 'Bando',
  },
});

const PageHeaderBando = ({ content }) => {
  const intl = useIntl();
  const status =
    content['@type'] === 'Bando'
      ? content['@components']?.['view-extra-data']?.stato_bando
      : null;

  return content['@type'] === 'Bando' ? (
    <>
      {status && (
        <div
          className={cx(
            'card card-teaser shadow p-3 mt-3 rounded bando_state',
            status[0],
          )}
        >
          <div className="card-body">
            <div className="card-text">
              <Icon
                className="me-2"
                color=""
                icon={
                  {
                    open: 'it-check-circle',
                    closed: 'it-error',
                    inProgress: 'it-info-circle',
                    scheduled: 'it-calendar',
                  }[status[0]]
                }
                padding={false}
                size=""
                title={`${intl.formatMessage(messages.bando)} ${status[1]}`}
              />
              {intl.formatMessage(messages.bando)}{' '}
              <BandoStatus content={content} />
            </div>
          </div>
        </div>
      )}
    </>
  ) : null;
};

export default PageHeaderBando;

PageHeaderBando.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
    readingtime: PropTypes.string,
    showreadingtime: PropTypes.bool,
    imageinheader: PropTypes.bool,
    imageinheader_field: PropTypes.string,
    showdates: PropTypes.bool,
  }),
};
