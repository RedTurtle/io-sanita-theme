/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import qs from 'query-string';

import {
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Button,
  Spinner,
} from 'design-react-kit';

import { SearchBar, QuickSearch, Icon } from 'io-sanita-theme/components';
import { SearchUtils } from 'io-sanita-theme/helpers';

import './searchModal.scss';

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
});

const SearchModal = ({ closeModal, show }) => {
  const intl = useIntl();

  const dispatch = useDispatch();
  const location = useLocation();

  const [searchableText, setSearchableText] = useState(
    qs.parse(location.search)?.SearchableText ?? '',
  );
  const [redirectingToResults, setRedirectingToResults] = useState(false);
  const subsite = useSelector((state) => state.subsite?.data);
  const inputRef = React.useRef(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        inputRef.current && inputRef.current.focus(); //setta il focus sul campo di ricerca all'apertura della modale
      }, 100);
      document.body.classList.add('search-modal-opened'); //to prevent scroll body
    } else {
      document.body.classList.remove('search-modal-opened'); //re-enable scroll body
    }
  }, [show, inputRef]);

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
    <Modal
      wrapClassName="public-ui"
      id="search-modal"
      isOpen={show}
      toggle={closeModal}
      role="alertdialog"
    >
      <ModalHeader toggle={closeModal} className="px-0 px-lg-4">
        <Container className="">
          <div className="d-flex align-items-center">
            <Button
              color="link"
              title={intl.formatMessage(messages.closeSearch)}
              onClick={closeModal}
              icon
              className="text-uppercase fw-semibold"
            >
              <Icon color="" icon="it-arrow-left" padding={false} />
              <span>{intl.formatMessage(messages.closeSearchBack)}</span>
            </Button>
          </div>
        </Container>
      </ModalHeader>
      <ModalBody>
        <Container className="px-lg-5">
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
      </ModalBody>
    </Modal>
  );
};

export default SearchModal;
