import loadable from '@loadable/component';

export const FarmaciaView = loadable(() =>
  import(
    /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaView'
  ),
);

export const FarmaciaUlterioriInformazioni = loadable(() =>
  import(
    /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaUlterioriInformazioni'
  ),
);

export const FarmaciaTurni = loadable(() =>
  import(
    /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaTurni'
  ),
);

export const FarmaciaFerie = loadable(() =>
  import(
    /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaFerie'
  ),
);

export const FarmaciaDove = loadable(() =>
  import(
    /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaDove'
  ),
);

export const FarmaciaContatti = loadable(() =>
  import(
    /* webpackChunkName: "ISFarmaciaView" */ 'io-sanita-theme/components/View/Farmacia/FarmaciaContatti'
  ),
);
