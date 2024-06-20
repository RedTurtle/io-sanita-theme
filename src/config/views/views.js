

import PageView from 'io-sanita-theme/components/View/PageView/PageView';

/*  CONTENT TYPES VIEWS */
const ioSanitaContentTypesViews = {
  Document: PageView,
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
  };
};

export default applyIoSanitaViews;
