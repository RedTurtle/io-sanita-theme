/* ************
Costruisce il sidemenu in base alle sections passate come parametro
**************/
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useState, useCallback } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import throttle from 'lodash/throttle';
import cx from 'classnames';
import {
  Sidebar,
  LinkList,
  LinkListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionItem,
} from 'design-react-kit';
import config from '@plone/volto/registry';

const messages = defineMessages({
  contenuto: {
    id: 'Contenuto',
    defaultMessage: 'Contenuto',
  },
  content_types: {
    id: 'Tipi di contenuto',
    defaultMessage: 'Tipi di contenuto',
  },
});

/**
 * SideMenu view component class.
 * @function SideMenu
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const SideMenu = ({ sections, selected, setSelected }) => {
  /*
  sections=[
    {id:'tutti',title:'Tutti',type:null},
    {id:'servizi',title:'Servizi',type:'Servizio'}
  ]*/
  const intl = useIntl();

  const [isNavOpen, setIsNavOpen] = useState(
    true,
    // __CLIENT__ ? window.innerWidth >= 992 : false,
  );
  const isMobile = __CLIENT__ ? window.innerWidth < 992 : false;

  const handleClickAnchor = (item) => (e) => {
    e.preventDefault();
    // if (window.innerWidth < 992) {
    //   setIsNavOpen(false);
    // }
    setSelected(item.type);
  };

  //Todo: gestire la visualizzazione su mobile
  return sections?.length > 0 ? (
    <div className="page-side-menu affix-top ">
      <Sidebar right className="py-0">
        <Accordion>
          <AccordionItem>
            <AccordionHeader
              active={isNavOpen}
              onToggle={() => {
                setIsNavOpen(!isNavOpen);
              }}
              aria-controls="side-menu-body"
              className={!isMobile ? 'd-none' : ''}
            >
              <h3 className="px-0">
                {intl.formatMessage(messages.content_types)}
              </h3>
            </AccordionHeader>

            <AccordionBody active={isNavOpen} id="side-menu-body" role="region">
              <LinkList data-element="page-index">
                {sections.map((item, i) => {
                  return (
                    <LinkListItem
                      active={item.type === selected}
                      bold
                      onClick={handleClickAnchor(item)}
                      href={`#${item.type}`}
                      key={i}
                      aria-controls="main-content-section"
                    >
                      <span>{item.title}</span>
                    </LinkListItem>
                  );
                })}
              </LinkList>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </Sidebar>
    </div>
  ) : null;
};

export default SideMenu;
