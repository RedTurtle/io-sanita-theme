import loadable from '@loadable/component';

export HeaderContactsWidget from 'io-sanita-theme/components/manage/Widgets/HeaderContactsWidget/HeaderContactsWidget';
export IconWidget from 'io-sanita-theme/components/manage/Widgets/IconWidget/IconWidget';
export IconPreviewWidget from 'io-sanita-theme/components/manage/Widgets/IconWidget/IconPreviewWidget';
export defaultIconWidgetOptions from 'io-sanita-theme/components/manage/Widgets/IconWidget/defaultIconWidgetOptions';

export const QuickSearchConfigurationWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/QuickSearch/QuickSearchConfigurationWidget'
  ),
);
