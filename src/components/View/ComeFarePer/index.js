import loadable from '@loadable/component';

export const ComeFarePerView = loadable(() =>
  import(
    /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerView'
  ),
);
export const ComeFarePerAChiSiRivolge = loadable(() =>
  import(
    /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerAChiSiRivolge'
  ),
);
export const ComeFarePerAllegati = loadable(() =>
  import(
    /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerAllegati'
  ),
);
export const ComeFarePerComeFare = loadable(() =>
  import(
    /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerComeFare'
  ),
);

export const ComeFarePerDescrizione = loadable(() =>
  import(
    /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerDescrizione'
  ),
);
export const ComeFarePerUlterioriInformazioni = loadable(() =>
  import(
    /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerUlterioriInformazioni'
  ),
);
export const ComeFarePerApprofondimenti = loadable(() =>
  import(
    /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerApprofondimenti'
  ),
);
export const Steps = loadable(() =>
  import(
    /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/Steps/Steps'
  ),
);
