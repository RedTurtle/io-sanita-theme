/**
 * Estrazione delle tabelle incollate in un blocco di testo slate, in blocchi
 * Volto separati.
 * @module volto-slate/blocks/Table/deconstruct
 * Customizations:
 * - syncCreateTableBlock crea un blocco di tipo 'slateTable' e non 'table':
 *   'table' era il vecchio blocco tabella DraftJS, non più registrato da Volto
 *   18 (volto-slate registra solo 'slateTable' in blocks/Table/index.js),
 *   quindi una tabella incollata da HTML generava un blocco non riconosciuto
 *   ("Blocco table sconosciuto") sia in edit che in view.
 * - syncCreateTableBlock aggiunge alla tabella incollata i flag di stile di
 *   default, gli stessi che ha una tabella creata a mano (initialTable in
 *   ./TableBlockEdit.jsx): senza di essi la tabella veniva renderizzata senza
 *   bordi e con un layout diverso da quelle inserite dal blocco.
 * - extractVoltoTable: se la tabella non ha thead/tbody/tfoot, le righe vengono
 *   raccolte direttamente dai figli della tabella, così un <table> con <tr> come
 *   figli diretti non produce più una tabella vuota.
 * - extractTables non emette il blocco se non è stata raccolta nessuna riga.
 */

import { v4 as uuid } from 'uuid';
import { Editor, Transforms } from 'slate';
import {
  TABLE,
  THEAD,
  TBODY,
  TFOOT,
  TD,
  TH,
  TR,
} from '@plone/volto-slate/constants';

/**
 * Flag di stile di una tabella appena creata dal blocco slateTable, replicati
 * qui per dare lo stesso aspetto alle tabelle incollate.
 * @see initialTable in ./TableBlockEdit.jsx
 */
const defaultTableSettings = {
  hideHeaders: false,
  fixed: true,
  compact: false,
  basic: false,
  celled: true,
  inverted: false,
  striped: false,
};

/**
 * @param {Array} rows The array of rows that almost completely defines a
 * `slateTable`-typed block.
 * @returns {Array} A tuple `[id, block]` where `id` is the new block's ID and
 * the `block` is all the block's data.
 */
export function syncCreateTableBlock(rows) {
  const id = uuid();
  const block = {
    '@type': 'slateTable',
    table: {
      ...defaultTableSettings,
      rows,
    },
  };
  return [id, block];
}

/**
 * @param {Editor} editor The Slate Editor from which to extract tables.
 * @param {PathRef} pathRef Has the current value a `Path` so that the search is
 * done just inside nodes in that `Path`.
 * @returns Extracts tables from a Slate `Editor` into an array of detached
 * `slateTable` blocks.
 */
export const extractTables = (editor, pathRef) => {
  const tableNodes = Array.from(
    Editor.nodes(editor, {
      at: pathRef.current,
      match: (node) => node.type === TABLE,
    }),
  );
  const tables = tableNodes.map(([node]) => extractVoltoTable(node));

  Transforms.removeNodes(editor, {
    at: pathRef.current,
    match: (node) => node.type === TABLE,
  });

  return tables
    .filter((rows) => rows.length > 0)
    .map((el) => syncCreateTableBlock(el));
};

/**
 * @param {Node[]} fragment A Slate document fragment.
 * @returns {Array} An array of rows in the format requested by `slateTable`
 * blocks.
 */
function collectRowsFrom(fragment) {
  let rows = [];
  fragment.children.forEach((y) => {
    if (y.type === TR) {
      let row = { key: uuid(), cells: [] };

      y.children.forEach((z) => {
        let val = JSON.parse(JSON.stringify(z.children));
        if (z.type === TD) {
          row.cells.push({
            key: uuid(),
            type: 'data',
            value: val,
          });
        } else if (z.type === TH) {
          row.cells.push({
            key: uuid(),
            type: 'header',
            value: val,
          });
        }
      });

      rows.push(row);
    }
  });
  return rows;
}

/**
 * @param {HTMLElement} el The <table> element from which to extract rows.
 * @returns {Array} A rows array that contains rows in the format required by
 * `slateTable` blocks.
 */
function extractVoltoTable(el) {
  let thead = [],
    tfoot = [],
    tbody = [];

  el.children.forEach((fragment) => {
    if (fragment.type === THEAD) {
      // not supported by View fully, so prepend this to tbody below
      thead = collectRowsFrom(fragment);
    } else if (fragment.type === TBODY) {
      tbody = collectRowsFrom(fragment);
    } else if (fragment.type === TFOOT) {
      // not supported by View fully, so append this to tbody below
      tfoot = collectRowsFrom(fragment);
    }
  });

  const rows = [...thead, ...tbody, ...tfoot];

  if (rows.length === 0) {
    // tabella senza thead/tbody/tfoot: le righe sono figlie dirette di <table>
    return collectRowsFrom(el);
  }

  return rows;
}
