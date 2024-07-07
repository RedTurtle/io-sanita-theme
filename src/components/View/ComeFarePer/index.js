import loadable from '@loadable/component';

export const ComeFarePerView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerView'
    ),
);
export const ComeFarePerAChiERivolto = loadable(
  () =>
    import(
      /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerAChiERivolto'
    ),
);
export const ComeFarePerComeFare = loadable(
  () =>
    import(
      /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerComeFare'
    ),
);
export const ComeFarePerDocumenti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerDocumenti'
    ),
);
export const ComeFarePerDescrizione = loadable(
  () =>
    import(
      /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerDescrizione'
    ),
);
export const ComeFarePerUlterioriInformazioni = loadable(
  () =>
    import(
      /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerUlterioriInformazioni'
    ),
);
