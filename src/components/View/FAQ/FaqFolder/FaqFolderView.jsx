/* eslint-disable react-hooks/exhaustive-deps */
/**
 * FaqFolderView view component.
 * @module components/theme/View/FaqFolderView
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { Container, Spinner } from 'design-react-kit';

import { resetContent } from '@plone/volto/actions/content/content';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { GET_CONTENT } from '@plone/volto/constants/ActionTypes';

import {
  PageHeader,
  SkipToMainContent,
  RelatedItems,
  Metadata,
  Placeholder,
} from 'io-sanita-theme/components/View/commons';

import { TextOrBlocks, useDebouncedEffect } from 'io-sanita-theme/helpers';
import { SearchBar } from 'io-sanita-theme/components';
import FaqFolderTree from 'io-sanita-theme/components/View/FAQ/FaqFolder/FaqFolderTree';

import './faqFolderView.scss';

const messages = defineMessages({
  no_results: {
    id: 'Faq Folder: Nessun risultato trovato',
    defaultMessage: 'Non ho trovato la risposta che cercavi',
  },
  foundNResults: {
    id: 'found_n_results',
    defaultMessage: 'Trovati {total} risultati.',
  },
  search_faq: {
    id: 'faq_search',
    defaultMessage: 'Inserisci una parola chiave per trovare una risposta',
  },
  aria_search_results: {
    id: 'faq_search_aria_search_results',
    defaultMessage: 'Risultati della ricerca FAQ',
  },
});

/**
 * FaqFolderView view component class.
 * @function FaqFolderView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const FaqFolderView = ({ content }) => {
  const intl = useIntl();

  const FAQ_FOLDER_KEY = 'FAQ_FOLDER';
  const structure_url = content?.['@components']?.['faq-structure']?.['@id'];
  const dispatch = useDispatch();

  const faq_structure = useSelector(
    (state) => state.content.subrequests?.[FAQ_FOLDER_KEY],
  );
  const [searchableText, setSearchableText] = useState('');

  const doSearch = () => {
    const url =
      structure_url +
      (searchableText ? '?SearchableText=' + searchableText + '*' : '');

    const dispatch_obj = {
      type: GET_CONTENT,
      subrequest: FAQ_FOLDER_KEY,
      request: {
        op: 'get',
        path: `${flattenToAppURL(url)}`,
      },
    };
    dispatch(dispatch_obj);

    return () => dispatch(resetContent(FAQ_FOLDER_KEY));
  };

  useEffect(() => {
    if (structure_url) {
      doSearch();
    }
  }, [structure_url]);

  useDebouncedEffect(
    () => {
      doSearch();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    600,
    [searchableText],
  );

  return (
    <>
      {/* -------HEADER------- */}
      <Container className="px-4 my-4 faqfolder-view">
        <PageHeader
          content={content}
          imageinheader={!!content.image}
          imageinheader_field="image"
        />
      </Container>

      {/* -------SEARCH------- */}
      <div className="section bg-primary-lightest search-section full-width mb-4">
        <Container className="px-4">
          <SearchBar
            id="faq_search"
            title={intl.formatMessage(messages.search_faq) + '...'}
            textDescription={' '}
            value={searchableText}
            onChange={(v) => {
              setSearchableText(v);
            }}
            shadow={true}
            ariaControls="faq-search-results-region"
          />
        </Container>
      </div>

      {/* -------CONTENT------- */}
      <Container className="px-4">
        <TextOrBlocks content={content} />

        <div
          className="faq-search-results-wrapper"
          id="faq-search-results-region"
          aria-live="polite"
          role="region"
          aria-label={intl.formatMessage(messages.aria_search_results)}
        >
          {faq_structure && (
            <>
              {faq_structure.loaded && (
                <p className="visually-hidden d-lg-block" aria-live="polite">
                  {intl.formatMessage(messages.foundNResults, {
                    total: faq_structure?.data?.items?.[0]?.items?.length || 0,
                  })}
                </p>
              )}
              {faq_structure?.loaded &&
                searchableText?.length > 0 &&
                faq_structure.data?.items?.[0]?.items?.length === 0 && (
                  <p>{intl.formatMessage(messages.no_results)}</p>
                )}

              {faq_structure?.loading && (
                <div className="mt-5 mb-5 loading">
                  <Spinner active double={false} small={false} tag="div" />
                </div>
              )}

              {!faq_structure?.loading &&
                faq_structure.data?.items?.length > 0 && (
                  <FaqFolderTree tree={faq_structure.data.items[0]} />
                )}
            </>
          )}
        </div>

        <Metadata content={content} showDates={true} className="my-4" />
      </Container>

      {/* -------BOTTOM------- */}

      <Placeholder position="afterContent" content={content} />

      <RelatedItems content={content} list={content?.servizi_collegati ?? []} />

      <Placeholder position="afterRelatedItems" content={content} />
    </>
  );
};

export default FaqFolderView;
