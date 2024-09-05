import loadable from '@loadable/component';

export const DownloadFileFormat = loadable(() =>
  import(
    /* webpackChunkName: "ISModuloViewCommons" */ 'io-sanita-theme/components/View/Modulo/common/DownloadFileFormat'
  ),
);
