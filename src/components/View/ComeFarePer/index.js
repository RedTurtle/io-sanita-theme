import loadable from '@loadable/component';

export const ComeFarePerView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerView'
    ),
);
export const ComeFarePerAChiSiRivolge = loadable(
  () =>
    import(
      /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerAChiSiRivolge'
    ),
);
export const ComeFarePerComeFare = loadable(
  () =>
    import(
      /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerComeFare'
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

export const Steps = loadable(
  () =>
    import(
      /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/Steps/Steps'
    ),
);
