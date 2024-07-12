/* ************
Costruisce il sidemenu in base alle sections passate come parametro
**************/
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { throttle } from 'lodash';
import cx from 'classnames';
import { Sidebar, LinkList, LinkListItem } from 'design-react-kit';
import config from '@plone/volto/registry';

const messages = defineMessages({
  index: {
    id: 'index',
    defaultMessage: 'Indice della pagina',
  },
  contenuto: {
    id: 'Contenuto',
    defaultMessage: 'Contenuto',
  },
});

/**
 * SideMenu view component class.
 * @function SideMenu
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const SideMenu = ({ sections }) => {
  /*
  sections=[
    {id:'tutti',title:'Tutti',type:null},
    {id:'servizi',title:'Servizi',type:'Servizio'}
  ]*/
  const intl = useIntl();

  const [activeSection, setActiveSection] = useState(null);

  const [isNavOpen, setIsNavOpen] = useState(
    __CLIENT__ ? window.innerWidth >= 992 : false,
  );

  useEffect(() => {
    setActiveSection(sections[0].id);
  }, [sections]);

  const handleClickAnchor = (item) => (e) => {
    e.preventDefault();
    if (window.innerWidth < 992) {
      setIsNavOpen(false);
    }

    //ToDo
    alert(
      'Fare la chiamata al backend per caricare i dati giusti per ' + item.type,
    );
  };

  //Todo: gestire la visualizzazione su mobile
  return sections?.length > 0 ? (
    <div className="page-side-menu affix-top ">
      <Sidebar right>
        <LinkList>
          {sections.map((item, i) => {
            return (
              <LinkListItem
                active={item.id === activeSection}
                bold
                onClick={handleClickAnchor(item)}
                href={`#${item.id}`}
              >
                <span>{item.title}</span>
              </LinkListItem>
            );
          })}
        </LinkList>
      </Sidebar>
    </div>
  ) : null;
};

export default SideMenu;
