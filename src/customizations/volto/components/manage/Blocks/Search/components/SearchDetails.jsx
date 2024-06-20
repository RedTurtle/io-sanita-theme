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
          <>
            {intl.formatMessage(commonSearchBlockMessages.searchedFor, {
              em: (...chunks) => <em>{chunks}</em>,
              searchedtext: text,
            })}
          </>
        )}
        {data.showTotalResults && (
          <>
            {intl.formatMessage(messages.searchResults)}: <b>{total}</b>
          </>
        )}
      </>
    </El>
  );
};

export default SearchDetails;
