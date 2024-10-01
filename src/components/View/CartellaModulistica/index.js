import loadable from '@loadable/component';

export const CartellaModulisticaView = loadable(() =>
  import(
    /* webpackChunkName: "ISCartellaModulisticaView" */ 'io-sanita-theme/components/View/CartellaModulistica/CartellaModulisticaView'
  ),
);

export const CartellaModulisticaSearchBar = loadable(() =>
  import(
    /* webpackChunkName: "ISCartellaModulisticaView" */ 'io-sanita-theme/components/View/CartellaModulistica/SearchBar'
  ),
);

export const DocRow = loadable(() =>
  import(
    /* webpackChunkName: "ISCartellaModulisticaView" */ 'io-sanita-theme/components/View/CartellaModulistica/DocRow'
  ),
);
