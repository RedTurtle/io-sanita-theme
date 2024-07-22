import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Chip, ChipLabel } from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import { AGGREGATION_PAGE_TIPOLOGIA_UTENTE } from 'io-sanita-theme/config/ioSanitaConfig';

/**
 * TassonomiaUtenti view component class.
 * @function TassonomiaUtenti
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const TassonomiaUtenti = ({ content }) => {
  return content?.a_chi_si_rivolge_tassonomia_metadata?.length > 0 ? (
    <div className="mt-4 mb-4 page-topics">
      {content.a_chi_si_rivolge_tassonomia_metadata.map((item, i) => (
        <UniversalLink
          href={AGGREGATION_PAGE_TIPOLOGIA_UTENTE + item.token}
          key={item['@id']}
          className="text-decoration-none me-2 d-inline-block"
          data-element="service-topic"
        >
          <Chip color="accent" simple>
            <Icon icon="it-user" size="xs" />
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
