/* CUSTOMIZATIONS:
  - Agid styling

*/
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { commonSearchBlockMessages } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  searchResults: {
    id: 'Search results',
    defaultMessage: 'Search results',
  },
});

const SearchDetails = ({ total, text, as = 'p', data }) => {
  const El = as;
  const intl = useIntl();
  return (
    <El className="search-details" aria-live="polite">
      <>
        {text && (
          <div>
            {intl.formatMessage(commonSearchBlockMessages.searchedFor, {
              em: (...chunks) => <em>{chunks}</em>,
              searchedtext: text,
            })}
          </div>
        )}{' '}
        {data.showTotalResults && (
          <div>
            {intl.formatMessage(messages.searchResults)}: <b>{total}</b>
          </div>
        )}
      </>
    </El>
  );
};

export default SearchDetails;
