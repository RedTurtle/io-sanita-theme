import React from 'react';
import {
  QuickSearchConfigurationWidget,
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
      quick_search: QuickSearchConfigurationWidget,
    },
    widget: {
      ...config.widgets.widget,
      icon: IconWidget,
    },
  };
};

export default getIoSanitaWidgets;
