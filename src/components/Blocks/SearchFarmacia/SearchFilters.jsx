import { DatetimeWidget } from '@plone/volto/components';
import { Row, Col } from 'design-react-kit';
import { SearchBar, SelectInput } from 'io-sanita-theme/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  search_keyword: {
    id: 'search_farmacia_search_keyword',
    defaultMessage: 'Cerca per parola chiave',
  },
  area_territoriale: {
    id: 'search_farmacia_area_territoriale',
    defaultMessage: 'Area territoriale',
  },
  date: {
    id: 'search_farmacia_date',
    defaultMessage: 'Seleziona il giorno',
  },
  comune: {
    id: 'search_farmacia_comune',
    defaultMessage: 'Comune',
  },
  localita: {
    id: 'search_farmacia_localita',
    defaultMessage: 'Località',
  },
  searchable_text_description: {
    id: 'search_farmacia_searchable_text_description',
    defaultMessage: 'Inserisci il nome della farmacia',
  },
});

const SearchFilters = ({
  searchType,
  filters,
  setFilters,
  options,
  block_id,
  // doSearch,
  // checkClearComune,
  // isEditMode,
}) => {
  const intl = useIntl();

  return (
    <Row class="search-filters">
      <Col lg="6" className="d-flex align-center">
        <SearchBar
          id={block_id + '_'}
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
          <Col lg="3" className="d-flex flex-column">
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
            <small className="ps-2">{intl.formatMessage(messages.date)}</small>{' '}
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
          <Col lg="3" className="d-flex align-center">
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

          <Col lg="3" className="d-flex align-center">
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
    </Row>
  );
};

export default SearchFilters;
