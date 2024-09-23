import { PageView } from 'io-sanita-theme/components/View/Page';
import { EventoView } from 'io-sanita-theme/components/View/Evento';
import { UOView } from 'io-sanita-theme/components/View/UOView';
import { StrutturaView } from 'io-sanita-theme/components/View/Struttura';
import { PersonaView } from 'io-sanita-theme/components/View/Persona';
import { ComeFarePerView } from 'io-sanita-theme/components/View/ComeFarePer';
import StepView from 'io-sanita-theme/components/View/Step/StepView';
import { NewsItemView } from 'io-sanita-theme/components/View/NewsItem';
import { DocumentoView } from 'io-sanita-theme/components/View/Documento';
import { ServizioView } from 'io-sanita-theme/components/View/Servizio';
import { PuntoDiContattoView } from 'io-sanita-theme/components/View/PuntoDiContatto';
import { BandoView } from 'io-sanita-theme/components/View/Bando';
import { ModuloView } from 'io-sanita-theme/components/View/Modulo';
import { CartellaModulisticaView } from 'io-sanita-theme/components/View/CartellaModulistica';

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
