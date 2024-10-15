/* ************
Costruisce il sidemenu in base alle sections strutturate nella parte destra del contenuto
**************/
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { throttle } from 'lodash';
import cx from 'classnames';
import {
  Progress,
  Accordion,
  AccordionBody,
  AccordionHeader,
} from 'design-react-kit';
import config from '@plone/volto/registry';
import './_sideMenu.scss';

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

const extractHeaders = (elements, intl) => {
  let item;
  let headers = [];
  for (var index = 0; index < elements.length; index++) {
    item = elements[index];

    if (item.id === 'text-body') {
      headers.push({
        id: item.id,
        title:
          item.getAttribute('menu_title') ||
          intl.formatMessage(messages.contenuto),
        item: item,
      });
    } else {
      let item_header = item.querySelector('#header-' + item.id);
      if (item_header) {
        headers.push({
          id: item.id,
          title: item_header.textContent,
          item: item,
        });
      }
    }
  }
  return headers;
};

/**
 * SideMenu view component class.
 * @function SideMenu
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const SideMenu = ({ data, content_uid }) => {
  const intl = useIntl();

  const [headers, setHeaders] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(
    __CLIENT__ ? window.innerWidth >= 992 : false,
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollOffset = 0.1 * window.innerHeight;
    setScrollY(window.scrollY);
    const headersHeights = headers
      .map((section) => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          top: element?.getBoundingClientRect()?.top,
        };
      })
      .filter((section) => section.top <= scrollOffset);
    if (headersHeights.length > 0) {
      const section = headersHeights.reduce(
        (prev, curr) => (prev.top > curr.top ? prev : curr),
        headers[0],
      );
      setActiveSection(section.id);
    }
  }, [headers, activeSection]);

  useEffect(() => {
    if (data?.children) {
      const extractedHeaders = extractHeaders(data.children, intl);

      if (extractedHeaders.length > 0) {
        setHeaders(extractedHeaders);
        setActiveSection(extractedHeaders[0].id);
      }
    }
  }, [data?.children, content_uid]);

  useEffect(() => {
    if (headers.length > 0)
      window.addEventListener('scroll', throttledHandleScroll, {
        passive: true,
      });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [headers]);

  const throttledHandleScroll = throttle(handleScroll, 100);

  const handleClickAnchor = (id) => (e) => {
    e.preventDefault();
    if (window.innerWidth < 992) {
      setIsNavOpen(false);
    }
    // Blur a link
    document.getElementById(`item-${id}`).blur();
    // Focus on section
    document.getElementById(id).focus({ preventScroll: true });
    // Scroll to section
    // setTimeout hack should wait for rerender after setIsNavOpen
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView?.({
        behavior: 'smooth',
        block: 'start',
      });
    }, 0);
  };

  const yCountEnd = isClient
    ? document.querySelector('#main-content-section')
    : null;

  const progressValue = useMemo(() => {
    if (!isClient) return 0;
    return yCountEnd
      ? (scrollY - (yCountEnd.offsetTop ?? 0)) / (yCountEnd.offsetHeight ?? 0)
      : 0;
  }, [scrollY, isClient]);

  return headers?.length > 0 ? (
    <div className="navbar-wrapper page-side-menu affix-top ">
      <nav className="navbar it-navscroll-wrapper navbar-expand-lg">
        <div className="menu-wrapper py-0">
          <div className="link-list-wrapper menu-link-list">
            <div className="accordion-wrapper">
              <Accordion>
                <AccordionHeader
                  active={isNavOpen}
                  onToggle={() => {
                    setIsNavOpen(!isNavOpen);
                  }}
                  aria-controls="side-menu-body"
                >
                  <h3>{intl.formatMessage(messages.index)}</h3>
                </AccordionHeader>

                <Progress
                  value={progressValue > 0 ? 100 * progressValue : 0}
                  role="progressbar"
                />

                <AccordionBody
                  active={isNavOpen}
                  id="side-menu-body"
                  role="region"
                >
                  <ul className="link-list" data-element="page-index">
                    {headers.map((item, i) => {
                      return (
                        <li className="nav-item" key={item.id}>
                          <a
                            className={cx('nav-link', {
                              active: item.id === activeSection,
                            })}
                            href={`#${item.id}`}
                            onClick={handleClickAnchor(item.id)}
                            id={`item-${item.id}`}
                          >
                            <span>{item.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </nav>
    </div>
  ) : null;
};

export default SideMenu;

//Hook per avere i SideMenu elements di una pagina
export const useSideMenu = (content, documentBody) => {
  const [sideMenuElements, setSideMenuElements] = useState(null);
  const [observer, setObserver] = useState(null);
  const updateSideMenuOnLoadingBlocks = true;
  //forzato a true, perchè se è false, non funziona il render lato client
  // config.views?.ioSanitaContentTypesViewsConfig?.[content['@type']]
  //   ?.updateSideMenuOnLoadingBlocks ?? false;
  const SideMenuComponent =
    config.views?.ioSanitaContentTypesViewsConfig?.[content['@type']]
      ?.sideMenu ?? SideMenu;

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setSideMenuElements(documentBody.current);
      }
    }
  }, [content.description, content.title, documentBody]);

  //observer is needed for loadable blocks like listing and rss, if you want to use their title's for SideMenu

  useEffect(() => {
    if (!updateSideMenuOnLoadingBlocks) return;

    if (!observer) {
      const obs = updateSideMenuOnLoadingBlocks
        ? new MutationObserver((mutationList) => {
            setSideMenuElements(documentBody.current);
          })
        : null;
      setObserver(obs);
    }
    if (observer) {
      observer.observe(documentBody.current, {
        //attributes: true,
        childList: true,
        subtree: true,
      });
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, setObserver, documentBody, updateSideMenuOnLoadingBlocks]);

  return { sideMenuElements, setSideMenuElements, SideMenu: SideMenuComponent };
};
