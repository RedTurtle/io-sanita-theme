import loadable from '@loadable/component';

export const BandoStatus = loadable(
  () =>
    import(
      /* webpackChunkName: "ISViewsCommons" */ 'io-sanita-theme/components/View/Bando/BandoStatus'
    ),
);
