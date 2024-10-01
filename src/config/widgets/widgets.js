import React from 'react';
import loadable from '@loadable/component';
import { defaultIconWidgetOptions } from 'io-sanita-theme/components/manage/Widgets';

const QuickSearchConfigurationWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/QuickSearch/QuickSearchConfigurationWidget'
  ),
);
const HeaderContactsWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/HeaderContactsWidget/HeaderContactsWidget'
  ),
);
const IconWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/IconWidget/IconWidget'
  ),
);

const getIoSanitaWidgets = (config) => {
  return {
    id: {
      ...config.widgets.id,
      // title: CharCounterTextWidget,
      // description: CharCounterTextareaWidget,
      contatti_testata: HeaderContactsWidget,
      quick_search: QuickSearchConfigurationWidget,
      icona: (props) => (
        <IconWidget {...props} defaultOptions={defaultIconWidgetOptions} />
      ),
      icon: (
        props, //per il content-type FaqFolder
      ) => <IconWidget {...props} defaultOptions={defaultIconWidgetOptions} />,
    },
    widget: {
      ...config.widgets.widget,
      icon: IconWidget,
    },
  };
};

export default getIoSanitaWidgets;
