import React from 'react';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  text_filter_placeholder: {
    id: 'text_filter_placeholder',
    defaultMessage: 'Inserisci un valore',
  },
});

const TextFilter = ({ value, id, onChange, placeholder }) => {
  const intl = useIntl();
  return (
    <div className="filter-wrapper text-filter">
      <input
        type="text"
        placeholder={
          placeholder || intl.formatMessage(messages.text_filter_placeholder)
        }
        value={value}
        onChange={(e, data) => {
          onChange(id, e.target.value ?? '');
        }}
      />
    </div>
  );
};

export default TextFilter;
