import loadable from '@loadable/component';
import { defineMessages } from 'react-intl';
import ImageWithErrors from 'io-sanita-theme/components/ImageWithErrors/ImageWithErrors';

import menuSVG from '@plone/volto/icons/menu.svg';
import menuAltSVG from '@plone/volto/icons/menu-alt.svg';
import navSVG from '@plone/volto/icons/nav.svg';
import shareSVG from '@plone/volto/icons/share.svg';
import Search from '@plone/volto/components/theme/Search/Search';
import { TextEditorWidget } from 'volto-slate-italia';
import { fromHtml } from 'volto-slate-italia/config/Slate/utils';

// CTs icons
import faFileInvoiceSVG from 'io-sanita-theme/icons/file-invoice.svg';
import faFolderOpenSVG from 'io-sanita-theme/icons/folder-open.svg';
import faImageSVG from 'io-sanita-theme/icons/image.svg';
import faFileSVG from 'io-sanita-theme/icons/file.svg';
import faLinkSVG from 'io-sanita-theme/icons/link.svg';
import faBoxOpenSVG from 'io-sanita-theme/icons/box-open.svg';
import faArchiveSVG from 'io-sanita-theme/icons/archive.svg';
import faFileAltSVG from 'io-sanita-theme/icons/file-alt.svg';
import faCalendarAltSVG from 'io-sanita-theme/icons/calendar-alt.svg';
import faMapMarkedAltSVG from 'io-sanita-theme/icons/map-marked-alt.svg';
import faNewspaperSVG from 'io-sanita-theme/icons/newspaper.svg';
import faUserSVG from 'io-sanita-theme/icons/user.svg';
import faCogSVG from 'io-sanita-theme/icons/cog.svg';
import faSitemapSVG from 'io-sanita-theme/icons/sitemap.svg';
import faBuildingSVG from 'io-sanita-theme/icons/building.svg';
import faFileDownloadSVG from 'io-sanita-theme/icons/file-download.svg';
import faQuestionSVG from 'io-sanita-theme/icons/question-solid.svg';
import bandoSVG from 'io-sanita-theme/icons/bando.svg';
import logSVG from 'io-sanita-theme/icons/log.svg';

import reducers from 'io-sanita-theme/reducers';
import { LoginAgid, Icon, FileWidget } from 'io-sanita-theme/components';
import PageLoader from 'io-sanita-theme/components/AppExtras/PageLoader/PageLoader';
import TrackFocus from 'io-sanita-theme/components/AppExtras/TrackFocus';
import HandleAnchor from 'io-sanita-theme/components/AppExtras/HandleAnchor';
import SiteSettingsExtras from 'io-sanita-theme/components/AppExtras/SiteSettingsExtras';
import GenericAppExtras from 'io-sanita-theme/components/AppExtras/GenericAppExtras';
import { loadables as IoSanitaLoadables } from 'io-sanita-theme/config/loadables';
import { registerIOSanitaValidators } from 'io-sanita-theme/config/validators';

import { removeListingVariation, EnhanceLink } from 'io-sanita-theme/helpers';

import { applyIoSanitaBlocksConfig } from 'io-sanita-theme/config/blocks';
import applyIoSanitaViews from 'io-sanita-theme/config/views/views';
import AggregationPage from 'io-sanita-theme/components/View/AggregationPage/AggregationPage';
import { applyFarmacieConfig } from './farmacie';

import getIoSanitaWidgets from 'io-sanita-theme/config/widgets/widgets';
import { component } from 'design-react-kit/dist/types/Icon/assets/ItAndroidSquare';

export const AGGREGATION_PAGE_ARGOMENTO = '/argomento/';
export const AGGREGATION_PAGE_TIPOLOGIA_UTENTE = '/tipologia-utente/';

const ReleaseLog = loadable(() =>
  import('io-sanita-theme/components/ReleaseLog/ReleaseLog'),
);

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

    contentIcons: {
      ...config.settings.contentIcons,
      Document: faFileInvoiceSVG,
      Bando: bandoSVG,
      Folder: faFolderOpenSVG,
      'News Item': faNewspaperSVG,
      Event: faCalendarAltSVG,
      Image: faImageSVG,
      File: faFileSVG,
      Link: faLinkSVG,

      Argomento: faBoxOpenSVG,
      CartellaModulistica: faArchiveSVG,
      Documento: faFileAltSVG,
      Venue: faMapMarkedAltSVG,
      Persona: faUserSVG,
      Servizio: faCogSVG,
      Subsite: faSitemapSVG,
      UnitaOrganizzativa: faBuildingSVG,
      Modulo: faFileDownloadSVG,
      Faq: faQuestionSVG,
    },
    controlpanels: [
      ...(config.settings.controlpanels ?? []),
      {
        '@id': '/release-log',
        group: 'General',
        title: 'Novità ultimi rilasci',
        id: 'release-log',
      },
    ],
    controlPanelsIcons: {
      ...config.settings.controlPanelsIcons,
      'dropdown-menu-settings': menuSVG,
      'secondary-menu-settings': menuAltSVG,
      'subsites-settings': navSVG,
      'social-settings': shareSVG,
      'release-log': logSVG,
    },
    defaultExcludedFromSearch: {
      portalTypes: ['Image', 'File'],
    },
    loadables: { ...config.settings.loadables, ...IoSanitaLoadables },
    siteProperties: {
      siteTitle: 'io-Sanita', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Nome dell'istituzione', 'en':'Site name'}. Se multilingua il default è comunque la stringa.
      siteSubtitle: "Tag line dell'istituzione", //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Uno dei tanti Comuni d'Italia', 'en':'Uno dei tanti Comuni d'Italia'}. Se multilingua il default è comunque la stringa.
      parentSiteTitle: 'Servizio sanitario regionale Emilia-Romagna', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Link al portale sanitario regionale', 'en':'Region name'}.Se multilingua il default è comunque la stringa.
      parentSiteURL: 'https://salute.regione.emilia-romagna.it/', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'https://www.governo.it', 'en':'https://www.governo.it/en'}. Se multilingua il default è comunque la stringa.
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
        GET_CONTENT: [
          'breadcrumbs',
          'navigation',
          'actions',
          'types',
          'view-extra-data',
        ],
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
      {
        match: '',
        component: PageLoader,
      },
      { match: '', component: TrackFocus },
    ],
    maxFileUploadSize: null,

    'volto-editablefooter': {
      ...config.settings['volto-editablefooter'],
      options: { socials: true, newsletterSubscribe: false },
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
      className="ms-1 external-link"
    />*/,
    },
    'volto-feedback': {
      ...config.settings['volto-feedback'],
      feedbackEnabledNonContentRoutes: [
        ...(config.settings['volto-feedback']
          ?.feedbackEnabledNonContentRoutes ?? []),
        {
          path: AGGREGATION_PAGE_TIPOLOGIA_UTENTE,
          feedbackTitle: null /*usa il path per sapere quale tipologia è*/,
        },
        {
          path: AGGREGATION_PAGE_ARGOMENTO,
          feedbackTitle: null /*usa il path per sapere quale tipologia è*/,
        },
      ],
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
  config.widgets = {
    ...config.widgets,
    ...getIoSanitaWidgets(config),
  };

  // /******************************************************************************
  //  * FARMACIE (VIEWS+BLOCKS)
  //  ******************************************************************************/
  applyFarmacieConfig(config);

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
    Image: {
      component: ImageWithErrors,
    },
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

  // VALIDATORS
  registerIOSanitaValidators(config);

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
      path: ['/controlpanel/release-log', '/release-log'],
      component: ReleaseLog,
    },
    {
      path: [
        AGGREGATION_PAGE_ARGOMENTO + ':id',
        AGGREGATION_PAGE_ARGOMENTO.replace(/\/+$/, ''),
      ],
      component: AggregationPage,
      type: 'parliamo_di',
      breadcrumbs_title: ':id',
    },
    {
      path: [
        AGGREGATION_PAGE_TIPOLOGIA_UTENTE + ':id',
        AGGREGATION_PAGE_TIPOLOGIA_UTENTE.replace(/\/+$/, ''),
      ],
      component: AggregationPage,
      type: 'a_chi_si_rivolge_tassonomia',
      breadcrumbs_title: ':id',
    },
  ];

  config.settings.nonContentRoutes = [
    ...config.settings.nonContentRoutes.filter(
      (route) => route !== '/contact-form',
    ),
    AGGREGATION_PAGE_ARGOMENTO,
    AGGREGATION_PAGE_TIPOLOGIA_UTENTE,
    /\/release-log\/.*$/,
    ///\/argomento\/.*$/,
    ///\/tipologia-utente\/.*$/,
  ];
  config.settings.nonContentRoutesPublic = [
    ...(config.settings.nonContentRoutesPublic ?? []),
    AGGREGATION_PAGE_ARGOMENTO,
    AGGREGATION_PAGE_TIPOLOGIA_UTENTE,
  ];

  return config;
}
