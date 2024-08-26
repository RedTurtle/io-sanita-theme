import loadable from '@loadable/component';

export const DocumentoView = loadable(
  () =>
    import(
      /* webpackChunkName: "ISDocumentoView" */ 'io-sanita-theme/components/View/Documento/DocumentoView'
    ),
);
export const DocumentoCosE = loadable(
  () =>
    import(
      /* webpackChunkName: "ISDocumentoView" */ 'io-sanita-theme/components/View/Documento/DocumentoCosE'
    ),
);
export const DocumentoAChiSiRivolge = loadable(
  () =>
    import(
      /* webpackChunkName: "ISDocumentoView" */ 'io-sanita-theme/components/View/Documento/DocumentoAChiSiRivolge'
    ),
);
export const DocumentoDocumenti = loadable(
  () =>
    import(
      /* webpackChunkName: "ISDocumentoView" */ 'io-sanita-theme/components/View/Documento/DocumentoDocumenti'
    ),
);
export const DocumentoServiziProcedure = loadable(
  () =>
    import(
      /* webpackChunkName: "ISDocumentoView" */ 'io-sanita-theme/components/View/Documento/DocumentoServiziProcedure'
    ),
);
export const DocumentoResponsabile = loadable(
  () =>
    import(
      /* webpackChunkName: "ISDocumentoView" */ 'io-sanita-theme/components/View/Documento/DocumentoResponsabile'
    ),
);
export const DocumentoAutori = loadable(
  () =>
    import(
      /* webpackChunkName: "ISDocumentoView" */ 'io-sanita-theme/components/View/Documento/DocumentoAutori'
    ),
);
