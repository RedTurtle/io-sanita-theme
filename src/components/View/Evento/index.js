import loadable from '@loadable/component';

export const EventoView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoView'
    ),
);
export const EventoAppuntamenti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoAppuntamenti'
    ),
);
export const EventoContatti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoContatti'
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
export const EventoDocumenti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoDocumenti'
    ),
);
export const EventoFaParteDi = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoFaParteDi'
    ),
);
export const EventoLuoghi = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoLuoghi'
    ),
);

export const EventoPartecipanti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoPartecipanti'
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
