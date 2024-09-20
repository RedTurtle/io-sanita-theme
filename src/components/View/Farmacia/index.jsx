import loadable from '@loadable/component';

export const FarmaciaView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaView'
    ),
);

export const FarmaciaMoreInfos = loadable(
  () =>
    import(
      /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaMoreInfos'
    ),
);

export const FarmaciaShifts = loadable(
  () =>
    import(
      /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaShifts'
    ),
);

export const FarmaciaVacations = loadable(
  () =>
    import(
      /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaVacations'
    ),
);

export const FarmaciaWhere = loadable(
  () =>
    import(
      /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaWhere'
    ),
);

export const FarmaciaContacts = loadable(
  () =>
    import(
      /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaContacts'
    ),
);