import loadable from '@loadable/component';

//esportare in questo file solamente i widget che potrebbero essere riutilizzati da addon figli.
// I widget che serve usarli solo nel config, importarli loadable direttamente da la

export const IconWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/IconWidget/IconWidget'
  ),
);
export const IconPreviewWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/IconWidget/IconPreviewWidget'
  ),
);
export const LinkToWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/LinkToWidget/LinkToWidget'
  ),
);

export defaultIconWidgetOptions from 'io-sanita-theme/components/manage/Widgets/IconWidget/defaultIconWidgetOptions';

export const PathsWidget = loadable(() =>
  import(
    /* webpackChunkName: "ISManage" */ 'io-sanita-theme/components/manage/Widgets/PathsWidget/PathsWidget'
  ),
);
