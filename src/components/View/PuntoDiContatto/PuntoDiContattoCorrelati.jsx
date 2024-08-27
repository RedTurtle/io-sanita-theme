import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Chip, ChipLabel } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { pick } from 'lodash';

const messages = defineMessages({
  correlati: {
    id: 'pdc_correlati',
    defaultMessage: 'Correlati',
  },
  strutture_correlate: {
    id: 'pdc_strutture_correlate',
    defaultMessage: 'Strutture',
  },
  servizi_correlati: {
    id: 'pdc_servizi_correlati',
    defaultMessage: 'Servizi',
  },
  persone_correlate: {
    id: 'pdc_persone_correlate',
    defaultMessage: 'Persone',
  },
  eventi_correlati: {
    id: 'pdc_eventi_correlati',
    defaultMessage: 'Eventi',
  },
  uo_correlata: {
    id: 'pdc_uo_correlata',
    defaultMessage: 'Unità operative',
  },
});

const PuntoDiContattoCorrelati = ({ content }) => {
  const intl = useIntl();
  const fieldLists = [
    'strutture_correlate',
    'servizi_correlati',
    'eventi_correlati',
    'persone_correlate',
    'uo_correlata'
  ];

  const relatedCategories = pick(content, fieldLists);

  return Object.values(relatedCategories)?.some((v) => v.length > 0) ? (
    <RichTextSection
      tag_id="correlati"
      title={intl.formatMessage(messages.correlati)}
    >
      {Object.keys(relatedCategories)?.map((key, i) => (
        <section
          id={key}
          className="it-page-section anchor-offset my-4"
          key={key}
        >
          <h3 id={`header-${key}`} className="h5">
            {intl.formatMessage(messages[key])}
          </h3>
          <div className={key} key={key + i}>
            {content?.[key]?.map((item, _i) => (
              <Link
                to={flattenToAppURL(item['@id'])}
                key={`${item['@id']}-${_i}`}
                title={item.title}
                className="text-decoration-none me-2"
              >
                <Chip
                  color="primary"
                  disabled={false}
                  large={false}
                  simple
                  tag="div"
                  key={_i}
                >
                  <ChipLabel tag="span">{item.title}</ChipLabel>
                </Chip>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </RichTextSection>
  ) : (
    <></>
  );
};

export default PuntoDiContattoCorrelati;
