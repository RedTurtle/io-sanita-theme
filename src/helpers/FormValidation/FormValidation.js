import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import { serializeNodesToText } from '@plone/volto-slate/editor/render';

/**
 * Verifica se un valore slate (array di nodi) contiene del testo.
 * Gestisce anche il caso di valore stringa (contenuti legacy).
 * @param {Array|string} value valore slate o stringa
 * @returns {boolean}
 */
const slateValueHasText = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  if (!Array.isArray(value)) {
    return false;
  }
  return serializeNodesToText(value).trim().length > 0;
};

/**
 * Verifica se un blocco "porta contenuto" ai fini della validazione di un
 * campo a blocchi obbligatorio.
 * - per i blocchi che prevedono del testo (slate, text, table, slateTable,
 *   callout, html) richiede che il testo sia effettivamente presente: es. un
 *   blocco Callout senza testo non rende il campo compilato;
 * - per gli altri blocchi (immagine, video, break, rss, contenuto da
 *   replicare, ...) la sola presenza del blocco è considerata contenuto valido.
 * @param {object} block
 * @returns {boolean}
 */
const blockHasContent = (block) => {
  switch (block?.['@type']) {
    case 'slate':
      return !!block?.plaintext?.trim()?.length;
    case 'text':
      return !!block?.text?.blocks?.filter((b) => !!b.text.trim())?.length;
    case 'table':
      // tabella DraftJS legacy: almeno una cella con testo
      return !!block?.table?.rows?.some((row) =>
        row?.cells?.some((cell) =>
          cell?.value?.blocks?.some((b) => !!b?.text?.trim()),
        ),
      );
    case 'slateTable':
      // tabella slate: almeno una cella con testo
      return !!block?.table?.rows?.some((row) =>
        row?.cells?.some((cell) => slateValueHasText(cell?.value)),
      );
    case 'callout_block':
      // il callout è compilato se ha testo nel titolo o nel corpo
      return slateValueHasText(block?.title) || slateValueHasText(block?.text);
    case 'html':
      return !!block?.html?.trim()?.length;
    default:
      // qualsiasi altro blocco (immagine, video, break, rss, ...): la presenza
      // del blocco è contenuto valido, coerentemente con richTextHasContent
      return true;
  }
};

export const blocksFieldIsEmpty = (field) => {
  return filter(field?.blocks, blockHasContent)?.length === 0;
};

/**
 * Get if field is really empty or not.
 * Fixes ObjectBrowser bug not updating formData in realtime
 * and breaking validation next. We fixed validation not being called
 * onBlur bug, but the sum of bugs makes a feature and without
 * this fix, validation is broken for all ObjectBrowser fields
 * @param {object} formData formData values
 * @param {object} touchedField contains info on touched fields
 * @param {string} field required field reference to update
 * @param {string} type field type
 * @param {string} widget widget type
 */
export const getRealEmptyField = (
  formData,
  touchedField,
  field,
  type,
  widget,
) => {
  if (type === 'array' && widget !== 'data_grid') {
    if (field in touchedField) {
      // Fixes ObjectBrowser Volto bug: not updating formData in realtime
      formData[field] = touchedField[field];
    }
    return isEmpty(formData[field]);
  } else if (type === 'dict' && widget === 'blocks') {
    const firstBlock = formData?.[field]?.blocks_layout?.items?.[0];
    return (
      // se non ci sono blocchi (improbabile)
      firstBlock === undefined ||
      // se non c'è alcun blocco di testo o tabella che contenga testo
      blocksFieldIsEmpty(formData[field])
    );
  } else if (type === 'string' && widget === 'richtext') {
    return !(formData?.[field]?.data?.replace(/(<([^>]+)>)/g, '').length > 0);
  } else if (type === 'integer') {
    return formData?.[field] === null || formData?.[field] === undefined;
  } else {
    return isEmpty(formData[field]);
  }
};
