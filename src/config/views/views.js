import loadable from '@loadable/component';
const PageView = loadable(() =>
  import(
    /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Page/PageView'
  ),
);

const EventoView = loadable(() =>
  import(
    /* webpackChunkName: "ISEventView" */ 'io-sanita-theme/components/View/Evento/EventoView'
  ),
);
const UOView = loadable(() =>
  import(
    /* webpackChunkName: "ISUOView" */ 'io-sanita-theme/components/View/UOView/UOView'
  ),
);
const StrutturaView = loadable(() =>
  import(
    /* webpackChunkName: "ISStrutturaView" */ 'io-sanita-theme/components/View/Struttura/StrutturaView'
  ),
);
const PersonaView = loadable(() =>
  import(
    /* webpackChunkName: "ISPersonaView" */ 'io-sanita-theme/components/View/Persona/PersonaView'
  ),
);
const ComeFarePerView = loadable(() =>
  import(
    /* webpackChunkName: "ISComeFarePerView" */ 'io-sanita-theme/components/View/ComeFarePer/ComeFarePerView'
  ),
);
const StepView = loadable(() =>
  import(
    /* webpackChunkName: "ISStepView" */ 'io-sanita-theme/components/View/Step/StepView'
  ),
);

const NewsItemView = loadable(() =>
  import(
    /* webpackChunkName: "ISNewsItemView" */ 'io-sanita-theme/components/View/NewsItem/NewsItemView'
  ),
);
const DocumentoView = loadable(() =>
  import(
    /* webpackChunkName: "ISDocumentoView" */ 'io-sanita-theme/components/View/Documento/DocumentoView'
  ),
);
const ServizioView = loadable(() =>
  import(
    /* webpackChunkName: "ISServizioView" */ 'io-sanita-theme/components/View/Servizio/ServizioView'
  ),
);
const PuntoDiContattoView = loadable(() =>
  import(
    /* webpackChunkName: "ISPuntoDiContattoView" */ 'io-sanita-theme/components/View/PuntoDiContatto/PuntoDiContattoView'
  ),
);
const BandoView = loadable(() =>
  import(
    /* webpackChunkName: "ISBandoView" */ 'io-sanita-theme/components/View/Bando/BandoView'
  ),
);
const ModuloView = loadable(() =>
  import(
    /* webpackChunkName: "ISModuloView" */ 'io-sanita-theme/components/View/Modulo/ModuloView'
  ),
);
const CartellaModulisticaView = loadable(() =>
  import(
    /* webpackChunkName: "ISCartellaModulisticaView" */ 'io-sanita-theme/components/View/CartellaModulistica/CartellaModulisticaView'
  ),
);

/*  CONTENT TYPES VIEWS */
const ioSanitaContentTypesViews = {
  Document: PageView,
  Event: EventoView,
  'News Item': NewsItemView,
  UnitaOrganizzativa: UOView,
  Struttura: StrutturaView,
  Persona: PersonaView,
  Documento: DocumentoView,
  Servizio: ServizioView,
  PuntoDiContatto: PuntoDiContattoView,
  ComeFarePer: ComeFarePerView,
  Step: StepView,
  Bando: BandoView,
  Modulo: ModuloView,
  CartellaModulistica: CartellaModulisticaView,
};

/* LAYOUT VIEWS */
const ioSanitaLayoutViews = {
  document_view: PageView,
};

const applyIoSanitaViews = (config) => {
  config.views = {
    ...config.views,
    contentTypesViews: {
      ...config.views.contentTypesViews,
      ...ioSanitaContentTypesViews,
    },
    layoutViews: {
      ...config.views.layoutViews,
      ...ioSanitaLayoutViews,
    },
    ioSanitaContentTypesViewsConfig: {
      //---example:
      // Document: {
      //   sections: [],
      //   placeholder: { afterContent: ComponentToRender, title: ComponentToRender },
      //   updateSideMenuOnLoadingBlocks: false
      //   sideMenu:null //set here a different SideMenu component. If null uses default SideMenu component
      // },
      //------------
    },
  };
};

export default applyIoSanitaViews;
