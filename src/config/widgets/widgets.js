import React from 'react';
//import { PathFiltersWidget } from 'io-sanita-theme/components/manage/Widgets';

const getIoSanitaWidgets = (config) => {
  return {
    id: {
      ...config.widgets.id,
      // title: CharCounterTextWidget,
      // description: CharCounterTextareaWidget,
    },
    widget: {
      ...config.widgets.widget,
      //path_filters: PathFiltersWidget,
    },
  };
};

export default getIoSanitaWidgets;
