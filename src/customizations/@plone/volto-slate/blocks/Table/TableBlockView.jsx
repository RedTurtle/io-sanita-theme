/**
 * Slate Table block's View component.
 * @module volto-slate/blocks/Table/View
 * Customizations:
 * - aggiunto aria-sort per indicare la direzione dell’ordinamento (ascending o descending). Se la colonna non è ordinata, usa aria-sort="none".
 * - role="columnheader": Aggiunge il ruolo di intestazione di colonna.
 * - Accessibilità tastiera (onKeyDown) per permette l’ordinamento con Enter o Spazio.
 * - tabIndex={0} per rende la cella interattiva tramite tastiera.
 */

import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import {
  serializeNodes,
  serializeNodesToText,
} from '@plone/volto-slate/editor/render';
import { Node } from 'slate';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  ascendingTableSort: {
    id: 'ascendingTableSort',
    defaultMessage: 'ascending',
  },
  descendingTableSort: {
    id: 'descendingTableSort',
    defaultMessage: 'descending',
  },
});

/**
 * Slate Table block's View class.
 * @class View
 * @param {object} data The table data to render as a table.
 */
const View = ({ data }) => {
  const [state, setState] = useState({
    column: null,
    direction: null,
  });

  const intl = useIntl();

  const { table } = data;
  const {
    rows,
    fixed,
    compact,
    basic,
    celled,
    inverted,
    striped,
    sortable,
    hideHeaders,
  } = table;

  const headers = useMemo(() => rows?.[0]?.cells || [], [rows]);
  const rowsData = useMemo(() => {
    return (
      rows?.slice(1).map((row) =>
        row.cells.map((cell) => ({
          ...cell,
          value:
            cell.value && Node.string({ children: cell.value }).length > 0
              ? serializeNodes(cell.value)
              : '\u00A0',
          valueText:
            cell.value && Node.string({ children: cell.value }).length > 0
              ? serializeNodesToText(cell.value)
              : '\u00A0',
        })),
      ) || []
    );
  }, [rows]);

  const sortedRows = useMemo(() => {
    if (state.column === null) return rowsData;
    return [...rowsData].sort((a, b) => {
      const aText = a[state.column].valueText;
      const bText = b[state.column].valueText;
      const isAscending = state.direction === 'ascending';
      if (isAscending ? aText < bText : aText > bText) return -1;
      if (isAscending ? aText > bText : aText < bText) return 1;
      return 0;
    });
  }, [state, rowsData]);

  const handleSort = (index) => {
    if (!data.table.sortable) return;
    setState({
      column: index,
      direction:
        state.column !== index
          ? 'ascending'
          : state.direction === 'ascending'
            ? 'descending'
            : 'ascending',
      sortLabel:
        state.column !== index
          ? intl.formatMessage(messages.ascendingTableSort)
          : state.direction === 'ascending'
            ? intl.formatMessage(messages.descendingTableSort)
            : intl.formatMessage(messages.ascendingTableSort),
    });
  };

  return (
    <>
      {table && (
        <Table
          fixed={fixed}
          compact={compact}
          basic={basic ? 'very' : false}
          celled={celled}
          inverted={inverted}
          striped={striped}
          sortable={sortable}
          className="slate-table-block"
        >
          {!hideHeaders && (
            <Table.Header>
              <Table.Row>
                {headers.map((cell, index) => (
                  <Table.HeaderCell
                    key={index}
                    textAlign="left"
                    verticalAlign="middle"
                    sorted={state.column === index ? state.direction : null}
                    aria-sort={
                      state.column === index ? state.sortLabel : 'none'
                    }
                    role="columnheader"
                    onClick={() => handleSort(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSort(index);
                      }
                    }}
                    tabIndex={0}
                  >
                    {cell.value &&
                    Node.string({ children: cell.value }).length > 0
                      ? serializeNodes(cell.value)
                      : '\u00A0'}
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
          )}
          <Table.Body>
            {sortedRows.map((row, rowIndex) => (
              <Table.Row key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <Table.Cell
                    key={cellIndex}
                    textAlign="left"
                    verticalAlign="middle"
                  >
                    {cell.value}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
