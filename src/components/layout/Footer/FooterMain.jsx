/**
 * FooterMain component.
 * @module components/Footer/FooterMain
 */

import React from 'react';
import { Container, Row, Col } from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import {
  FooterNavigation,
  FooterInfos,
  LogoFooter,
  BrandTextFooter,
} from 'io-sanita-theme/components/';

import { FooterTop } from 'volto-editablefooter';

/**
 * FooterMain component class.
 * @class FooterMain
 * @extends Component
 */
const FooterMain = () => {
  const footerTopContent = FooterTop();
  const footerNavigation = FooterNavigation();
  return (
    <div className="it-footer-main">
      <Container tag="div">
        <section>
          <Row className="clearfix" tag="div">
            <Col sm={12} tag="div" widths={['xs', 'sm', 'md', 'lg', 'xl']}>
              <div className="it-brand-wrapper">
                {footerTopContent ?? (
                  <>
                    <UniversalLink href="/">
                      <LogoFooter />
                      <BrandTextFooter />
                    </UniversalLink>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </section>

        {footerNavigation && <section>{footerNavigation}</section>}

        <section>
          <FooterInfos />
        </section>
      </Container>
    </div>
  );
};

export default FooterMain;
