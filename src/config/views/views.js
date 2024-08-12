import { PageView } from 'io-sanita-theme/components/View/Page';
import { EventoView } from 'io-sanita-theme/components/View/Evento';
import { UOView } from 'io-sanita-theme/components/View/UOView';
import { ComeFarePerView } from 'io-sanita-theme/components/View/ComeFarePer';
import StepView from 'io-sanita-theme/components/View/Step/StepView';
import { NewsItemView } from 'io-sanita-theme/components/View/NewsItem';

/*  CONTENT TYPES VIEWS */
const ioSanitaContentTypesViews = {
  Document: PageView,
  Event: EventoView,
  NewsItem: NewsItemView,
  UnitaOrganizzativa: UOView,
  ComeFarePer: ComeFarePerView,
  Step: StepView,
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
