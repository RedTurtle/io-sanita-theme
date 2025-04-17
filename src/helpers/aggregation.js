import {
  AGGREGATION_PAGE_ARGOMENTO,
  AGGREGATION_PAGE_TIPOLOGIA_UTENTE,
} from 'io-sanita-theme/config/ioSanitaConfig';

export const getAggregationPageUrl = (type, value) => {
  let href =
    (type === 'topics'
      ? AGGREGATION_PAGE_ARGOMENTO
      : AGGREGATION_PAGE_TIPOLOGIA_UTENTE) + value;
  return href;
};
