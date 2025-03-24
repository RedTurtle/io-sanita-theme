import React from 'react';
import loadable from '@loadable/component';
import { defaultIconWidgetOptions } from 'io-sanita-theme/components/manage/Widgets';

const CTFieldsWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/CTFieldsWidget/CTFieldsWidget'
  ),
);
const CTTitleColumnWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/CTTitleColumnWidget/CTTitleColumnWidget'
  ),
);
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

const ParliamoDiWidgetView = loadable(() =>
  import(
    /* webpackChunkName: "ISWidgetView" */ 'io-sanita-theme/components/View/Widgets/ParliamoDiWidgetView'
  ),
);
const BlocksViewWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISWidgetView" */ 'io-sanita-theme/components/View/Widgets/BlocksViewWidget'
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
      ct_fields: CTFieldsWidget,
      ct_title_column: CTTitleColumnWidget,
    },
    views: {
      ...config.widgets.views,
      id: { ...config.widgets.views.id, parliamo_di: ParliamoDiWidgetView },
      widget: { ...config.widgets.views.widget, blocks: BlocksViewWidget },
    },
  };
};

export default getIoSanitaWidgets;
