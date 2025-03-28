/**
 * FooterInfos component.
 * @module components/layout/Footer/FooterInfos
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { getEditableFooterColumns, getItemsByPath } from 'volto-editablefooter';

import { flattenHTMLToAppURL } from '@plone/volto/helpers/Url/Url';
import ConditionalLink from '@plone/volto/components/manage/ConditionalLink/ConditionalLink';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';

import {
  FooterNewsletterSubscribe,
  FooterSocials,
} from 'io-sanita-theme/components';
import { richTextHasContent, useHomePath } from 'io-sanita-theme/helpers';

import { fromHtml } from 'volto-slate-italia/config/Slate/utils';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
});

const FooterInfos = () => {
  const intl = useIntl();
  const N_COLUMNS = 3;
  const location = useLocation();
  const dispatch = useDispatch();
  const homepath = useHomePath();

  const req = useSelector((state) => state.editableFooterColumns);
  const footerConfiguration = useSelector(
    (state) => state.editableFooterColumns?.result,
  );

  useEffect(() => {
    if (!req.loadingResults && !footerConfiguration) {
      dispatch(getEditableFooterColumns());
    }
  }, [dispatch, location]);

  //filter rootpaths
  let footerColumns = getItemsByPath(
    footerConfiguration,
    location?.pathname?.length ? location.pathname : homepath,
  ).filter((c) => c.visible);

  footerColumns.forEach((column) => {
    if (__CLIENT__) {
      column.slateText = fromHtml(column.text);
    }
  });

  const colWidth =
    12 / (footerColumns.length < N_COLUMNS ? footerColumns.length : N_COLUMNS);

  const isLastRow = (index, length) => {
    let rest = length % N_COLUMNS;
    if (rest === 0) {
      rest = N_COLUMNS;
    }
    return index >= length - rest;
  };

  return (
    <Row tag="div">
      {footerColumns.map((column, index) => (
        <Col
          lg={colWidth}
          md={colWidth}
          className={cx('py-4', {
            'last-row-cols': isLastRow(index, footerColumns.length),
          })}
          tag="div"
          widths={['xs', 'sm', 'md', 'lg', 'xl']}
          key={index}
        >
          <h2 className="h4">
            {column?.title && (
              <ConditionalLink
                condition={column.titleLink?.length > 0}
                item={column.titleLink?.[0]}
                to={column.titleLink?.[0]?.['@id'] ? null : ''}
                title={
                  intl.formatMessage(messages.goToPage) + ':' + column.title
                }
              >
                {column.title}
              </ConditionalLink>
            )}
          </h2>
          {column.showSocial && <FooterSocials />}
          {richTextHasContent(column.slateText) ? (
            <TextBlockView data={{ value: column.slateText }} />
          ) : (
            column.text && (
              <div
                dangerouslySetInnerHTML={{
                  __html: flattenHTMLToAppURL(column.text.data),
                }}
              />
            )
          )}
          {/* <TextBlockView id={index} data={{ value: data.text }} /> */}
          {column.newsletterSubscribe && <FooterNewsletterSubscribe />}
        </Col>
      ))}
    </Row>
  );
};

export default FooterInfos;
