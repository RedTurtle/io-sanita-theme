import React, { useState, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Button } from 'design-react-kit';
import { Icon } from 'io-sanita-theme/components';
import { useDebouncedEffect } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  searchable_text_button: {
    id: 'search_map_searchable_text_button',
    defaultMessage: 'Cerca',
  },
  searchable_text_decription: {
    id: 'search_map_searchable_text_decription',
    defaultMessage:
      '*Inserisci un indirizzo, ad esempio “Viale G. Carducci 15, Roma”',
  },
});

const SearchableText = ({
  id,
  title,
  defaultTitle,
  value,
  onChange,
  controls,
}) => {
  const intl = useIntl();
  const [searchableText, setSearchableText] = useState(''); //serve solo per fare il debounce

  useDebouncedEffect(
    () => {
      if (searchableText != value) {
        onChange(searchableText);
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    600,
    [searchableText],
  );

  return (
    <div className="form-group search-bar mb-3">
      <label htmlFor={id + 'searchable-text'} className="active px-0 h5">
        {title ?? defaultTitle}
      </label>

      <div className="input-group">
        <span className="input-group-text">
          <Icon aria-hidden color="primary" icon="it-search" size="sm" />
        </span>
        <input
          type="text"
          aria-describedby={id + 'searchable-text-description'}
          id={id + 'searchable-text'}
          className="form-control"
          value={searchableText}
          aria-controls={controls}
          onChange={(e) => setSearchableText(e.currentTarget.value)}
        />
        {/* <div className="input-group-append">
          <Button color="accent">
            {intl.formatMessage(messages.searchable_text_button)}
          </Button>
        </div> */}
      </div>
      <small className="form-text" id={id + 'searchable-text-description'}>
        {intl.formatMessage(messages.searchable_text_decription)}
      </small>
    </div>
  );
};

export default SearchableText;