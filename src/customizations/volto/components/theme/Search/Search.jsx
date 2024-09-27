import loadable from '@loadable/component';

/**
 * Search component.
 * @module components/theme/Search/Search
 */

const Search = loadable(() =>
  import(
    /* webpackChunkName: "Search" */ 'io-sanita-theme/components/Search/Search'
  ),
);

export default Search;
