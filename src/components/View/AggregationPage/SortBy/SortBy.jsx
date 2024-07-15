import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem,
  Button,
} from 'design-react-kit';
import { Icon } from 'io-sanita-theme/components';

/**
 * Dropdown view component class.
 * @function Dropdown
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const messages = defineMessages({
  sort: {
    id: 'sort_by',
    defaultMessage: 'Ordina per',
  },
  sort_title: {
    id: 'sort_name',
    defaultMessage: 'Nome',
  },
  sort_argument: {
    id: 'sort_argument',
    defaultMessage: 'Argomento',
  },
});

const SortBy = ({ action }) => {
  const intl = useIntl();

  const options = [
    {
      id: 'title',
      title: intl.formatMessage(messages.sort_title),
    },
    {
      id: 'argument',
      title: intl.formatMessage(messages.sort_argument),
    },
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.code === 'Space') {
      const childElement = e.target.firstChild;
      if (childElement.tagName === 'BUTTON' || childElement.tagName === 'A') {
        // La libreria del dropdown ha dei problemi nel suo focus manager interno.
        // Enter e spazio chiudono il menu, quindi fermiamo il bubbling (per chiudere si usa esc,
        // come correttamente dichiarato dallo screen reader), poi simuliamo il click
        e.stopPropagation();
        childElement.click();
      }
    }
  };

  return (
    <UncontrolledDropdown>
      <DropdownToggle color="primary" outline caret>
        <small>{intl.formatMessage(messages.sort)}</small>{' '}
        <Icon color="primary" icon="it-expand" padding={false} size="sm" />
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          {options.map((item, i) => (
            <LinkListItem
              key={item.id}
              target="_target"
              role="menuitem"
              tabIndex={-1}
              onKeyDown={handleKeyDown}
            >
              <Button
                title={item.title}
                alt={item.title}
                aria-label={item.title}
                tag="button"
                id={item.id}
                onClick={() => {
                  action(item.id);
                }}
                color="link"
                className="px-0"
              >
                <span>{item.title}</span>
              </Button>
            </LinkListItem>
          ))}
        </LinkList>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default SortBy;
