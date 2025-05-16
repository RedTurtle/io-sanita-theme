import loadable from '@loadable/component';

export const NewsItemView = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemView'
  ),
);
export const NewsItemTesto = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemTesto'
  ),
);
export const NewsItemDocumenti = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemDocumenti'
  ),
);
export const NewsItemACuraDi = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemACuraDi'
  ),
);
export const NewsItemUlterioriInformazioni = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemUlterioriInformazioni'
  ),
);
export const NewsItemGallery = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemGallery'
  ),
);

export const NewsItemPersone = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemPersone'
  ),
);

export const NewsItemStrutture = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemStrutture'
  ),
);

export const NewsItemServiziEPrestazioni = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemServiziEPrestazioni'
  ),
);

export const NewsItemNotizieCorrelate = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemNotizieCorrelate'
  ),
);
export const NewsItemSchemaOrg = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemSchemaOrg'
  ),
);
