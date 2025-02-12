import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from 'io-sanita-theme/components';

const messages = defineMessages({
  successivo: {
    id: 'successivo',
    defaultMessage: 'Successivo',
  },
});

export default function NextArrow(props) {
  const intl = useIntl();
  const { className, style, onClick, onKeyDown, title, id } = props;
  const _title = title ?? intl.formatMessage(messages.successivo);
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      title={_title}
      aria-label={_title}
      aria-hidden={false}
      onKeyDown={onKeyDown}
      id={id}
    >
      <Icon icon="chevron-right" key="chevron-right" aria-hidden={true} />
      <span className="visually-hidden">{_title}</span>
    </button>
  );
}
