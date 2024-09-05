import loadable from '@loadable/component';

export const DownloadFileFormat = loadable(() =>
  import(
    /* webpackChunkName: "ISModuloViewCommons" */ 'io-sanita-theme/components/View/Modulo/common/DownloadFileFormat'
  ),
);

export const ModuloView = loadable(() =>
  import(
    /* webpackChunkName: "ISModuloView" */ 'io-sanita-theme/components/View/Modulo/ModuloView'
  ),
);

export const ModuloText = loadable(() =>
  import(
    /* webpackChunkName: "ISModuloView" */ 'io-sanita-theme/components/View/Modulo/ModuloText'
  ),
);

export const ModuloFiles = loadable(() =>
  import(
    /* webpackChunkName: "ISModuloView" */ 'io-sanita-theme/components/View/Modulo/ModuloFiles'
  ),
);

export const ModuloFilePrincipale = loadable(() =>
  import(
    /* webpackChunkName: "ISModuloView" */ 'io-sanita-theme/components/View/Modulo/ModuloFilePrincipale'
  ),
);

export const ModuloFormatiAlternativi = loadable(() =>
  import(
    /* webpackChunkName: "ISModuloView" */ 'io-sanita-theme/components/View/Modulo/ModuloFormatiAlternativi'
  ),
);
