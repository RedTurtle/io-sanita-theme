import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Chip, ChipLabel } from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import { AGGREGATION_PAGE_ARGOMENTO } from 'io-sanita-theme/config/ioSanitaConfig';

/**
 * Topics view component class.
 * @function Topics
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  topics: {
    id: 'page_topics',
    defaultMessage: 'PARLIAMO DI',
  },
});

const Topics = ({ content, titleTag = 'h3' }) => {
  const intl = useIntl();
  const list = content.parliamo_di_metadata ?? content.parliamo_di; // gli argomenti possono esssere in uno di questi due campi, a seconda di dove arriva l'oggetto principale (brain o load)

  const Tag = ({ tagName, children, ...props }) =>
    React.createElement(tagName, props, children);

  return list?.length > 0 ? (
    <div className="mt-4 mb-5 page-topics">
      <Tag tagName={titleTag} className="h5">
        <small>{intl.formatMessage(messages.topics)}</small>
      </Tag>
      {list.map((item, i) => (
        <UniversalLink
          href={AGGREGATION_PAGE_ARGOMENTO + item.token}
          key={item.token}
          className="text-decoration-none me-2 d-inline-block"
          data-element="service-topic"
        >
          <Chip color="accent" simple>
            <ChipLabel>{item.title}</ChipLabel>
          </Chip>
        </UniversalLink>
      ))}
    </div>
  ) : null;
};

export default Topics;

Topics.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
