import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Chip, ChipLabel} from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';

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

const Topics = ({ content }) => {
  const intl = useIntl();

  return content?.tassonomia_argomenti?.length > 0 ? (
    <div className="mt-4 mb-4 page-topics">
      <h5>
        <small>{intl.formatMessage(messages.topics)}</small>
      </h5>
      {content.tassonomia_argomenti.map((item, i) => (
        <UniversalLink
          item={item}
          key={item['@id']}
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
