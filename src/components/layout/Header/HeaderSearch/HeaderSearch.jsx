/**
 * HeaderSearch component.
 * @module components/Header/HeaderSearch
 */

import React, { useState } from 'react';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from 'io-sanita-theme/components';
import { SearchModal } from 'io-sanita-theme/components';

const messages = defineMessages({
  search: {
    id: 'Cerca',
    defaultMessage: 'Cerca',
  },
  ariaLabelSearch: {
    id: 'searchLabel',
    defaultMessage: 'Cerca nel sito',
  },
});

const HeaderSearch = ({ className }) => {
  const intl = useIntl();
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <>
      <div
        className={cx('it-search-wrapper', className)}
        role="search"
        aria-label={intl.formatMessage(messages.ariaLabelSearch)}
      >
        <span className="d-none d-md-block">
          {intl.formatMessage(messages.search)}
        </span>
        <a
          className="search-link rounded-icon"
          aria-label={intl.formatMessage(messages.search)}
          onClick={(e) => {
            e.preventDefault();
            setShowSearchModal(true);
          }}
          href="/search"
          role="button"
        >
          <Icon
            icon="it-search"
            title={intl.formatMessage(messages.search)}
            aria-hidden={true}
          />
        </a>
      </div>
      <SearchModal
        show={showSearchModal}
        closeModal={() => setShowSearchModal(false)}
      />
    </>
  );
};

export default HeaderSearch;
