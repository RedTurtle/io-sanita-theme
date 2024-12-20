import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { Container, Row, Col } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { Icon } from 'io-sanita-theme/components';
import { CardImage } from 'io-sanita-theme/components';

const SITE_SECTIONS = {
  amministrazione: { icon: 'it-pa' },
  novita: { icon: 'it-calendar' },
  servizi: { icon: 'it-settings' },
  'documenti-e-dati': { icon: 'it-file' },
};

const messages = defineMessages({
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  },
  amministrazione: {
    id: 'amministrazione',
    defaultMessage: 'Amministrazione',
  },
  servizi: {
    id: 'servizi',
    defaultMessage: 'Servizi',
  },
  novita: {
    id: 'novita',
    defaultMessage: 'Novità',
  },
  'documenti-e-dati': {
    id: 'documenti-e-dati',
    defaultMessage: 'Documenti e dati',
  },
});

/**
 * RelatedItems view component class.
 * @function RelatedItems
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const RelatedItems = ({ content, list = [], children }) => {
  const intl = useIntl();

  let sections = {};

  const related_items_content =
    content?.relatedItems?.length > 0 ? [...content.relatedItems] : [];

  let related = [...related_items_content, ...list];

  if (related?.length > 0) {
    related.forEach((item) => {
      let itemSection = flattenToAppURL(item['@id']).split('/')[1];
      if (Object.keys(SITE_SECTIONS).indexOf(itemSection) >= 0) {
        if (!sections[itemSection]) {
          sections[itemSection] = [];
        }
        sections[itemSection].push(item);
      }
    });
  }

  return related?.length > 0 || children ? (
    <section id="contenuti-correlati">
      <section className="section section-muted section-inset-shadow">
        <div className="section-content">
          <Container>
            <Row>
              <Col className="text-center">
                <h3>{intl.formatMessage(messages.related_items)}</h3>
              </Col>
            </Row>
            <Row className="mt-lg-4">
              {related.map((item, i) => (
                <Col md={4} key={item['@id'] + i} className="mb-3">
                  <CardImage item={item} />
                </Col>
              ))}
            </Row>
            {children}
          </Container>
        </div>
      </section>
    </section>
  ) : null;
};

export default RelatedItems;

RelatedItems.propTypes = {
  content: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    relatedItems: PropTypes.array,
  }),
  children: PropTypes.any,
};
