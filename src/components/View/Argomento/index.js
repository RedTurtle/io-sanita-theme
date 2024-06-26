import loadable from '@loadable/component';
export const ArgumentIcon = loadable(
  () =>
    import(
      /* webpackChunkName: "ISViewsCommons" */ 'io-sanita-theme/components/View/Argomento/ArgumentIcon'
    ),
);
