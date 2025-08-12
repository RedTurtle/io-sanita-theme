/*
CUSTOMIZATIONS:
- Removed the "Site Administration" link, added a link to the home page
- Added a search bar to the Not Found page
*/

import { useEffect, useState, useRef } from 'react';

import BodyClass from '@plone/volto/helpers/BodyClass/BodyClass';
import { FormattedMessage } from 'react-intl';
import { defineMessages, useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import {
  withServerErrorCode,
  toBackendLang,
} from '@plone/volto/helpers/Utils/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { getNavigation } from '@plone/volto/actions/navigation/navigation';
import config from '@plone/volto/registry';
import { SearchBar, QuickSearch } from 'io-sanita-theme/components';
import { SearchUtils } from 'io-sanita-theme/helpers';

import { Spinner } from 'design-react-kit';

/**
 * Not found function.
 * @function NotFound
 * @returns {string} Markup of the not found page.
 */

const { getSearchParamsURL } = SearchUtils;

const messages = defineMessages({
  closeSearch: {
    id: 'closeSearch',
    defaultMessage: 'Chiudi cerca',
  },
  closeSearchBack: {
    id: 'closeSearchBack',
    defaultMessage: 'Indietro',
  },
  search: {
    id: 'search',
    defaultMessage: 'Cerca',
  },
  searchLabel: {
    id: 'searchLabel',
    defaultMessage: 'Cerca nel sito',
  },
  error404maintext: {
    id: 'We apologize for the inconvenience, but the page you were trying to access is not at this address. You can use the search below to help you find what you are looking for.',
    defaultMessage:
      'We apologize for the inconvenience, but the page you were trying to access is not at this address. You can use the search below to help you find what you are looking for.',
  },
  error404hplink: {
    id: 'or you can go to the ',
    defaultMessage: 'Or you can go to the ',
  },
});

const NotFound = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.intl.locale);
  const intl = useIntl();
  const location = useLocation();
  const inputRef = useRef(null);
  const [redirectingToResults, setRedirectingToResults] = useState(false);
  const subsite = useSelector((state) => state.subsite?.data);

  const navigationRootPath = config.settings.isMultilingual
    ? `/${toBackendLang(lang)}`
    : '/';

  useEffect(() => {
    dispatch(getNavigation(navigationRootPath, config.settings.navDepth));
  }, [dispatch, lang, navigationRootPath]);

  const [searchableText, setSearchableText] = useState(
    qs.parse(location.search)?.SearchableText ?? '',
  );

  const submitSearch = (_searchableText) => {
    if (__CLIENT__) {
      setRedirectingToResults(true);
      window.location.href =
        window.location.origin +
        getSearchParamsURL({
          searchableText: _searchableText ?? searchableText,
          subsite,
          currentLang: intl.locale,
        });
    }

    // setTimeout(() => {
    //   closeModal();
    // }, 500);
  };

  return (
    <Container className="view-wrapper w-50 px-lg-5 d-flex align-items-center flex-column">
      <BodyClass className="page-not-found" />
      <h1>
        <FormattedMessage
          id="This page does not seem to exist…"
          defaultMessage="This page does not seem to exist…"
        />
      </h1>
      <p className="description text-center">
        {intl.formatMessage(messages.error404maintext)}
      </p>
      <Container className="search-bar-container">
        <div
          className="search-filters"
          role="search"
          aria-label={intl.formatMessage(messages.searchLabel)}
        >
          <div className="mb-4">
            <SearchBar
              id="search-site-modal"
              title={intl.formatMessage(messages.searchLabel)}
              value={searchableText}
              onChange={(v) => {
                setSearchableText(v);
                submitSearch(v);
              }}
              showSubmit={true}
              ref={inputRef}
            />
          </div>
          <QuickSearch
            onClick={(v) => {
              setSearchableText(v.title);
              submitSearch(v.title);
            }}
            scrollOnMobile={false}
          />
        </div>
      </Container>
      {redirectingToResults && (
        <div className="overlay loading-results">
          <Spinner active />
        </div>
      )}
      <p>
        {intl.formatMessage(messages.error404hplink)}
        <Link to={navigationRootPath}>
          <FormattedMessage id="Home page" defaultMessage="Home page" />
        </Link>
      </p>
      {/* <p>
        <FormattedMessage
          id="If you are certain you have the correct web address but are encountering an error, please contact the {site_admin}."
          defaultMessage="If you are certain you have the correct web address but are encountering an error, please contact the {site_admin}."
          values={{
            site_admin: (
              <Link to="/contact-form">
                <FormattedMessage
                  id="Site Administration"
                  defaultMessage="Site Administration"
                />
              </Link>
            ),
          }}
        />
      </p> */}
      <p>
        <FormattedMessage id="Thank you." defaultMessage="Thank you." />
      </p>
    </Container>
  );
};

export default withServerErrorCode(404)(NotFound);
