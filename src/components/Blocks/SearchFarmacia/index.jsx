// TODO: loadable ?
// import SearchFarmaciaEdit from './Edit';
// import SearchFarmaciaView from './View';

// export { SearchFarmaciaEdit, SearchFarmaciaView };

import loadable from '@loadable/component';

export const SearchFarmaciaEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/Blocks/SearchFarmacia/Edit'
    ),
);

export const SearchFarmaciaView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/Blocks/SearchFarmacia/View'
    ),
);
