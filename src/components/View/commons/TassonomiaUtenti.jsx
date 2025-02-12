import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Chip, ChipLabel } from 'design-react-kit';

import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { Icon } from 'io-sanita-theme/components';
import { AGGREGATION_PAGE_TIPOLOGIA_UTENTE } from 'io-sanita-theme/config/ioSanitaConfig';

/**
 * TassonomiaUtenti view component class.
 * @function TassonomiaUtenti
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const TassonomiaUtenti = ({ content }) => {
  const list =
    content?.a_chi_si_rivolge_tassonomia_metadata ??
    content?.a_chi_si_rivolge_tassonomia; // la tassonomia utenti può esssere in uno di questi due campi, a seconda di dove arriva l'oggetto principale (brain o load)

  return list?.length > 0 ? (
    <div className="mt-4 mb-4 page-topics">
      {list?.map((item, i) => {
        const title_split = item.title.split(' » ');
        const title = title_split[title_split.length - 1];

        return (
          <UniversalLink
            href={AGGREGATION_PAGE_TIPOLOGIA_UTENTE + item.token}
            key={item.token}
            className="text-decoration-none me-2 d-inline-block"
            //data-element="service-topic"
          >
            <Chip color="accent" simple>
              <Icon
                icon="it-user"
                size="xs"
                className="icon-accent"
                aria-hidden={true}
              />
              <ChipLabel>{title}</ChipLabel>
            </Chip>
          </UniversalLink>
        );
      })}
    </div>
  ) : null;
};

export default TassonomiaUtenti;

TassonomiaUtenti.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
