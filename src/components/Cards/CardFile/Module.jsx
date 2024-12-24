import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { getContent, resetContent } from '@plone/volto/actions/content/content';
import { useIntl, defineMessages } from 'react-intl';
import { viewDate } from 'io-sanita-theme/helpers';

import { Card, CardBody, CardTitle } from 'design-react-kit';

import { DownloadFileFormat } from 'io-sanita-theme/components/View/Modulo';
import './module.scss';
/**
 * Module view component class.
 * @function Modules
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const Module = ({
  item,
  titleTag = 'h3',
  showDescription = true,
  titleDataElement,
  showModified,
}) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const subrequests = useSelector((state) => state.content.subrequests);
  const url = flattenToAppURL(item['@id']);
  const key = 'module_' + url;

  const messages = defineMessages({
    last_update: {
      id: 'card_file_last_update',
      defaultMessage: 'Ultimo agg.to:',
    },
  });

  useEffect(() => {
    if (
      !item.file &&
      !item.formato_alternativo_1 &&
      !item.formato_alternativo_2
    ) {
      dispatch(getContent(url, null, key));
      return () => dispatch(resetContent(key));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  let modulo = subrequests?.[key]?.data ?? item;
  return modulo ? (
    <Card className="shadow rounded card-module no-after">
      <CardBody>
        <div className="card-file-content">
          <CardTitle tag={titleTag} className="mb-4">
            {modulo.file ? (
              modulo.title ?? modulo.file.filename
            ) : modulo['@type'] === 'Link' ? (
              <UniversalLink
                item={modulo}
                title={modulo.title}
                data-element={titleDataElement}
              >
                {modulo.title}
              </UniversalLink>
            ) : (
              modulo.title
            )}
          </CardTitle>

          {modulo.description && showDescription && <p>{modulo.description}</p>}

          <div className="download-formats">
            <DownloadFileFormat
              file={modulo.file}
              showLabel={true}
              title={modulo.title ?? modulo.file.filename}
              hideFileFormatLabel={true}
              className={
                modulo.formato_alternativo_1 || modulo.formato_alternativo_2
                  ? 'mb-3'
                  : ''
              }
            />
            <DownloadFileFormat
              file={modulo.formato_alternativo_1}
              showLabel={true}
              title={modulo.title ?? modulo.formato_alternativo_1.filename}
              hideFileFormatLabel={true}
              className={modulo.formato_alternativo_2 ? 'mb-3' : ''}
            />
            <DownloadFileFormat
              file={modulo.formato_alternativo_2}
              showLabel={true}
              title={modulo.title ?? modulo.formato_alternativo_2.filename}
              hideFileFormatLabel={true}
            />
            {showModified && modulo?.modified && (
              <p>
                {intl.formatMessage(messages.last_update)}{' '}
                {viewDate(intl.locale, modulo?.modified, 'DD-MM-Y HH:MM')}
              </p>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Module.propTypes = {
  item: PropTypes.shape({
    '@id': PropTypes.string,
  }).isRequired,
};

export default Module;
