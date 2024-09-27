import React, { useState, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Icon } from 'io-sanita-theme/components';
import { Button } from 'design-react-kit';
import { useDebouncedEffect } from 'io-sanita-theme/helpers';

/* STYLE */
import './_searchBar.scss';

const messages = defineMessages({
  searchable_text_button: {
    id: 'search_map_searchable_text_button',
    defaultMessage: 'Cerca',
  },
  searchable_text_decription: {
    id: 'search_text_searchable_text_decription',
    defaultMessage: '*Inserisci parole chiave, ad esempio “Vaccinazioni”',
  },
});

const SearchBar = React.forwardRef(
  (
    {
      id,
      title,
      defaultTitle,
      textDescription,
      value = '',
      onChange,
      ariaControls,
      showSubmit = false,
    },
    ref,
  ) => {
    const intl = useIntl();
    const [searchableText, setSearchableText] = useState(value); //serve solo per fare il debounce

    const submit = () => {
      onChange(searchableText);
    };

    const onKeyDown = (e) => {
      if (e.key === 'Enter' && showSubmit) {
        submit();
      }
    };

    useDebouncedEffect(
      () => {
        if (!showSubmit) {
          if (searchableText != value) {
            submit();
          }
        }
      }, // eslint-disable-next-line react-hooks/exhaustive-deps
      600,
      [searchableText],
    );

    useEffect(() => {
      if (value != searchableText) {
        setSearchableText(value);
      }
    }, [value]);

    return (
      <div className="form-group search-bar-widget mb-3">
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
            aria-controls={ariaControls}
            onChange={(e) => setSearchableText(e.currentTarget.value)}
            onKeyDown={onKeyDown}
            ref={ref}
          />
          {showSubmit && (
            <div className="input-group-append">
              <Button color="accent" onClick={() => submit()}>
                {intl.formatMessage(messages.searchable_text_button)}
              </Button>
            </div>
          )}
        </div>
        <small className="form-text" id={id + 'searchable-text-description'}>
          {textDescription
            ? textDescription
            : intl.formatMessage(messages.searchable_text_decription)}
        </small>
      </div>
    );
  },
);

export default SearchBar;
