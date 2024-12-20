/**
 * Login container.
 * @module components/theme/Login/Login
 */

import React from 'react';
import { compose } from 'redux';
import { defineMessages, useIntl } from 'react-intl';
import { withRouter, useLocation } from 'react-router-dom';
import { Row, Col, Container, Button } from 'design-react-kit';

import { getBaseUrl } from '@plone/volto/helpers/Url/Url';
import Helmet from '@plone/volto/helpers/Helmet/Helmet';
import { Login } from '@plone/volto/components';

import { LoginAgidButtons } from 'io-sanita-theme/components';

const messages = defineMessages({
  login: {
    id: 'login_agid',
    defaultMessage: 'Log in',
  },
  loginOtherDescription: {
    id: 'login_agid_other_description',
    defaultMessage: 'Alternatively you can use these methods.',
  },
  loginDescription: {
    id: 'login_agid_description',
    defaultMessage:
      'To access the site and its services, use one of the following methods.',
  },
  loginPloneUser: {
    id: 'login_plone_user',
    defaultMessage: 'Log in as employee',
  },
  loginOther: {
    id: 'login_agid_other',
    defaultMessage: 'Other users',
  },
});

// https://v5.reactrouter.com/web/example/query-parameters
function useQueryV5() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const LoginAgid = (props) => {
  const intl = useIntl();
  const query = useQueryV5();

  const spidLoginUrl = __CLIENT__
    ? window.env.RAZZLE_SPID_LOGIN_URL
    : process.env.RAZZLE_SPID_LOGIN_URL;
  const showFormLogin = !spidLoginUrl || query.get('login_operatore');
  const location = useLocation();
  const came_from =
    query.get('came_from') ||
    props.origin ||
    `${getBaseUrl(location.pathname)}${location.search}` ||
    '/';

  return (
    <>
      {showFormLogin ? (
        <Login {...props}></Login>
      ) : (
        <div id="page-login">
          <Helmet title={intl.formatMessage(messages.login)} />

          <Container className="view-wrapper py-5">
            <Row className="view-container">
              <Col xs={12} lg={{ size: 10, offset: 1 }}>
                <h1 sans-serfif="true">{intl.formatMessage(messages.login)}</h1>
                <p className="description">
                  {intl.formatMessage(messages.loginDescription)}
                </p>
              </Col>
            </Row>
            <hr className="d-none d-lg-block mt-0 mb-4" />
            <Row>
              <Col xs={12} lg={{ size: 8, offset: 2 }}>
                <LoginAgidButtons origin={came_from} />
                <div className="login-method">
                  <h3>{intl.formatMessage(messages.loginOther)}</h3>
                  <p className="description">
                    {intl.formatMessage(messages.loginOtherDescription)}
                  </p>
                  <div className="unauthorized-spid-login">
                    <Button
                      color="primary"
                      outline
                      href={`/login?${new URLSearchParams({
                        login_operatore: 1,
                        return_url: came_from,
                      }).toString()}`}
                      tag="button"
                    >
                      <span>{intl.formatMessage(messages.loginPloneUser)}</span>
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default compose(withRouter)(LoginAgid);
