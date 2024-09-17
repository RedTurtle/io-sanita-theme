import loadable from '@loadable/component';

export const FarmaciaView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaView'
    ),
);
