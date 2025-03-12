import React from 'react';
import loadable from '@loadable/component';
import { defaultIconWidgetOptions } from 'io-sanita-theme/components/manage/Widgets';

const QuickSearchConfigurationWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/QuickSearch/QuickSearchConfigurationWidget'
  ),
);
const SearchSectionsConfigurationWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/SearchSections/SearchSectionsConfigurationWidget'
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

const SubsiteSocialLinksWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/SubsiteSocialLinksWidget/SubsiteSocialLinksWidget'
  ),
);
export const LinkToWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/LinkToWidget/LinkToWidget'
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
      search_sections: SearchSectionsConfigurationWidget,
      subsite_social_links: SubsiteSocialLinksWidget,
      icona: (props) => (
        <IconWidget
          {...props}
          wrapped={false}
          defaultOptions={defaultIconWidgetOptions}
        />
      ),
      icon: (
        props, //per il content-type FaqFolder
      ) => (
        <IconWidget
          {...props}
          wrapped={false}
          defaultOptions={defaultIconWidgetOptions}
        />
      ),
    },
    widget: {
      ...config.widgets.widget,
      icon: IconWidget,
      linkTo: LinkToWidget,
    },
  };
};

export default getIoSanitaWidgets;
