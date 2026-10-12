/*
 * original: https://raw.githubusercontent.com/plone/volto/19.4.1/packages/volto/src/components/manage/Blocks/Search/components/SortOn.jsx
 *
 * CUSTOMIZATIONS:
 * - Agid styling: two io-sanita-theme SelectInputs, one for the sort field
 *   (title plus the block's sortable columns) and one for the sort order,
 *   instead of the semantic-ui Select and the ascending/descending buttons
 * - ids are unique per block (useId) like upstream; the field select is
 *   labelled by the heading and the order select by "Order", since
 *   SelectInput would otherwise announce both with its default label
 */
import { useId } from 'react';
import { defineMessages, useIntl } from 'react-intl';
// import upSVG from '@plone/volto/icons/sort-up.svg';
// import downSVG from '@plone/volto/icons/sort-down.svg';
// import { Container, Row, Col, Icon } from 'design-react-kit';
import { SelectInput } from 'io-sanita-theme/components';

const messages = defineMessages({
  noSelection: {
    id: 'No selection',
    defaultMessage: 'No selection',
  },
  sortOn: {
    id: 'Sort on',
    defaultMessage: 'Sort on',
  },
  ascending: {
    id: 'Ascending',
    defaultMessage: 'Ascending',
  },
  descending: {
    id: 'Descending',
    defaultMessage: 'Descending',
  },
  sortedOn: {
    id: 'Sorted on',
    defaultMessage: 'Sorted on',
  },
  order: {
    id: 'Order',
    defaultMessage: 'Order',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
});

const SortOn = (props) => {
  const {
    data = {},
    sortOn = null,
    sortOrder = null,
    setSortOn,
    setSortOrder,
    isEditMode,
    querystring = {},
  } = props;

  const intl = useIntl();
  const uniqueId = useId();
  const sortOnLabelId = `sort-on-label-${uniqueId}`;
  const titleOption = {
    value: 'sortable_title',
    label: intl.formatMessage(messages.title),
  };
  const sortableOptions = data?.columns
    ? [
        titleOption,
        ...data?.columns?.map((f) => {
          return { value: f.field, label: f.title };
        }),
      ].filter((o) => querystring?.['indexes']?.[o.value]?.sortable)
    : [titleOption];

  const sortOrderOptions = [
    { value: 'ascending', label: intl.formatMessage(messages.ascending) },
    { value: 'descending', label: intl.formatMessage(messages.descending) },
  ];

  return (
    <div className="pt-4">
      <h6 id={sortOnLabelId}>{intl.formatMessage(messages.sortOn)}</h6>
      {/* <pre>{JSON.stringify(searchData, null,2)}</pre> */}
      {/* <pre>{JSON.stringify(data.columns, null,2)}</pre> */}
      {/* <pre>{sortOn} {sortOrder}</pre> */}
      <div className="pt-2">
        <SelectInput
          id={`sortOn-${uniqueId}`}
          labelledby={sortOnLabelId}
          value={sortableOptions.find((o) => o.value === sortOn)}
          onChange={(opt) => setSortOn(opt.value)}
          options={sortableOptions}
        />
      </div>
      <div className="pt-2">
        <SelectInput
          id={`sortOrder-${uniqueId}`}
          label={intl.formatMessage(messages.order)}
          value={sortOrderOptions.find((o) => o.value === sortOrder)}
          onChange={(opt) => setSortOrder(opt.value)}
          options={sortOrderOptions}
        />
      </div>
    </div>
  );
};

export default SortOn;
