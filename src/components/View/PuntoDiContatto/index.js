import loadable from '@loadable/component';

export const PuntoDiContattoView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPuntoDiContattoView" */ 'io-sanita-theme/components/View/PuntoDiContatto/PuntoDiContattoView'
    ),
);
export const PuntoDiContattoCorrelati = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPuntoDiContattoView" */ 'io-sanita-theme/components/View/PuntoDiContatto/PuntoDiContattoCorrelati'
    ),
);
export const PuntoDiContattoContatti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPuntoDiContattoView" */ 'io-sanita-theme/components/View/PuntoDiContatto/PuntoDiContattoContatti'
    ),
);
