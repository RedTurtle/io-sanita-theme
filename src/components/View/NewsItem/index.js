import loadable from '@loadable/component';

export const NewsItemView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemView'
    ),
);
export const NewsItemTesto = loadable(
  () =>
    import(
      /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemTesto'
    ),
);
export const NewsItemDocumenti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemDocumenti'
    ),
);
export const NewsItemACuraDi = loadable(
  () =>
    import(
      /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemACuraDi'
    ),
);
export const CuredBy = loadable(
  () =>
    import(
      /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/CuredBy'
    ),
);
export const NewsItemUlterioriInformazioni = loadable(
  () =>
    import(
      /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemUlterioriInformazioni'
    ),
);
