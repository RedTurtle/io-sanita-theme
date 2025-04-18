import {
  AGGREGATION_PAGE_ARGOMENTO,
  AGGREGATION_PAGE_TIPOLOGIA_UTENTE,
} from 'io-sanita-theme/config/ioSanitaConfig';
import { useHomePath } from 'io-sanita-theme/helpers';

export const getAggregationPageUrl = (type, value) => {
  const homepath = useHomePath();
  let href =
    homepath +
    (type === 'topics'
      ? AGGREGATION_PAGE_ARGOMENTO
      : AGGREGATION_PAGE_TIPOLOGIA_UTENTE) +
    value;
  href = href.replaceAll('//', '/');
  return href;
};
