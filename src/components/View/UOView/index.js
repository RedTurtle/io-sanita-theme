import loadable from '@loadable/component';

export const UOView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOView'
    ),
);
export const UOContacts = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOContacts'
    ),
);
export const UODocuments = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UODocuments'
    ),
);
export const UOMoreInfos = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOMoreInfos'
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
export const UOWhatDoesItDo = loadable(
  () =>
    import(
      /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOWhatDoesItDo'
    ),
);
