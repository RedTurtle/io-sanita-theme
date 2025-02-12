import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import { Icon } from 'io-sanita-theme/components';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  LinkList,
  LinkListItem,
  Button,
} from 'design-react-kit';

/* STYLE */
import './_sortByWidget.scss';

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
  sortable_title: {
    id: 'sort_name',
    defaultMessage: 'Alfabeticamente',
  },
  relevance: {
    id: 'sort_relevance',
    defaultMessage: 'Rilevanza',
  },
  Date: {
    id: 'sort_Date',
    defaultMessage: 'Data (prima i più recenti)',
  },
});

const SortByWidget = ({
  order,
  action,
  ariaControls,
  options = [
    {
      sort_on: 'relevance',
      sort_order: 'ascending',
    },
    {
      sort_on: 'sortable_title',
      sort_order: 'ascending',
    },
    {
      sort_on: 'Date',
      sort_order: 'descending',
    },
  ],
}) => {
  const intl = useIntl();

  // default titles
  options.forEach((item, index) => {
    if (!item.title) {
      if (messages[item.sort_on]) {
        options[index].title = intl.formatMessage(messages[item.sort_on]);
      } else {
        options[index].title = item.sort_on;
      }
    }
  });

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
    <UncontrolledDropdown className="sort-by-widget">
      <DropdownToggle color="primary" outline caret className="px-3 px-lg-4">
        <small>{intl.formatMessage(messages.sort)}</small>{' '}
        <Icon
          color="primary"
          icon="it-expand"
          padding={false}
          size="sm"
          aria-hidden={true}
        />
      </DropdownToggle>
      <DropdownMenu>
        {/* <LinkList> */}
        {options.map((item, i) => (
          <DropdownItem
            key={item.sort_on}
            target="_target"
            role="menuitem"
            //tabIndex={-1}
            aria-controls={ariaControls}
            aria-label={item.title}
            active={order?.sort_on === item.sort_on}
            title={item.title}
            alt={item.title}
            id={item.sort_on}
            onKeyDown={handleKeyDown}
            onClick={() => {
              action(item);
            }}
          >
            <span>{item.title}</span>
          </DropdownItem>
        ))}
        {/* </LinkList> */}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default SortByWidget;
