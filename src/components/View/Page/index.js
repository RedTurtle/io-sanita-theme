import loadable from '@loadable/component';

export const PageView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Page/PageView'
    ),
);
