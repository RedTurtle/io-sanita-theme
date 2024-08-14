import loadable from '@loadable/component';

export const PersonaView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPersonaView" */ 'io-sanita-theme/components/View/Persona/PersonaView'
    ),
);
export const PersonaIncarichi = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPersonaView" */ 'io-sanita-theme/components/View/Persona/PersonaIncarichi'
    ),
);
export const PersonaCompetenze = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPersonaView" */ 'io-sanita-theme/components/View/Persona/PersonaCompetenze'
    ),
);
export const PersonaDove = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPersonaView" */ 'io-sanita-theme/components/View/Persona/PersonaDove'
    ),
);
export const PersonaOrariRicevimento = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPersonaView" */ 'io-sanita-theme/components/View/Persona/PersonaOrariRicevimento'
    ),
);
export const PersonaContatti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPersonaView" */ 'io-sanita-theme/components/View/Persona/PersonaContatti'
    ),
);
export const PersonaBiografia = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPersonaView" */ 'io-sanita-theme/components/View/Persona/PersonaBiografia'
    ),
);
export const PersonaUlterioriInformazioni = loadable(
  () =>
    import(
      /* webpackChunkName: "ISPersonaView" */ 'io-sanita-theme/components/View/Persona/PersonaUlterioriInformazioni'
    ),
);
