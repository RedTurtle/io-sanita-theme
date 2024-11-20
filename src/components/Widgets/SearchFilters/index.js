import loadable from '@loadable/component';

export const DateFilter = loadable(() =>
  import(
    /* webpackChunkName: "is-search-filters" */ 'io-sanita-theme/components/Widgets/SearchFilters/DateFilter'
  ),
);
export const TextFilter = loadable(() =>
  import(
    /* webpackChunkName: "is-search-filters" */ 'io-sanita-theme/components/Widgets/SearchFilters/TextFilter'
  ),
);
export const SelectFilter = loadable(() =>
  import(
    /* webpackChunkName: "is-search-filters" */ 'io-sanita-theme/components/Widgets/SearchFilters/SelectFilter'
  ),
);
