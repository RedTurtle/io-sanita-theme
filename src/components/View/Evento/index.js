import loadable from '@loadable/component';

export const EventoView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoView'
    ),
);

export const EventoCosE = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoCosE'
    ),
);

export const EventoUlterioriInformazioni = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoUlterioriInformazioni'
    ),
);
