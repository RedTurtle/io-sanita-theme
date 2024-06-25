import {PageView, EventoView} from 'io-sanita-theme/components/View';

/*  CONTENT TYPES VIEWS */
const ioSanitaContentTypesViews = {
  Document: PageView,
};

/* LAYOUT VIEWS */
const ioSanitaLayoutViews = {
  document_view: PageView,
  Event: EventoView,
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
    contentTypesViewsSections: {
      //---example:
      // Document: {
      //   sections: [],
      //   placeholder: { afterContent: ComponentToRender, title: ComponentToRender },
      // },
      //------------
    },
  };
};

export default applyIoSanitaViews;
