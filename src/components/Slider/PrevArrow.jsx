import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from 'io-sanita-theme/components';

const messages = defineMessages({
  precedente: {
    id: 'precedente',
    defaultMessage: 'Precedente',
  },
});

export default function PrevArrow(props) {
  const intl = useIntl();
  const { className, style, onClick, onKeyDown, title, id } = props;

  const _title = title ?? intl.formatMessage(messages.precedente);

  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      title={_title}
      aria-label={_title}
      aria-hidden={false}
      id={id}
      onKeyDown={onKeyDown}
    >
      <Icon icon="chevron-left" key="chevron-left-prev" aria-hidden={true} />
      <span className="visually-hidden">{_title}</span>
    </button>
  );
}
