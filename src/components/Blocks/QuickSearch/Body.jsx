import React, { useState, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Container } from 'design-react-kit';
import { SearchBar } from 'io-sanita-theme/components';
import { QuickSearchSections } from 'io-sanita-theme/components';

const messages = defineMessages({
  search_site: {
    id: 'quick-search-search_site',
    defaultMessage: 'Cerca nel sito',
  },
});

const Body = ({ data, id }) => {
  const intl = useIntl();
  const [searchableText, setSearchableText] = useState();

  useEffect(() => {
    if (searchableText?.length > 0) {
      alert('fare la ricerca');
    }
  }, [searchableText]);
  return (
    <div className="full-width bg-primary-lightest py-4">
      <Container className="px-4">
        <SearchBar
          id={id}
          title={data.title ?? intl.formatMessage(messages.search_site)}
          textDescription={data.description}
          value={searchableText}
          onChange={(v) => {
            setSearchableText(v);
          }}
        />
        <QuickSearchSections
          onChange={() => {
            setSearchableText(v);
          }}
          scrollOnMobile={true}
        />
      </Container>
    </div>
  );
};

export default Body;
