import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Chip, ChipLabel } from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';

/**
 * PageHeaderTassonomiaArgomenti view component class.
 * @function PageHeaderTassonomiaArgomenti
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  topics: {
    id: 'topics',
    defaultMessage: 'Argomenti',
  },
});

const PageHeaderTassonomiaArgomenti = ({ content }) => {
  const intl = useIntl();

  return content?.tassonomia_argomenti?.length > 0 ? (
    <div className="mt-4 mb-4 page-arguments">
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
          <Chip color="primary" disabled={false} large={false} simple tag="div">
            <ChipLabel tag="span">{item.title}</ChipLabel>
          </Chip>
        </UniversalLink>
      ))}
    </div>
  ) : null;
};

export default PageHeaderTassonomiaArgomenti;

PageHeaderTassonomiaArgomenti.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
