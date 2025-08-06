/* CUSTOMIZATIONS:
  - Agid styling
*/
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
  const sortableOptions = data?.columns
    ? [
        { value: 'sortable_title', label: 'Titolo' },
        ...data?.columns?.map((f) => {
          return { value: f.field, label: f.title };
        }),
      ].filter((o) => querystring?.['indexes']?.[o.value]?.sortable)
    : [{ value: 'sortable_title', label: 'Titolo' }];

  const sortOrderOptions = [
    { value: 'ascending', label: intl.formatMessage(messages.ascending) },
    { value: 'descending', label: intl.formatMessage(messages.descending) },
  ];

  return (
    <div className="pt-4">
      <h6>{intl.formatMessage(messages.sortOn)}</h6>
      {/* <pre>{JSON.stringify(searchData, null,2)}</pre> */}
      {/* <pre>{JSON.stringify(data.columns, null,2)}</pre> */}
      {/* <pre>{sortOn} {sortOrder}</pre> */}
      <div className="pt-2">
        <SelectInput
          id="sortOn"
          value={sortableOptions.find((o) => o.value === sortOn)}
          onChange={(opt) => setSortOn(opt.value)}
          options={sortableOptions}
        />
      </div>
      <div className="pt-2">
        <SelectInput
          id="sortOrder"
          value={sortOrderOptions.find((o) => o.value === sortOrder)}
          onChange={(opt) => setSortOrder(opt.value)}
          options={sortOrderOptions}
        />
      </div>
    </div>
  );
};

export default SortOn;
