import loadable from '@loadable/component';

export const SideMenu = loadable(() =>
  import(
    /* webpackChunkName: "ISAggregationPage" */ 'io-sanita-theme/components/View/AggregationPage/SideMenu'
  ),
);

export const SortBy = loadable(() =>
  import(
    /* webpackChunkName: "ISAggregationPage" */ 'io-sanita-theme/components/View/AggregationPage/SortBy/SortBy'
  ),
);
