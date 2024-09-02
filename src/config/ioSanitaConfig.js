import loadable from '@loadable/component';
import { defineMessages } from 'react-intl';

import menuSVG from '@plone/volto/icons/menu.svg';
import menuAltSVG from '@plone/volto/icons/menu-alt.svg';
import navSVG from '@plone/volto/icons/nav.svg';
import shareSVG from '@plone/volto/icons/share.svg';
import { Search } from '@plone/volto/components';
import { TextEditorWidget } from 'volto-slate-italia';
import { fromHtml } from 'volto-slate-italia/config/Slate/utils';

import logSVG from 'io-sanita-theme/icons/log.svg';
import reducers from 'io-sanita-theme/reducers';
import {
  LoginAgid,
  HandleAnchor,
  GenericAppExtras,
  SiteSettingsExtras,
  Icon,
  FileWidget,
} from 'io-sanita-theme/components';
import { loadables as IoSanitaLoadables } from 'io-sanita-theme/config/loadables';

import { removeListingVariation, EnhanceLink } from 'io-sanita-theme/helpers';

import { applyIoSanitaBlocksConfig } from 'io-sanita-theme/config/blocks';
import applyIoSanitaViews from 'io-sanita-theme/config/views/views';
import AggregationPage from 'io-sanita-theme/components/View/AggregationPage/AggregationPage';

export const AGGREGATION_PAGE_ARGOMENTO = '/argomento/';
export const AGGREGATION_PAGE_TIPOLOGIA_UTENTE = '/tipologia-utente/';
const messages = defineMessages({
  search_brdc: {
    id: 'search_brdc',
    defaultMessage: 'Ricerca',
  },
});

export default function applyConfig(config) {
  /******************************************************************************
   * SETTINGS
   ******************************************************************************/
  const voltoSentryOptions = config.settings.sentryOptions;

  config.settings = {
    ...config.settings,
    openExternalLinkInNewTab: true,
    sentryOptions: (libraries) => ({
      ...voltoSentryOptions(libraries),
      ignoreErrors: [
        'ChunkLoadError',
        'Loading CSS chunk',
        'Timeout (n)', //errori di recaptcha nella customer satisfaction
        'Uncaught (in promise) Timeout (n)', //errori di recaptcha nella customer satisfaction
      ],
      // https://docs.sentry.io/platforms/javascript/data-management/sensitive-data/
      // beforeSend(event) {
      //   // Modify the event here (e.g.)
      //   // if (event.user) {
      //   //   delete event.user.email;
      //   // }
      //  return event;
      // },
    }),
    isMultilingual: false,
    supportedLanguages: ['it'],
    defaultLanguage: 'it',
    verticalFormTabs: true,
    showTags: false,
    showSelfRegistration: false,
    useEmailAsLogin: false,
    defaultPageSize: 24,
    navDepth: 2,
    cookieExpires: 15552000, //6 month
    serverConfig: {
      ...config.settings.serverConfig,
      //criticalCssPath: 'node_modules/io-sanita-theme/public/critical.css', //valido solo per i siti figli. Rimosso temporaneamente perchè fa un brutto effetto al caricamento della pagina
      extractScripts: {
        ...config.settings.serverConfig.extractScripts,
        errorPages: true,
      },
    },
    querystringAdditionalFields: [],

    imageScales: {
      listing: 16,
      icon: 32,
      tile: 64,
      thumb: 128,
      mini: 200,
      midi: 300,
      preview: 400,
      teaser: 600,
      large: 800,
      larger: 1000,
      great: 1200,
      huge: 1600,
    },

    controlPanelsIcons: {
      ...config.settings.controlPanelsIcons,
      'dropdown-menu-settings': menuSVG,
      'secondary-menu-settings': menuAltSVG,
      'subsites-settings': navSVG,
      'social-settings': shareSVG,
    },
    defaultExcludedFromSearch: {
      portalTypes: ['Image', 'File'],
    },
    loadables: { ...config.settings.loadables, ...IoSanitaLoadables },
    siteProperties: {
      siteTitle: 'io-Sanita', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Nome dell'istituzione', 'en':'Site name'}. Se multilingua il default è comunque la stringa.
      siteSubtitle: "Tag line dell'istituzione", //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Uno dei tanti Comuni d'Italia', 'en':'Uno dei tanti Comuni d'Italia'}. Se multilingua il default è comunque la stringa.
      parentSiteTitle: 'Link al portale sanitario regionale', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Link al portale sanitario regionale', 'en':'Region name'}.Se multilingua il default è comunque la stringa.
      parentSiteURL: 'https://www.link-portale-sanitario-regionale.it', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'https://www.governo.it', 'en':'https://www.governo.it/en'}. Se multilingua il default è comunque la stringa.
      subsiteParentSiteTitle: 'io-Sanita', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Nome del sito padre', 'en':'Parent site name'}. Se multilingua il default è comunque la stringa.

      //arLoginUrl: '/login?e=1',
      // arLogoutUrl: '/logout?e=1',
      // spidLogin: true, //se true, nella pagina di errore Unauthorized, mostra il pulsante per il login a Spid.

      enableFeedbackForm: true,
      enableFeedbackFormCaptcha: false,
      enableVoltoFormBlockCaptcha: true,
      splitMegamenuColumns: true, //se impostato a false, non spezza le colonne con intestazioni nel megamenu
      footerNavigationDepth: 2, //valori possibili: [1,2]. Se impostato ad 1 non verranno mostrati nel footer i link agli elementi contenuti nelle sezioni di primo livello.
      markSpecialLinks: true, // se impostato a false, non marca con icona i link esterni
      markFooterLinks: true, // se impostato a true, viene aggiunta un'icona ai link del footer per renderli riconoscibili
      extender: {
        itemIcon: (item) => {
          return null;
        },
      },
    },
    apiExpanders: [
      ...config.settings.apiExpanders,
      {
        match: '',
        GET_CONTENT: ['breadcrumbs', 'navigation', 'actions', 'types'],
      },
    ],
    appExtras: [
      ...config.settings.appExtras,
      {
        match: '',
        component: HandleAnchor,
      },
      {
        match: '',
        component: GenericAppExtras,
      },
      {
        match: '',
        component: SiteSettingsExtras,
      },
    ],
    maxFileUploadSize: null,

    'volto-editablefooter': {
      ...config.settings['volto-editablefooter'],
      options: { socials: true, newsletterSubscribe: true },
    },

    'volto-form-block-italia': {
      ...config.settings['volto-form-block-italia'],
      IconComponent: Icon,
      FileWidgetComponent: FileWidget,
      TextEditorWidgetComponent: TextEditorWidget,
      fromHtml: fromHtml,
    },
    'volto-slate-italia': {
      ...config.settings['volto-slate-italia'],
      enhanceLinkComponent: EnhanceLink,
      externalLinkMarker:
        null /* import { Icon } from 'io-sanita-theme/components';
      <Icon
      icon="it-external-link"
      size="xs"
      className="ms-1 align-sub external-link"
    />*/,
    },
    videoAllowExternalsDefault: false,
  };

  /******************************************************************************
   * BLOCKS
   ******************************************************************************/
  applyIoSanitaBlocksConfig(config);

  /******************************************************************************
   * VIEWS
   ******************************************************************************/
  applyIoSanitaViews(config);

  // /******************************************************************************
  //  * WIDGETS
  //  ******************************************************************************/
  // config.widgets = {
  //   ...config.widgets,
  //   ...getItaliaWidgets(config),
  // };

  // /******************************************************************************
  //  * BLOCKS
  //  ******************************************************************************/
  //per avere la conf dei blocchi anche nel blocco grid, altrimenti nel blocco grid prende la conf base di volto.
  config.blocks.blocksConfig.gridBlock = {
    ...config.blocks.blocksConfig.gridBlock,
    blocksConfig: config.blocks.blocksConfig,
  };

  removeListingVariation(config, 'default'); // removes default volto template, because it will be overrided
  removeListingVariation(config, 'summary'); // removes summary volto template, because is unused
  removeListingVariation(config, 'imageGallery'); // removes imageGallery volto template, because we have our photoGallery template

  // COMPONENTS
  config.components = {
    ...config.components,
    BlockExtraTags: { component: () => null },
  };

  config.registerComponent({
    name: 'SiteSettingsExtras',
    component: SiteSettingsExtras,
  });

  // REDUCERS
  config.addonReducers = {
    ...config.addonReducers,
    ...reducers,
  };

  // ROUTES
  config.addonRoutes = [
    ...config.addonRoutes,
    {
      path: '/**/search',
      component: Search,
      breadcrumbs_title: messages.search_brdc,
    },
    {
      path: ['/login', '/**/login'],
      component: LoginAgid,
    },
    {
      path: [AGGREGATION_PAGE_ARGOMENTO + ':id'],
      component: AggregationPage,
      type: 'parliamo_di',
    },
    {
      path: [AGGREGATION_PAGE_TIPOLOGIA_UTENTE + ':id'],
      component: AggregationPage,
      type: 'a_chi_si_rivolge_tassonomia',
    },
  ];

  config.settings.nonContentRoutes = [
    ...config.settings.nonContentRoutes.filter(
      (route) => route !== '/contact-form',
    ),
    AGGREGATION_PAGE_ARGOMENTO,
    AGGREGATION_PAGE_TIPOLOGIA_UTENTE,
    ///\/argomento\/.*$/,
    ///\/tipologia-utente\/.*$/,
  ];
  config.settings.publicNonContentRoutes = [
    ...(config.settings.publicNonContentRoutes ?? []),
    AGGREGATION_PAGE_ARGOMENTO,
    AGGREGATION_PAGE_TIPOLOGIA_UTENTE,
  ];
  return config;
}
