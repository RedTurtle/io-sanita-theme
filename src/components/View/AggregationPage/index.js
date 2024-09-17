import loadable from '@loadable/component';

export const SideMenu = loadable(
  () =>
    import(
      /* webpackChunkName: "ISAggregationPage" */ 'io-sanita-theme/components/View/AggregationPage/SideMenu'
    ),
);
