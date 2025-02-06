/**
 * PageView view component.
 * @module components/theme/View/PageView
 */
import React from 'react';
import cx from 'classnames';

import {
  RichText,
  richTextHasContent,
  TextOrBlocks,
} from 'io-sanita-theme/helpers';

import {
  Sharing,
  SearchSectionForm,
  Placeholder,
  Metadata,
  RelatedItems,
} from 'io-sanita-theme/components/View/commons';

import { defineMessages, useIntl } from 'react-intl';
import { getLayoutFieldname } from '@plone/volto/helpers/Content/Content';
import config from '@plone/volto/registry';

const messages = defineMessages({
  unknownBlock: {
    id: 'Unknown Block',
    defaultMessage: 'Unknown Block {block}',
  },
  inThisSection: {
    id: 'In this section',
    defaultMessage: 'In questa sezione',
  },
  modified: {
    id: 'modified',
    defaultMessage: 'Ultimo aggiornamento',
  },
});

/**
 * PageView view component class.
 * @function PageView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const PageView = ({ content, token, location, history }) => {
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;
  const layout = content[getLayoutFieldname(content)];
  if (layout === 'document_view') {
    const rightHeaderHasContent =
      content.image?.scales ||
      richTextHasContent(content.info_testata) ||
      content.mostra_bottoni_condivisione;

    return (
      <>
        <div id="page-document" className="ui container px-4">
          {/*-----Testata-----*/}
          <div className="PageHeaderWrapper mb-4">
            <div className="row">
              <div
                className={cx('title-description-wrapper', {
                  'col-lg-6': rightHeaderHasContent,
                  'col-lg-12': !rightHeaderHasContent,
                })}
              >
                <Placeholder position="title" content={content}>
                  <h1 className="mb-3" data-element="page-name">
                    {content?.title}
                  </h1>
                </Placeholder>

                <p className="description">{content?.description}</p>
              </div>
              {rightHeaderHasContent && (
                <div className="col-lg-4 offset-lg-2 d-flex flex-column align-items-end">
                  {content.mostra_bottoni_condivisione && (
                    <div className="px-4 mb-4">
                      <Sharing url={content['@id']} title={content.title} />
                    </div>
                  )}
                  {content.image && (
                    <div className="header-image px-4 mb-3">
                      <Image
                        item={content}
                        alt={content.image_caption ?? ''}
                        sizes="250px"
                        responsive={true}
                      />
                    </div>
                  )}
                  {richTextHasContent(content.info_testata) && (
                    <div className="header-infos px-4 mb-5">
                      <RichText serif={false} data={content.info_testata} />
                    </div>
                  )}
                </div>
              )}
            </div>
            {content?.ricerca_in_testata && (
              <SearchSectionForm content={content} />
            )}
          </div>

          <TextOrBlocks content={content} />

          <Metadata
            content={content}
            showDates={content.show_modified ?? false}
            className="my-4"
          />
        </div>
        <RelatedItems content={content} />
        <Placeholder position="afterContent" content={content} />
      </>
    );
  } else {
    const getViewByLayout = () => config.views.layoutViews[layout] || null;
    const Layout = getViewByLayout();

    return Layout ? (
      <Layout
        content={content}
        location={location}
        token={token}
        history={history}
      />
    ) : null;
  }
};

export default PageView;
