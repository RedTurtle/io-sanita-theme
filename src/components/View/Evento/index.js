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
export const EventoDateOrari = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoDateOrari'
    ),
);
export const Dates = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/Dates'
    ),
);
export const EventoCosti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoCosti'
    ),
);
export const EventoLuoghi = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoLuoghi'
    ),
);
export const EventoSponsors = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoSponsors'
    ),
);
export const Sponsors = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/Sponsors/Sponsors'
    ),
);

export const EventoUlterioriInformazioni = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoUlterioriInformazioni'
    ),
);
