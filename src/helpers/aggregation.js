import {
  AGGREGATION_PAGE_ARGOMENTO,
  AGGREGATION_PAGE_TIPOLOGIA_UTENTE,
} from 'io-sanita-theme/config/ioSanitaConfig';
export const getAggregationPageUrl = (homepath, type, value) => {
  let href =
    homepath +
    (type === 'topics'
      ? AGGREGATION_PAGE_ARGOMENTO
      : AGGREGATION_PAGE_TIPOLOGIA_UTENTE) +
    value;
  href = href.replaceAll('//', '/');
  return href;
};
