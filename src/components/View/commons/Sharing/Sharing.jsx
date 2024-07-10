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

import { toPublicURL } from '@plone/volto/helpers';
import { Icon } from 'io-sanita-theme/components';
import './sharing.scss';

/**
 * Sharing view component class.
 * @function Sharing
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  share: {
    id: 'share',
    defaultMessage: 'Condividi',
  },
  print: {
    id: 'print',
    defaultMessage: 'Stampa',
  },
  mailto: {
    id: 'mailto',
    defaultMessage: 'Invia',
  },
});

const Sharing = ({ url, title }) => {
  const intl = useIntl();
  const publicUrl = toPublicURL(url);
  const socials = [
    {
      id: 'facebook',
      title: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${publicUrl}`,
      icon: 'it-facebook',
    },
    {
      id: 'twitter',
      title: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${publicUrl}`,
      icon: 'it-twitter',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${publicUrl}&title=${publicUrl}`,
      icon: 'it-linkedin',
    },
    {
      id: 'whatsapp',
      title: 'Whatsapp',
      url: `https://api.whatsapp.com/send?phone=&text=${publicUrl}`,
      icon: 'it-whatsapp',
    },
    {
      id: 'telegram',
      title: 'Telegram',
      url: `https://t.me/share/url?url=${publicUrl}&text=${title}`,
      icon: 'telegram',
    },
    {
      id: 'print',
      attributes: null,
      title: intl.formatMessage(messages.print),
      url: null,
      icon: 'it-print',
    },
    {
      id: 'mailto',
      attributes: null,
      title: intl.formatMessage(messages.mailto),
      url: `mailto:?subject=${title}&body=${publicUrl}`,
      icon: 'it-mail',
      target: null,
    },
  ];

  const handlePrint = (e) => {
    e.preventDefault();
    return window.print();
  };

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
    <UncontrolledDropdown className="d-inline page-sharing">
      <DropdownToggle
        className={`btn btn-dropdown ps-0`}
        color=""
        tag={'button'}
        caret
      >
        <Icon
          className={'me-2'}
          color=""
          icon="it-share"
          padding={false}
          size=""
          alt={intl.formatMessage(messages.share)}
          title={intl.formatMessage(messages.share)}
        />
        <small>{intl.formatMessage(messages.share)}</small>
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          {socials.map((item, i) => (
            <LinkListItem
              href={item.url}
              key={item.id}
              target="_target"
              role="menuitem"
              tabIndex={-1}
              onKeyDown={handleKeyDown}
            >
              {item.id === 'print' ? (
                <Button
                  icon={false}
                  title={item.title}
                  alt={item.title}
                  aria-label={item.title}
                  tag="button"
                  id={item.id}
                  onClick={handlePrint}
                  color="link"
                  className="px-0"
                >
                  <Icon
                    className={undefined}
                    color=""
                    icon={item.icon}
                    padding={false}
                    size=""
                    alt={item.title}
                    title={item.title}
                  />
                  <span>{item.title}</span>
                </Button>
              ) : (
                <>
                  <Icon
                    className={undefined}
                    color=""
                    icon={item.icon}
                    padding={false}
                    size=""
                    alt={item.title}
                    title={item.title}
                  />
                  <span>{item.title}</span>
                </>
              )}
            </LinkListItem>
          ))}
        </LinkList>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default Sharing;

Sharing.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),
};
