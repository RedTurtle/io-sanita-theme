/**
 * HeaderContacts component.
 * @module components/ItaliaTheme/Header/HeaderContacts/HeaderContacts
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'io-sanita-theme/components';

import './headerContacts.scss';

const HeaderContacts = () => {
  //esempio items - arriverà via props
  const items = [
    { text: 'testo 1', href: '0239238348', href_type: 'tel' },
    { text: 'testo 2', href: '0239321312', href_type: 'tel' },
    { text: 'testo 3', href: '0236456546', href_type: 'tel' },
  ];
  return (
    items && (
      <div class="header-contacts">
        <div class="container">
          <div class="row">
            {items.map((item, index) => (
              <div class="col col-sm" key={'header-contact' + index}>
                <spam>{item?.text}</spam>
                <UniversalLink href={item.href} className={item?.href}>
                  {item?.href}
                </UniversalLink>
                <Icon
                  icon={item.href_type === 'tel' ? 'it-telephone' : 'it-link'}
                  size="sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default HeaderContacts;
