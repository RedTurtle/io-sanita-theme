import React from 'react';
import {
  SearchSectionsConfigurationWidget,
  HeaderContactsWidget,
  IconWidget,
} from 'io-sanita-theme/components/manage/Widgets';

const getIoSanitaWidgets = (config) => {
  return {
    id: {
      ...config.widgets.id,
      // title: CharCounterTextWidget,
      // description: CharCounterTextareaWidget,
      contatti_testata: HeaderContactsWidget,
      search_sections: SearchSectionsConfigurationWidget,
    },
    widget: {
      ...config.widgets.widget,
      icon: IconWidget,
    },
  };
};

export default getIoSanitaWidgets;
