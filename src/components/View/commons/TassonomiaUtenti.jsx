import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Chip, ChipLabel} from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';

/**
 * TassonomiaUtenti view component class.
 * @function TassonomiaUtenti
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const TassonomiaUtenti = ({ content }) => {
  //TO DO: capire cosa arriva da BE
  return content?.tipologia_target?.length > 0 ? (
    <div className="mt-4 mb-4 page-topics">
      {content.tipologia_target.map((item, i) => (
        <UniversalLink
          item={item}
          key={item['@id']} // TO DO: capire se nella url aggiungere "/utenti/{id del link}"
          className="text-decoration-none me-2 d-inline-block"
          data-element="service-topic"
        >
          <Chip color="accent" simple>
            <Icon
              icon="it-user"
              size="xs"
            />
            <ChipLabel>{item.title}</ChipLabel>
          </Chip>
        </UniversalLink>
      ))}
    </div>
  ) : null;
};

export default TassonomiaUtenti;

TassonomiaUtenti.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
