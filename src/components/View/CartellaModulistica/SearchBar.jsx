/**
 * SearchBar view component.
 * @module components/theme/View/SearchBar
 */

import React, { useState } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Container } from 'design-react-kit';
import { Icon } from 'io-sanita-theme/components';
import { SearchBar } from 'io-sanita-theme/components';

const messages = defineMessages({
  title: {
    id: 'cartellamodulistica_search_title',
    defaultMessage: 'Cerca un modulo',
  },
  description: {
    id: 'cartellamodulistica_search_description',
    defaultMessage: "Inserisci una parola chiave, ad esempio 'Modulo'",
  },
});

/**
 * SearchBarCM view component class.
 * @function SearchBarCM
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const SearchBarCM = ({ setSearchableText, searchableText }) => {
  const intl = useIntl();
  const [focusSearch, setFocusSearch] = useState(false);

  return (
    <div className="section bg-primary-lightest search-section full-width mb-3">
      <Container className="px-4">
        <SearchBar
          id="search-cm"
          textDescription={intl.formatMessage(messages.description)}
          title={intl.formatMessage(messages.title)}
          onChange={(v) => {
            setSearchableText(v);
          }}
          value={searchableText}
          controls="cm-results"
        />
      </Container>
    </div>
  );
};

export default SearchBarCM;
