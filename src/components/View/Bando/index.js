import loadable from '@loadable/component';

export const BandoStatus = loadable(
  () =>
    import(
      /* webpackChunkName: "ISBandoView" */ 'io-sanita-theme/components/View/Bando/BandoStatus'
    ),
);
export const BandoView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISBandoView" */ 'io-sanita-theme/components/View/Bando/BandoView'
    ),
);
export const BandoCosE = loadable(
  () =>
    import(
      /* webpackChunkName: "ISBandoView" */ 'io-sanita-theme/components/View/Bando/BandoCosE'
    ),
);
export const BandoDate = loadable(
  () =>
    import(
      /* webpackChunkName: "ISBandoView" */ 'io-sanita-theme/components/View/Bando/BandoDate'
    ),
);
export const BandoUlterioriInformazioni = loadable(
  () =>
    import(
      /* webpackChunkName: "ISBandoView" */ 'io-sanita-theme/components/View/Bando/BandoUlterioriInformazioni'
    ),
);
export const Dates = loadable(
  () =>
    import(
      /* webpackChunkName: "ISBandoView" */ 'io-sanita-theme/components/View/Bando/Dates'
    ),
);
