import loadable from '@loadable/component';

export const UOView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOView'
    ),
);
export const UOContatti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOContatti'
    ),
);
export const UODocumenti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UODocumenti'
    ),
);
export const UOUlterioriInformazioni = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOUlterioriInformazioni'
    ),
);
export const UOPeople = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOPeople'
    ),
);
export const UOServices = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOServices'
    ),
);
export const UOStructure = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOStructure'
    ),
);
export const UODove = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UODove'
    ),
);
export const UODateOrari = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UODateOrari'
    ),
);
export const UOFaParteDi = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOFaParteDi'
    ),
);
export const UOCompetenze = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOCompetenze'
    ),
);
