/**
 * ReleaseLog component.
 * @module components/ReleaseLog/ReleaseLog
 */

import React, { useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'design-react-kit';
import { Helmet } from '@plone/volto/helpers';
import { marked } from 'marked';

import './ReleaseLog.css';
const messages = defineMessages({
  current: {
    id: 'currentActive',
    defaultMessage: 'attivo',
  },
});
const ReleaseLog = () => {
  const intl = useIntl();
  let ReleaseIoSanita = null;
  try {
    ReleaseIoSanita = require('io-sanita-theme/../RELEASE.md');
  } catch {
    console.log("io-sanita-theme/../RELEASE.md doesn't exists");
  }

  const LOGS_TO_VIEW = [{ name: 'io-Sanita', file: ReleaseIoSanita }];

  const [activeTab, toggleTab] = useState(LOGS_TO_VIEW[0].name);
  const [logIST, setLogIST] = useState('');

  useEffect(() => {
    if (ReleaseIoSanita) {
      try {
        fetch(ReleaseIoSanita)
          .then((res) => res.text())
          .then((text) => {
            setLogIST(marked(text));
          });
      } catch {
        console.log(ReleaseIoSanita + ' not found.');
      }
    }
  }, []);

  const viewTab = (tab) => {
    if (activeTab !== tab) {
      toggleTab(tab);
    }
  };

  return (
    <div className="public-ui">
      <Helmet title="Release LOG" />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Container className="px-4 my-4 release-log">
        <h1>Lista degli aggiornamenti</h1>
        <Nav tabs className="mb-3">
          {LOGS_TO_VIEW.filter((log) => log.file != null).map((log) => (
            <NavItem key={log.name}>
              <NavLink
                href="#"
                active={activeTab === log.name}
                onClick={() => viewTab(log.name)}
              >
                <span>{log.name}</span>
                {activeTab === log.name && (
                  <span className="visually-hidden">
                    {intl.formatMessage(messages.current)}
                  </span>
                )}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <TabContent activeTab={activeTab}>
          {LOGS_TO_VIEW.filter((log) => log.file != null).map((log) => (
            <TabPane
              tabId={log.name}
              className="p-3"
              key={log.name + 'tabcontent'}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: log.name === 'io-Sanita' ? logIST : <div></div>,
                }}
              ></div>
            </TabPane>
          ))}
        </TabContent>
      </Container>
    </div>
  );
};

export default ReleaseLog;
