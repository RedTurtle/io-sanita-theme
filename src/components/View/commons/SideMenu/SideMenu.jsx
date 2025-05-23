/* ************
Costruisce il sidemenu in base alle sections strutturate nella parte destra del contenuto
**************/
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import throttle from 'lodash/throttle';
import cx from 'classnames';
import {
  Progress,
  Accordion,
  AccordionBody,
  AccordionHeader,
} from 'design-react-kit';
import config from '@plone/volto/registry';
import { scrollIntoView, getMainOffset } from 'io-sanita-theme/helpers';
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
  sideMenuNavigation: {
    id: 'sideMenuNavigation',
    defaultMessage: 'Navigazione della pagina',
  },
  progressBar: {
    id: 'sideMenuNavigation_progressBar',
    defaultMessage: 'Avanzamento della navigazione',
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
 * * @params {object} data: html data. Not required. Alternativelly you could pass 'calculeted_headers'
 * * @params {object} calculeted_headers: calulated headers. Not required. Alternativelly you could pass 'data'. Format: [{
          id: //identifier
          title: //text to display
          querySelector: //queryselector to use alternatively to 'id',
        }] 
 * @returns {string} Markup of the component.
 */
const SideMenu = ({ data, content_uid, calculeted_headers }) => {
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

  const activeItemTitle =
    headers.find((item) => item.id === activeSection)?.title ??
    headers?.[0]?.title ??
    intl.formatMessage(messages.progressBar);

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight * 0.1;
    const mainOffset = getMainOffset();
    setScrollY(window.scrollY);
    const headersHeights = headers
      .map((section) => {
        const selector = section.querySelector ?? '#' + section.id;
        const element = document.querySelector(selector);
        return {
          id: section.id,
          top: element?.getBoundingClientRect()?.top,
        };
      })
      // .filter((section) => section.top - mainOffset + 40 <= windowHeight);
      .filter((section) => section.top <= mainOffset + 20);

    if (headersHeights.length > 0) {
      const section = headersHeights.reduce(
        (prev, curr) => (prev.top > curr.top ? prev : curr),
        headers[0],
      );
      setActiveSection(section.id);
    }
  }, [headers, activeSection]);

  useEffect(() => {
    let _headers = null;

    if (data?.children) {
      _headers = extractHeaders(data.children, intl);
    } else if (calculeted_headers?.length > 0) {
      _headers = [...calculeted_headers];
    }
    if (_headers?.length > 0) {
      setHeaders(_headers);
      setActiveSection(_headers[0].id);
    }
  }, [data?.children, content_uid, calculeted_headers]);

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
  const yCountEnd = isClient
    ? document.querySelector('#main-content-section')
    : null;

  const handleClickAnchor = (id, querySelector) => (e) => {
    e.preventDefault();
    if (window.innerWidth < 992) {
      setIsNavOpen(false);
    }
    // Blur a link
    document.getElementById(`item-${id}`).blur();
    // Focus on section
    const selector = querySelector ?? '#' + id;
    document.querySelector(selector).focus({ preventScroll: true });
    // Scroll to section
    // setTimeout hack should wait for rerender after setIsNavOpen
    setTimeout(() => {
      const _id = querySelector ? null : id;
      const ref = querySelector ? document.querySelector(querySelector) : null;
      scrollIntoView({ id: _id, ref });
    });
  };

  const progressValue = useMemo(() => {
    if (!isClient) return 0;
    return yCountEnd
      ? (scrollY - (yCountEnd.offsetTop ?? 0)) / (yCountEnd.offsetHeight ?? 0)
      : 0;
  }, [scrollY, isClient]);

  const mainOffset = getMainOffset();

  return headers?.length > 0 ? (
    <div
      className="navbar-wrapper page-side-menu affix-top"
      style={{ top: mainOffset - 20 }}
    >
      <nav
        className="navbar it-navscroll-wrapper navbar-expand-lg"
        aria-label={intl.formatMessage(messages.sideMenuNavigation)}
      >
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
                  aria-expanded={isNavOpen}
                >
                  <h2>{intl.formatMessage(messages.index)}</h2>
                </AccordionHeader>

                <Progress
                  value={progressValue > 0 ? 100 * progressValue : 0}
                  role="progressbar"
                  aria-label={activeItemTitle}
                />

                <AccordionBody active={isNavOpen} id="side-menu-body">
                  <ul className="link-list" data-element="page-index">
                    {headers.map((item, i) => {
                      return (
                        <li className="nav-item" key={item.id}>
                          <a
                            className={cx('nav-link', {
                              active: item.id === activeSection,
                            })}
                            href={`#${item.id}`}
                            onClick={handleClickAnchor(
                              item.id,
                              item.querySelector,
                            )}
                            id={`item-${item.id}`}
                          >
                            <span id={item.title}>{item.title}</span>
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
