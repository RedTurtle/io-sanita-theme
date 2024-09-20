import { DatetimeWidget } from '@plone/volto/components';
import { Col } from 'design-react-kit';
import { SearchBar, SelectInput } from 'io-sanita-theme/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  search_keyword: {
    id: 'farmacia_search_keyword',
    defaultMessage: 'Cerca per parola chiave',
  },
  area_territoriale: {
    id: 'farmacia_area_territoriale',
    defaultMessage: 'Area territoriale',
  },
  date: {
    id: 'farmacia_data',
    defaultMessage: 'Seleziona il giorno',
  },
  comune: {
    id: 'comune',
    defaultMessage: 'Comune',
  },
  localita: {
    id: 'farmacia_localita',
    defaultMessage: 'Località',
  },
  find: {
    id: 'find',
    defaultMessage: 'Cerca',
  },
  searchable_text_description: {
    id: 'searchable_text_description',
    defaultMessage: 'Inserisci il nome della farmacia',
  },
});

const SearchFilters = ({
  searchType,
  filters,
  setFilters,
  options,
  // doSearch,
  // checkClearComune,
  // isEditMode,
}) => {
  const intl = useIntl();

  return (
    <>
      <Col lg="6">
        <SearchBar
          textDescription={intl.formatMessage(
            messages.searchable_text_description,
          )}
          value={filters.searchableText}
          onChange={(v) => {
            setFilters({ ...filters, searchableText: v });
          }}
        />
      </Col>

      {searchType === 'shifts' && (
      <>
        <Col lg="3">
          <DatetimeWidget
            id="date_farmacie"
            dateOnly={true}
            resettable={false}
            value={filters['date']}
            onChange={(opt, value) => {
              setFilters({
                ...filters,
                date: new Date(value).toISOString(),
              });
            }}
          />
        </Col>
      
        <Col lg="3">
          <SelectInput
            id="area_territoriale"
            value={filters.area_territoriale}
            placeholder={intl.formatMessage(messages.area_territoriale)}
            onChange={(opt) => {
              setFilters({ ...filters, area_territoriale: opt });
            }}
            options={options.aree_territoriali ?? []}
            isClearable={true}
            isSearchable={true}
          />
        </Col>
        </>
      )}

      {searchType === 'vacations' && (
      <>
        <Col lg="3">
          <SelectInput
            id="comune"
            value={
              filters['comune'] && {
                value: filters['comune'],
                label: filters['comune'],
              }
            }
            placeholder={intl.formatMessage(messages.comune)}
            onChange={(opt) => {
              setFilters({ ...filters, comune: opt?.value });
              // checkClearComune(opt);
            }}
            options={options.comuni ?? []}
            isClearable={true}
            isSearchable={true}
          />
        </Col>
     
        <Col lg="3">
          <SelectInput
            id="localita"
            value={
              filters.localita && {
                value: filters['localita'],
                label: filters['localita'],
              }
            }
            placeholder={intl.formatMessage(messages.localita)}
            onChange={(opt) => {
              setFilters({ ...filters, localita: opt?.value });
            }}
            options={options.localita ?? []}
            isClearable={true}
            isSearchable={true}
          />
        </Col>
        </>
      )}
    </>
  );
};

export default SearchFilters;
