import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { ExampleNewsItem } from './mock';
import Header from '@plone/volto/components/theme/Header/Header';
window.env = {};
process.env = {};

const mockStore = configureStore();
const store = mockStore({
  users: { user: {} },
  content: { data: null },
  userSession: {
    token: null,
  },
  location: { pathname: '/' },
  intl: {
    locale: 'it',
    messages: {},
  },
  socialSettings: {
    results: [
      {
        icon: 'it-facebook',
        title: 'Facebook',
        url: 'https://www.facebook.com/ComunediNovellara',
      },
      {
        icon: 'it-twitter',
        title: 'Twitter',
        url: 'https://twitter.com/comunenovellara',
      },
      {
        icon: 'it-instagram',
        title: 'Instagram',
        url: 'https://www.instagram.com/comune_novellara/?hl=it',
      },
      {
        icon: 'it-youtube',
        title: 'Youtube',
        url: 'https://www.youtube.com/channel/UC2w_XPh0nDkxavLI5iISy1A',
      },
      {
        icon: 'telegram',
        title: 'telegram',
        url: 'https://comune.modena.it/argomenti/telegram',
      },
      {
        icon: 'wifi',
        title: 'wifi',
        url: 'http://www.modenawifi.it/',
      },
      {
        icon: 'it-tiktok',
        title: 'Tiktok',
        url: 'https://tiktok.com/@comuneformigine',
      },
      {
        icon: 'envelope',
        title: 'Newsletter',
        url: 'https://www.google.it',
      },
      {
        icon: 'brands spotify',
        title: 'spottify',
        url: 'http://facebook.com',
      },
    ],
  },
  searchFilters: {
    result: {
      portal_types: [
        {
          id: 'Pagina Argomento',
          label: 'Argomento',
        },
        {
          id: 'Bando',
          label: 'Bando',
        },
        {
          id: 'FaqFolder',
          label: 'Cartella Faq',
        },
        {
          id: 'CartellaModulistica',
          label: 'Cartella Modulistica',
        },
        {
          id: 'Documento',
          label: 'Documento',
        },
        {
          id: 'Event',
          label: 'Evento',
        },
        {
          id: 'Faq',
          label: 'Faq',
        },
        {
          id: 'LRF',
          label: 'LRF',
        },
        {
          id: 'Venue',
          label: 'Luogo',
        },
        {
          id: 'News Item',
          label: 'Notizie e comunicati stampa',
        },
        {
          id: 'Document',
          label: 'Pagina',
        },
        {
          id: 'Persona',
          label: 'Persona pubblica',
        },
        {
          id: 'PuntoDiContatto',
          label: 'Punto di Contatto',
        },
        {
          id: 'Servizio',
          label: 'Servizio',
        },
        {
          id: 'UnitaOrganizzativa',
          label: 'Unita Organizzativa',
        },
      ],
      sections: [
        {
          items: [
            {
              '@id': 'https://v3.io-comune.redturtle.it/api/amministrazione',
              '@type': 'Document',
              UID: '358963972f504c95aaf02b9a2f9bf3bd',
              description: 'descr modificata',
              design_italia_meta_type: 'Pagina',
              enhanced_links_enabled: null,
              getObjSize: null,
              id: 'amministrazione',
              image_field: null,
              image_scales: null,
              items: [
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/politici',
                  '@type': 'Document',
                  UID: '34d81700727d417aa6da8730d82eba12',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'politici',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Politici',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/personale-amministrativo',
                  '@type': 'Document',
                  UID: '1d34cfd64ead40cdab94800cc6a4f88d',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'personale-amministrativo',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Personale Amministrativo',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/organi-di-governo',
                  '@type': 'Document',
                  UID: '0cd82a8ac97344f5ba4843d84544cf42',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'organi-di-governo',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Organi di governo',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/aree-amministrative',
                  '@type': 'Document',
                  UID: '0115a13cc0934b68b060d36d4e492142',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'aree-amministrative',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Aree amministrative',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/uffici',
                  '@type': 'Document',
                  UID: '0cdc037f3c5d4b6986ff093eb04c6385',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'uffici',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Uffici',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/enti-e-fondazioni',
                  '@type': 'Document',
                  UID: 'e3e56206299242ae94ec296991821bfc',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'enti-e-fondazioni',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Enti e fondazioni',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati',
                  '@type': 'Document',
                  UID: '096ffecc799347cdbdf6ac72cb10a326',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'documenti-e-dati',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Documenti e dati',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/test',
                  '@type': 'Persona',
                  UID: '3e84ed8341eb458399c2b4b9af72e6b1',
                  description: '',
                  design_italia_meta_type: 'Persona pubblica',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'test',
                  image_field: 'foto_persona',
                  image_scales: {
                    foto_persona: [null],
                  },
                  incarichi: '',
                  mime_type: null,
                  review_state: 'private',
                  title: 'test',
                  type_title: 'Persona pubblica',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/bando-di-test-giulia',
                  '@type': 'Bando',
                  UID: 'd0e224c6a20347fc9adf203637fc7e82',
                  description: '',
                  design_italia_meta_type: 'Bando',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'bando-di-test-giulia',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  tipologia_bando: 'beni_servizi',
                  title: 'Bando di test giulia',
                  type_title: 'Bando',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/test-reference',
                  '@type': 'Document',
                  UID: '079ffb542614462498ad23951ea6a74f',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'test-reference',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'test reference',
                  type_title: 'Pagina',
                },
              ],
              mime_type: null,
              review_state: 'published',
              title: 'Amministrazione',
              type_title: 'Pagina',
            },
            {
              '@id': 'https://v3.io-comune.redturtle.it/api/servizi',
              '@type': 'Document',
              UID: 'b9831cfefc1d4af2a349f9e886e56b0e',
              description: '',
              design_italia_meta_type: 'Pagina',
              enhanced_links_enabled: null,
              getObjSize: null,
              id: 'servizi',
              image_field: null,
              image_scales: null,
              items: [
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/anagrafe-e-stato-civile',
                  '@type': 'Document',
                  UID: 'faeb6fc34cc246298b7f53b0a7536ad6',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'anagrafe-e-stato-civile',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Anagrafe e stato civile',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/cultura-e-tempo-libero',
                  '@type': 'Document',
                  UID: 'e3eb6aa51400444d8f237533e7b752ea',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'cultura-e-tempo-libero',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Cultura e tempo libero',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/vita-lavorativa',
                  '@type': 'Document',
                  UID: '98b251d125a04fcf80349379d0caac94',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'vita-lavorativa',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Vita lavorativa',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/imprese-e-commercio',
                  '@type': 'Document',
                  UID: '0fcda9ec960e424c8834fcc01158bd8b',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'imprese-e-commercio',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Imprese e commercio',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/appalti-pubblici',
                  '@type': 'Document',
                  UID: '483f4061374a4c3ba6abd8e1c601ed7d',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'appalti-pubblici',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Appalti pubblici',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/edilizia-sue',
                  '@type': 'Document',
                  UID: '6b3d5496fdc741c68bb5117ddc293f17',
                  description:
                    "Include lo Sportello Unico per l'Edilizia (SUE), rivolto a tutti i cittadini e professionisti che devono effettuare interventi edilizi nel territorio comunale.",
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'edilizia-sue',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Edilizia Privata',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/turismo',
                  '@type': 'Document',
                  UID: '17a28ac2367549bb892cbd4334e1cbf2',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'turismo',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Turismo',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/mobilita-e-trasporti',
                  '@type': 'Document',
                  UID: 'af26740bef5b4deba91a64138f2b30f5',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'mobilita-e-trasporti',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Mobilit\u00e0 e trasporti',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/educazione-e-formazione',
                  '@type': 'Document',
                  UID: 'a9c2e19802614b5fa6f8dc10c904638e',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'educazione-e-formazione',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Educazione e formazione',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/tributi-finanze-e-contravvenzioni',
                  '@type': 'Document',
                  UID: '04da5f9ae78c49939fdfdb1dadda4c87',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'tributi-finanze-e-contravvenzioni',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Tributi, finanze e contravvenzioni',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/giustizia-e-sicurezza-pubblica',
                  '@type': 'Document',
                  UID: '74eeb31027904a7da2b8f5a09d90e742',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'giustizia-e-sicurezza-pubblica',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Giustizia e sicurezza pubblica',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/ambiente-casa',
                  '@type': 'Document',
                  UID: '6a9ddb739b894dd982ab8053e794a7c4',
                  description:
                    'Ufficio di riferimento per la gestione del verde urbano e delle questioni a carattere ambientale, tra cui la guida del canile intercomunale e il servizio alloggi. ',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'ambiente-casa',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Ambiente e Casa',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/salute-benessere-e-assistenza',
                  '@type': 'Document',
                  UID: 'b2232fc9342149d0abd57be5174ae2ee',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'salute-benessere-e-assistenza',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Salute, benessere e assistenza',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/servizi/autorizzazioni',
                  '@type': 'Document',
                  UID: '0de92b44c0f742d589ba832a107083be',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'autorizzazioni',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Autorizzazioni',
                  type_title: 'Pagina',
                },
              ],
              mime_type: null,
              review_state: 'published',
              title: 'Servizi',
              type_title: 'Pagina',
            },
            {
              '@id': 'https://v3.io-comune.redturtle.it/api/novita',
              '@type': 'Document',
              UID: 'ed4e079dc3ed4abb831d4326f3eb2234',
              description: '',
              design_italia_meta_type: 'Pagina',
              enhanced_links_enabled: null,
              getObjSize: null,
              id: 'novita',
              image_field: null,
              image_scales: null,
              items: [
                {
                  '@id': 'https://v3.io-comune.redturtle.it/api/novita/notizie',
                  '@type': 'Document',
                  UID: '57083957163c455bbfa2e07c06b4dde4',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'notizie',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Notizie',
                  type_title: 'Pagina',
                },
                {
                  '@id': 'https://v3.io-comune.redturtle.it/api/novita/avvisi',
                  '@type': 'Document',
                  UID: '36a22ae7ae5a4205b058bbd04296828e',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'avvisi',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Avvisi',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/novita/comunicati',
                  '@type': 'Document',
                  UID: 'a5e1923b2f2f4737820da1cc7fdb50d0',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'comunicati',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Comunicati',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/novita/test-ricorrenza',
                  '@type': 'Event',
                  UID: '41dd0fae62dd4ca792755c39fb8e9790',
                  description: 'desscrizione',
                  design_italia_meta_type: 'Evento',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'test-ricorrenza',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  start: '2024-01-31T13:00:00+00:00',
                  tipologia_evento: {
                    title: 'Evento culturale',
                    token: 'evento_culturale',
                  },
                  title: 'test ricorrenza',
                  type_title: 'Evento',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/novita/servizio-prova',
                  '@type': 'Servizio',
                  UID: '55e1041e61554902849f4192c8ac604a',
                  canale_digitale: {
                    blocks: {
                      'd5e669d2-ee9a-44dc-a79c-82965980c147': {
                        '@type': 'text',
                        text: {
                          blocks: [
                            {
                              data: {},
                              depth: 0,
                              entityRanges: [],
                              inlineStyleRanges: [],
                              key: '2q1tc',
                              text: 'klklkl',
                              type: 'unstyled',
                            },
                          ],
                          entityMap: {},
                        },
                      },
                    },
                    blocks_layout: {
                      items: ['d5e669d2-ee9a-44dc-a79c-82965980c147'],
                    },
                  },
                  description: 'sdfsdfsd',
                  design_italia_meta_type: 'Servizio',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'servizio-prova',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  parent_title: 'Novit\u00e0',
                  parent_url: 'https://v3.io-comune.redturtle.it/api/novita',
                  review_state: 'private',
                  title: 'servizio prova',
                  type_title: 'Servizio',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/novita/prova-bando',
                  '@type': 'Bando',
                  UID: '6a4cb59c46e54ad6aafe0d8fde6ae4b7',
                  description: '',
                  design_italia_meta_type: 'Bando',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'prova-bando',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  tipologia_bando: 'beni_servizi',
                  title: 'prova bando',
                  type_title: 'Bando',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/novita/evento-di-prova',
                  '@type': 'Event',
                  UID: '1261a59e1ddc4307859735066263a25c',
                  description: 'errore contact link',
                  design_italia_meta_type: 'Evento',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'evento-di-prova',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  start: '2024-04-16T08:00:00+00:00',
                  tipologia_evento: {
                    title: 'Evento culturale',
                    token: 'evento_culturale',
                  },
                  title: 'evento di prova',
                  type_title: 'Evento',
                },
              ],
              mime_type: null,
              review_state: 'published',
              title: 'Novit\u00e0',
              type_title: 'Pagina',
            },
            {
              '@id':
                'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati',
              '@type': 'Document',
              UID: '096ffecc799347cdbdf6ac72cb10a326',
              description: '',
              design_italia_meta_type: 'Pagina',
              enhanced_links_enabled: null,
              getObjSize: null,
              id: 'documenti-e-dati',
              image_field: null,
              image_scales: null,
              items: [
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/documenti-albo-pretorio',
                  '@type': 'Document',
                  UID: '1a6b2cec0b154e5daf5de55eec8843b7',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'documenti-albo-pretorio',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Documenti albo pretorio',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/modulistica',
                  '@type': 'Document',
                  UID: '2b79022158c242c2ac684966129d363b',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'modulistica',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Modulistica',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/atti-normativi',
                  '@type': 'Document',
                  UID: 'ed85ae3feeb140dfac9dc767a222bdef',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'atti-normativi',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Atti normativi',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/accordi-tra-enti',
                  '@type': 'Document',
                  UID: 'e7c325e1c0b04e2da03471bc4b7ff8ec',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'accordi-tra-enti',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Accordi tra enti',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/documenti-attivita-politica',
                  '@type': 'Document',
                  UID: '4306802fcbfc44289d0672a710551451',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'documenti-attivita-politica',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Documenti attivit\u00e0 politica',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/documenti-funzionamento-interno',
                  '@type': 'Document',
                  UID: 'a220ee3e45454373b4a14e3920adcab0',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'documenti-funzionamento-interno',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Documenti funzionamento interno',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/documenti-tecnici-di-supporto',
                  '@type': 'Document',
                  UID: 'ccd8ee62406a448fa898e8db1ed9dd3b',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'documenti-tecnici-di-supporto',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Documenti (tecnici) di supporto',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/dataset',
                  '@type': 'Document',
                  UID: '9d32bdd167a74532a303809e5fc907ef',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'dataset',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Dataset',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/bandi',
                  '@type': 'Document',
                  UID: '9a115f06538b49f9b3090f10415c968d',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'bandi',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'published',
                  title: 'Bandi',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/istanze',
                  '@type': 'Document',
                  UID: 'd375a6a8cdde41649c315cf371c563f8',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'istanze',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Istanze',
                  type_title: 'Pagina',
                },
                {
                  '@id':
                    'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati/pagina-test-life-events',
                  '@type': 'Document',
                  UID: 'f3cf2c91f4214833bb7a90cb19918013',
                  description: '',
                  design_italia_meta_type: 'Pagina',
                  enhanced_links_enabled: null,
                  getObjSize: null,
                  id: 'pagina-test-life-events',
                  image_field: null,
                  image_scales: null,
                  mime_type: null,
                  review_state: 'private',
                  title: 'Pagina test life events',
                  type_title: 'Pagina',
                },
              ],
              mime_type: null,
              review_state: 'published',
              title: 'Documenti e dati',
              type_title: 'Pagina',
            },
          ],
          rootPath: '/',
        },
        {
          items: [
            {
              '@id':
                'https://v3.io-comune.redturtle.it/api/sottosito-di-prova-2/pagina-interna-sottosito',
              '@type': 'Document',
              UID: 'f54ab941ef9b447ab83d966ad3fc4510',
              description: '',
              design_italia_meta_type: 'Pagina',
              enhanced_links_enabled: null,
              getObjSize: null,
              id: 'pagina-interna-sottosito',
              image_field: null,
              image_scales: null,
              items: [],
              mime_type: null,
              review_state: 'private',
              title: 'Pagina 1',
              type_title: 'Pagina',
            },
          ],
          rootPath: '/sottosito-di-prova',
        },
      ],
      parliamo_di: [
        { title: "Accesso all'informazione", key: 'accesso-all-informazione' },
        { title: 'Animale domestico', key: 'animale-domestico' },
      ],
    },
  },
  navigation: {
    items: [
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/servizi',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/anagrafe-e-stato-civile',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Anagrafe e stato civile',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/cultura-e-tempo-libero',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Cultura e tempo libero',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/vita-lavorativa',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Vita lavorativa',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/imprese-e-commercio',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Imprese e commercio',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/appalti-pubblici',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Appalti pubblici',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/servizi/edilizia-sue',
            description:
              "Include lo Sportello Unico per l'Edilizia (SUE), rivolto a tutti i cittadini e professionisti che devono effettuare interventi edilizi nel territorio comunale.",
            items: [],
            review_state: 'private',
            title: 'Edilizia Privata',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/servizi/turismo',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Turismo',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/mobilita-e-trasporti',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Mobilità e trasporti',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/educazione-e-formazione',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Educazione e formazione',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/tributi-finanze-e-contravvenzioni',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Tributi, finanze e contravvenzioni',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/giustizia-e-sicurezza-pubblica',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Giustizia e sicurezza pubblica',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/ambiente-casa',
            description:
              'Ufficio di riferimento per la gestione del verde urbano e delle questioni a carattere ambientale, tra cui la guida del canile intercomunale e il servizio alloggi. ',
            items: [],
            review_state: 'private',
            title: 'Ambiente e Casa',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/salute-benessere-e-assistenza',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Salute, benessere e assistenza',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/servizi/autorizzazioni',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Autorizzazioni',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'published',
        title: 'Servizi',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/vivere-novellara',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/vivere-novellara/eventi',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Eventi',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/vivere-novellara/luoghi',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Luoghi',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/vivere-novellara/esempio-pagina-con-indice',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Esempio pagina con indice',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/vivere-novellara/evento-che-dura-un-anno',
            description: 'ciao',
            items: [],
            review_state: 'private',
            title: 'Evento che dura un anno',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/vivere-novellara/visita-guidata-biblioteca-u-mazzini',
            description:
              'La Biblioteca “U. Mazzini” organizza una visita guidata gratuita alle bellezze architettoniche di Palazzo Crozza, in Corso Cavour 251, le sue eleganti sale affrescate e alcuni dei tesori custoditi dalla biblioteca, che vanta un prezioso patrimonio librari',
            items: [],
            review_state: 'published',
            title: 'Visita guidata Biblioteca "U. Mazzini"',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'published',
        title: 'Vivere Novellara',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/novita',
        description: '',
        items: [
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/novita/notizie',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Notizie',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/novita/avvisi',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Avvisi',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/novita/comunicati',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Comunicati',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/novita/test-ricorrenza',
            description: 'desscrizione',
            items: [],
            review_state: 'private',
            title: 'test ricorrenza',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/novita/evento-di-prova',
            description: 'errore contact link',
            items: [],
            review_state: 'private',
            title: 'evento di prova',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'published',
        title: 'Novità',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/amministrazione',
        description: 'descr modificata',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/amministrazione/politici',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Politici',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/amministrazione/personale-amministrativo',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Personale Amministrativo',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/amministrazione/organi-di-governo',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Organi di governo',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/amministrazione/aree-amministrative',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Aree amministrative',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/amministrazione/uffici',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Uffici',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/amministrazione/enti-e-fondazioni',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Enti e fondazioni',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Documenti e dati',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/amministrazione/test-reference',
            description: '',
            items: [],
            review_state: 'private',
            title: 'test reference',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'published',
        title: 'Amministrazione',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/accessibility',
        description:
          'Pages with accessibility tests - Please, do not delete this folder.',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/accessibility/every-block-under-the-sun',
            description: 'Descrizione',
            items: [],
            review_state: 'private',
            title: 'EVERY BLOCK UNDER THE SUN',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/accessibility/every-ct-under-the-sun',
            description: '',
            items: [],
            review_state: 'private',
            title: 'EVERY CT UNDER THE SUN',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/accessibility/accessibility-page-test-listing-blocks',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Accessibility Page Test - Listing Blocks',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/accessibility/accessibility-page-test-form-block',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Accessibility Page Test - Form Block',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/accessibility/accessibility-page-test-regular-blocks',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Accessibility Page Test - Regular Blocks',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/accessibility/contenttypes-for-accessibility',
            description: '',
            items: [],
            review_state: 'published',
            title: 'ContentTypes fot Accessibility',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'private',
        title: 'Accessibility',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/dati-di-test',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/dati-di-test/bug-37783',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Bug 37783',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/dati-di-test/bug-37776',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Bug 37776',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/dati-di-test/bug-37777',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Bug 37777',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/dati-di-test/bug-37775',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Bug 37775',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/dati-di-test/bug-37769',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Bug 37769',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/dati-di-test/evento-test',
            description: 'descrizione Evento test',
            items: [],
            review_state: 'private',
            title: 'Evento test',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/dati-di-test/prova',
            description: 'prova descrizione',
            items: [],
            review_state: 'private',
            title: 'prova',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'private',
        title: 'Dati di test',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/wagner-experimentations',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/gallery',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Gallery',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/here-the-things-happens',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Here the things happens',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/editor-testo',
            description: '',
            items: [],
            review_state: 'private',
            title: 'editor testo',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/index',
            description: '',
            items: [],
            review_state: 'private',
            title: 'index',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/accordion-per-stampa',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Accordion per stampa',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/docs',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Docs',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/test',
            description: '',
            items: [],
            review_state: 'private',
            title: 'test',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/rss',
            description: '',
            items: [],
            review_state: 'private',
            title: 'RSS',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/form',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Form',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/test-blocchi',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Test blocchi',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/blocco-elenco-test-bg-color',
            description: '',
            items: [],
            review_state: 'private',
            title: 'blocco elenco test bg color',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/listing-grid-gallery',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Listing grid gallery',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/card-semplice-slide',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Card listing slider - variations',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/form-1',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Form',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/test-faq-block',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Test FAQ Block',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/wagner-experimentations/4.0',
            description: '',
            items: [],
            review_state: 'published',
            title: '4.0',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'published',
        title: 'Wagner Experimentations',
      },
      {
        '@id':
          'https://v3.io-comune.redturtle.it/api/pagina-test-blocco-img-links',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Pagina Test Blocco IMG Links',
      },
      {
        '@id':
          'https://v3.io-comune.redturtle.it/api/test-listing-life-events-business-events',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Test listing life events / business events',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-tipo-di-luogo',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Test "tipo di luogo"',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-evento-fine-aperta',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-evento-fine-aperta/immagini',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Immagini',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-evento-fine-aperta/video',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Video',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-evento-fine-aperta/sponsor_evento',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Sponsor Evento',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-evento-fine-aperta/documenti',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Allegati',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'private',
        title: 'Test evento fine aperta',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-sabrina',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/news-con-gallery',
            description: 'Descrizione',
            items: [],
            review_state: 'private',
            title: 'News con gallery',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/nuovo-evento',
            description: 'Descritto',
            items: [],
            review_state: 'private',
            title: 'Nuovo evento',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/notizia-prova',
            description: 'Lorem',
            items: [],
            review_state: 'private',
            title: 'Notizia prova',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/every-block-under-the-sun',
            description: 'Descrizione',
            items: [],
            review_state: 'published',
            title: 'EVERY BLOCK UNDER THE SUN',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun',
            description: '',
            items: [],
            review_state: 'published',
            title: 'EVERY CT UNDER THE SUN',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/test-template-bandi',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Test template bandi',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/raccolta-collegamenti-esterni',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Raccolta collegamenti esterni',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/test-card-bandiinevidence-con-titoli-corti',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Test Card BandiInEvidence con titoli corti',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/test-contactscard',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Test ContactsCard',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/test-evento-bug-date-su-piu-anni',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Test evento - bug date su più anni',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/pagina-blocco-cerca',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Pagina blocco cerca',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/calendario-e-eventi-ricorrenti',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Calendario e eventi ricorrenti',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/contenuti-con-immagini-anteprima',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Contenuti con immagini anteprima',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/calendario',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Calendario',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/ricerca-eventi',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Ricerca eventi',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/test-sabrina/pagina',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Pagina',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/test-evento-per-s-lazzaro',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Test evento per S. Lazzaro',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/evento-con-fine-aperta-test',
            description: 'Descrizione',
            items: [],
            review_state: 'private',
            title: 'Evento con fine aperta test',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/cerca-con-filtri',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Cerca con filtri',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/test-uo-con-tanti-servizi',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Test UO con tanti servizi',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/testcampo-dove-rivolgersi-ct-servizio',
            description: '',
            items: [],
            review_state: 'private',
            title: 'testcampo dove rivolgersi ct servizio',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-sabrina/test-ricerca-evidenziazione',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Test ricerca evidenziazione',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'private',
        title: 'Test Sabrina',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-martina',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/evento-test-rotto-nei-listing',
            description: 'sono rotto aggiustami',
            items: [],
            review_state: 'private',
            title: 'Evento test rotto nei listing',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/pagina-test',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Pagina test',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/news-test',
            description: 'd',
            items: [],
            review_state: 'private',
            title: 'News test',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/evento-2',
            description: '2',
            items: [],
            review_state: 'private',
            title: 'evento 2',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/copy_of_evento-2',
            description: '2',
            items: [],
            review_state: 'private',
            title: 'evento 3',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/pagina-test-copincolla-blocchi',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Pagina test copincolla blocchi',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/form-rotto',
            description: '',
            items: [],
            review_state: 'private',
            title: 'form rotto?',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/test-blocco-search',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Test blocco search',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/test-martina/luoghi',
            description: '',
            items: [],
            review_state: 'private',
            title: 'luoghi',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/pagina-piccina-piccio',
            description: '',
            items: [],
            review_state: 'private',
            title: 'pagina piccina piccio',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/replica-bug-48970',
            description: '',
            items: [],
            review_state: 'private',
            title: 'replica bug 48970',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/eventi-su-piu-anni',
            description: '',
            items: [],
            review_state: 'private',
            title: "eventi su piu' anni",
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/uno-senza-ricorrenza',
            description: 'sss',
            items: [],
            review_state: 'published',
            title: 'uno senza ricorrenza',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/feedback-test',
            description: '',
            items: [],
            review_state: 'published',
            title: 'Feedback test',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-martina/accessibilita-date-pickers',
            description: '',
            items: [],
            review_state: 'private',
            title: "Accessibilita' date pickers",
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/test-martina/aaaaaaa',
            description: 'aaaaaa',
            items: [],
            review_state: 'private',
            title: 'AAAAAAA',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/test-martina/test',
            description: 'aaaa',
            items: [],
            review_state: 'private',
            title: 'test',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'published',
        title: 'Test Martina',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/titolo-1',
        description: '',
        items: [],
        review_state: 'private',
        title: 'titolo',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-2',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/form-di-prova',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Form di prova',
      },
      {
        '@id':
          'https://v3.io-comune.redturtle.it/api/pagina-vuota-senza-blocchi',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Pagina vuota senza blocchi',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-indirizzario',
        description: '',
        items: [],
        review_state: 'private',
        title: 'TEST INDIRIZZARIO',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/titolo-2',
        description: 'Descrizione',
        items: [
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/titolo-2/multimedia',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Multimedia',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/titolo-2/documenti-allegati',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Documenti allegati',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'private',
        title: 'Titolo',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/copia-incolla-blocchi',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Copia incolla blocchi',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/titolo-3',
        description: 'Descrizione',
        items: [],
        review_state: 'private',
        title: 'Titolo',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-43077',
        description: 'descrizione',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-43077/multimedia',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Multimedia',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-43077/documenti-allegati',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Documenti allegati',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'private',
        title: 'test 43077',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/tlhkjgfh',
        description: '',
        items: [],
        review_state: 'private',
        title: 'tlhkjgfh',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-form-giulia',
        description: '',
        items: [],
        review_state: 'published',
        title: 'test form giulia e plugin comuni-chiamo',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-giulia',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-giulia/evento-con-ricorrenza',
            description: 'fdasfa',
            items: [],
            review_state: 'private',
            title: 'Evento con ricorrenza',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-giulia/test-giulia-evento',
            description: 'dsad',
            items: [],
            review_state: 'private',
            title: 'test giulia evento',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/test-giulia/evento',
            description: 'dsfafa',
            items: [],
            review_state: 'private',
            title: 'evento',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-giulia/tutto-compilato',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Tutto compilato',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/test-giulia/notizia',
            description: 'descrizionoe',
            items: [],
            review_state: 'private',
            title: 'notizia',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/test-giulia/form',
            description: '',
            items: [],
            review_state: 'private',
            title: 'form',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'private',
        title: 'Test Giulia',
      },
      {
        '@id':
          'https://v3.io-comune.redturtle.it/api/contenitore-di-collegamenti',
        description: '',
        items: [],
        review_state: 'published',
        title: 'Contenitore di collegamenti',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/prova-cekk',
        description: '',
        items: [],
        review_state: 'private',
        title: 'prova cekk',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/blocco-elenco',
        description: '',
        items: [],
        review_state: 'private',
        title: 'blocco elenco',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/copy_of_blocco-elenco',
        description: '',
        items: [],
        review_state: 'private',
        title: 'blocco elenco',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-comuni-chiamo',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Test Comuni Chiamo',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/notizia-di-test',
        description: '',
        items: [],
        review_state: 'private',
        title: 'notizia di test',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-sara',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Test Sara',
      },
      {
        '@id':
          'https://v3.io-comune.redturtle.it/api/test-accessibilita-immagini',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Test accessibilità immagini',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/ricerca-bandi',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Ricerca bandi',
      },
      {
        '@id':
          'https://v3.io-comune.redturtle.it/api/test-listing-card-con-immagine',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test-listing-card-con-immagine',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/pagina-con-photogallery',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Pagina con Photogallery',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-giulia-accordion',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test giulia accordion',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-bandi',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/test-bandi/pagina-di-ricerca-bandi',
            description: '',
            items: [],
            review_state: 'private',
            title: 'Pagina di ricerca bandi',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'published',
        title: 'test bandi',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-path',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test path',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-path-figlia',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test path figlia',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/prova-parallax',
        description: '',
        items: [],
        review_state: 'private',
        title: 'prova parallax',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/blocco-elenco-1',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Blocco elenco',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/prova-cekk-1',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/prova-cekk-1/evento-senza-ricorrenza',
            description: 'dsfsdf',
            items: [],
            review_state: 'private',
            title: 'Evento senza ricorrenza',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/prova-cekk-1/evento-con-ricorrenza',
            description: 'poi',
            items: [],
            review_state: 'private',
            title: 'Evento con Ricorrenza',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'private',
        title: 'prova cekk',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-3',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-4',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-daniele',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Test Daniele',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-listing',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test listing',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/cta-block',
        description: '',
        items: [],
        review_state: 'private',
        title: 'cta block',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/slider-giulia',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Slider giulia',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/slider',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Slider',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-immagine',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test immagine',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-elenchi-puntati',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test elenchi puntati',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-form',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test form',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-mappa',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test mappa',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-per-fix-links',
        description: '',
        items: [],
        review_state: 'private',
        title: 'Test per fix links',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-slider',
        description: '',
        items: [],
        review_state: 'published',
        title: 'test slider',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/prova-rss',
        description: '',
        items: [],
        review_state: 'private',
        title: 'prova rss',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/punti-elenco',
        description: '',
        items: [],
        review_state: 'private',
        title: 'punti elenco',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/blocco-con-icone',
        description: '',
        items: [],
        review_state: 'private',
        title: 'blocco con icone',
      },
      {
        '@id':
          'https://v3.io-comune.redturtle.it/api/laboratorio-scrittura-creativa',
        description: '',
        items: [],
        review_state: 'published',
        title:
          'LABORATORIO DI SCRITTURA CREATIVA - LE RADICI INVISIBILI | 2° MODULO',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-form-1',
        description: '',
        items: [],
        review_state: 'published',
        title: 'test form',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/prestazioni',
        description: '',
        items: [
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/prestazioni/notizia-in-evidenza-con-titolo-molto-lungo-che-andra-sicuramente-su-piu-righe-cosi-testiamo-bene-il-layout-shift',
            description:
              'Notizia in evidenza con titolo molto lungo che andrà sicuramente su più righe cosi testiamo bene il layout shiftNotizia in evidenza con titolo molto lungo che andrà sicuramente su più righe cosi testiamo bene il layout shiftNotizia in evidenza con titolo ',
            items: [],
            review_state: 'published',
            title:
              "Notizia in evidenza con titolo molto lungo che andrà sicuramente su più righe cosi testiamo bene il layout shift e vediamo se lighthouse migliora il punteggio. Speriamo di si. siamo fiduciosi. Più testo c'è piu test facciamo. lorem ipsum lorem ipsum lorem",
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/prestazioni/pnrr-missione-1-la-transizione-digitale-a-rolo',
            description:
              'Giovedì 18 aprile ore 21.00 al Centro Jolly - Incontro pubblico per illustrare il progetto',
            items: [],
            review_state: 'published',
            title: 'PNRR - Missione 1: La transizione digitale a Rolo',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/prestazioni/la-resistenza-delle-donne',
            description:
              'Mostra dedicata alle donne, al loro amore per la libertà e al loro coraggio',
            items: [],
            review_state: 'published',
            title: 'La resistenza delle donne 1943 - 1945',
            use_view_action_in_listings: false,
          },
          {
            '@id':
              'https://v3.io-comune.redturtle.it/api/prestazioni/convocazione-al-consiglio-comunale',
            description:
              "E' disposta la convocazione del Consiglio Comunale in seduta ordinaria per il giorno 16/04/2024 alle ore 21:00",
            items: [],
            review_state: 'published',
            title: 'Convocazione del Consiglio Comunale',
            use_view_action_in_listings: false,
          },
          {
            '@id': 'https://v3.io-comune.redturtle.it/api/prestazioni/blocchi',
            description: '',
            items: [],
            review_state: 'private',
            title: 'blocchi',
            use_view_action_in_listings: false,
          },
        ],
        review_state: 'published',
        title: 'prestazioni',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/blocco-alert-schedulato',
        description: '',
        items: [],
        review_state: 'published',
        title: 'Blocco alert schedulato',
      },
      {
        '@id': 'https://v3.io-comune.redturtle.it/api/test-descrizione',
        description: '',
        items: [],
        review_state: 'private',
        title: 'test descrizione',
      },
    ],
  },
  dropdownMenuNavItems: {
    result: [
      {
        items: [
          {
            blocks: {
              '98cbf210-f12f-4b5e-9feb-3c3b6d18ab46': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['98cbf210-f12f-4b5e-9feb-3c3b6d18ab46'],
            },
            id_lighthouse: 'management',
            linkUrl: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/amministrazione',
                '@type': 'Document',
                UID: '358963972f504c95aaf02b9a2f9bf3bd',
                description: 'descr modificata',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'amministrazione',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/politici',
                    '@type': 'Document',
                    UID: '34d81700727d417aa6da8730d82eba12',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'politici',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Politici',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/personale-amministrativo',
                    '@type': 'Document',
                    UID: '1d34cfd64ead40cdab94800cc6a4f88d',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'personale-amministrativo',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Personale Amministrativo',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/organi-di-governo',
                    '@type': 'Document',
                    UID: '0cd82a8ac97344f5ba4843d84544cf42',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'organi-di-governo',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Organi di governo',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/aree-amministrative',
                    '@type': 'Document',
                    UID: '0115a13cc0934b68b060d36d4e492142',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'aree-amministrative',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Aree amministrative',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/uffici',
                    '@type': 'Document',
                    UID: '0cdc037f3c5d4b6986ff093eb04c6385',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'uffici',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Uffici',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/enti-e-fondazioni',
                    '@type': 'Document',
                    UID: 'e3e56206299242ae94ec296991821bfc',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'enti-e-fondazioni',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Enti e fondazioni',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati',
                    '@type': 'Document',
                    UID: '096ffecc799347cdbdf6ac72cb10a326',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'documenti-e-dati',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Documenti e dati',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/test',
                    '@type': 'Persona',
                    UID: '3e84ed8341eb458399c2b4b9af72e6b1',
                    description: '',
                    design_italia_meta_type: 'Persona pubblica',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'test',
                    image_field: '',
                    image_scales: null,
                    incarichi: '',
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'test',
                    type_title: 'Persona pubblica',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/bando-di-test-giulia',
                    '@type': 'Bando',
                    UID: 'd0e224c6a20347fc9adf203637fc7e82',
                    description: '',
                    design_italia_meta_type: 'Bando',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'bando-di-test-giulia',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    tipologia_bando: 'beni_servizi',
                    title: 'Bando di test giulia',
                    type_title: 'Bando',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/test-reference',
                    '@type': 'Document',
                    UID: '079ffb542614462498ad23951ea6a74f',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'test-reference',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'test reference',
                    type_title: 'Pagina',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'Amministrazione',
                type_title: 'Pagina',
              },
            ],
            mode: 'simpleLink',
            navigationRoot: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/amministrazione',
                '@type': 'Document',
                UID: '358963972f504c95aaf02b9a2f9bf3bd',
                description: 'descr modificata',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'amministrazione',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/politici',
                    '@type': 'Document',
                    UID: '34d81700727d417aa6da8730d82eba12',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'politici',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Politici',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/personale-amministrativo',
                    '@type': 'Document',
                    UID: '1d34cfd64ead40cdab94800cc6a4f88d',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'personale-amministrativo',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Personale Amministrativo',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/organi-di-governo',
                    '@type': 'Document',
                    UID: '0cd82a8ac97344f5ba4843d84544cf42',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'organi-di-governo',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Organi di governo',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/aree-amministrative',
                    '@type': 'Document',
                    UID: '0115a13cc0934b68b060d36d4e492142',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'aree-amministrative',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Aree amministrative',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/uffici',
                    '@type': 'Document',
                    UID: '0cdc037f3c5d4b6986ff093eb04c6385',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'uffici',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Uffici',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/enti-e-fondazioni',
                    '@type': 'Document',
                    UID: 'e3e56206299242ae94ec296991821bfc',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'enti-e-fondazioni',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Enti e fondazioni',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati',
                    '@type': 'Document',
                    UID: '096ffecc799347cdbdf6ac72cb10a326',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'documenti-e-dati',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Documenti e dati',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/test',
                    '@type': 'Persona',
                    UID: '3e84ed8341eb458399c2b4b9af72e6b1',
                    description: '',
                    design_italia_meta_type: 'Persona pubblica',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'test',
                    image_field: '',
                    image_scales: null,
                    incarichi: '',
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'test',
                    type_title: 'Persona pubblica',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/bando-di-test-giulia',
                    '@type': 'Bando',
                    UID: 'd0e224c6a20347fc9adf203637fc7e82',
                    description: '',
                    design_italia_meta_type: 'Bando',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'bando-di-test-giulia',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    tipologia_bando: 'beni_servizi',
                    title: 'Bando di test giulia',
                    type_title: 'Bando',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/test-reference',
                    '@type': 'Document',
                    UID: '079ffb542614462498ad23951ea6a74f',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'test-reference',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'test reference',
                    type_title: 'Pagina',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'Amministrazione',
                type_title: 'Pagina',
              },
            ],
            showMoreLink: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/amministrazione',
                '@type': 'Document',
                UID: '358963972f504c95aaf02b9a2f9bf3bd',
                description: 'descr modificata',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'amministrazione',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/politici',
                    '@type': 'Document',
                    UID: '34d81700727d417aa6da8730d82eba12',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'politici',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Politici',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/personale-amministrativo',
                    '@type': 'Document',
                    UID: '1d34cfd64ead40cdab94800cc6a4f88d',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'personale-amministrativo',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Personale Amministrativo',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/organi-di-governo',
                    '@type': 'Document',
                    UID: '0cd82a8ac97344f5ba4843d84544cf42',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'organi-di-governo',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Organi di governo',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/aree-amministrative',
                    '@type': 'Document',
                    UID: '0115a13cc0934b68b060d36d4e492142',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'aree-amministrative',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Aree amministrative',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/uffici',
                    '@type': 'Document',
                    UID: '0cdc037f3c5d4b6986ff093eb04c6385',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'uffici',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Uffici',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/enti-e-fondazioni',
                    '@type': 'Document',
                    UID: 'e3e56206299242ae94ec296991821bfc',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'enti-e-fondazioni',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Enti e fondazioni',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/documenti-e-dati',
                    '@type': 'Document',
                    UID: '096ffecc799347cdbdf6ac72cb10a326',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'documenti-e-dati',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Documenti e dati',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/test',
                    '@type': 'Persona',
                    UID: '3e84ed8341eb458399c2b4b9af72e6b1',
                    description: '',
                    design_italia_meta_type: 'Persona pubblica',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'test',
                    image_field: '',
                    image_scales: null,
                    incarichi: '',
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'test',
                    type_title: 'Persona pubblica',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/bando-di-test-giulia',
                    '@type': 'Bando',
                    UID: 'd0e224c6a20347fc9adf203637fc7e82',
                    description: '',
                    design_italia_meta_type: 'Bando',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'bando-di-test-giulia',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    tipologia_bando: 'beni_servizi',
                    title: 'Bando di test giulia',
                    type_title: 'Bando',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/amministrazione/test-reference',
                    '@type': 'Document',
                    UID: '079ffb542614462498ad23951ea6a74f',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'test-reference',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'test reference',
                    type_title: 'Pagina',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'Amministrazione',
                type_title: 'Pagina',
              },
            ],
            showMoreText: 'Vedi tutto',
            title: 'Amministrazione',
            visible: true,
          },
          {
            blocks: {
              '8fc6a0e2-610f-417a-9a46-15fe33eabdad': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['8fc6a0e2-610f-417a-9a46-15fe33eabdad'],
            },
            id_lighthouse: 'news',
            linkUrl: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/novita',
                '@type': 'Document',
                UID: 'ed4e079dc3ed4abb831d4326f3eb2234',
                description: '',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'novita',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/notizie',
                    '@type': 'Document',
                    UID: '57083957163c455bbfa2e07c06b4dde4',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'notizie',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Notizie',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/avvisi',
                    '@type': 'Document',
                    UID: '36a22ae7ae5a4205b058bbd04296828e',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'avvisi',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Avvisi',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/comunicati',
                    '@type': 'Document',
                    UID: 'a5e1923b2f2f4737820da1cc7fdb50d0',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'comunicati',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Comunicati',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/test-ricorrenza',
                    '@type': 'Event',
                    UID: '41dd0fae62dd4ca792755c39fb8e9790',
                    description: 'desscrizione',
                    design_italia_meta_type: 'Evento',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'test-ricorrenza',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    start: '2024-01-31T13:00:00+00:00',
                    tipologia_evento: [
                      {
                        title: 'Evento culturale',
                        token: 'evento_culturale',
                      },
                    ],
                    title: 'test ricorrenza',
                    type_title: 'Evento',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/servizio-prova',
                    '@type': 'Servizio',
                    UID: '55e1041e61554902849f4192c8ac604a',
                    business_events: [],
                    description: 'sdfsdfsd',
                    design_italia_meta_type: 'Servizio',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'servizio-prova',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    person_life_events: [],
                    review_state: 'private',
                    title: 'servizio prova',
                    type_title: 'Servizio',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/prova-bando',
                    '@type': 'Bando',
                    UID: '6a4cb59c46e54ad6aafe0d8fde6ae4b7',
                    description: '',
                    design_italia_meta_type: 'Bando',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'prova-bando',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    tipologia_bando: 'beni_servizi',
                    title: 'prova bando',
                    type_title: 'Bando',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/evento-di-prova',
                    '@type': 'Event',
                    UID: '1261a59e1ddc4307859735066263a25c',
                    description: 'errore contact link',
                    design_italia_meta_type: 'Evento',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'evento-di-prova',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    start: '2024-04-16T08:00:00+00:00',
                    tipologia_evento: [
                      {
                        title: 'Evento culturale',
                        token: 'evento_culturale',
                      },
                    ],
                    title: 'evento di prova',
                    type_title: 'Evento',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'Novit\u00e0',
                type_title: 'Pagina',
              },
            ],
            mode: 'simpleLink',
            navigationRoot: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/novita',
                '@type': 'Document',
                UID: 'ed4e079dc3ed4abb831d4326f3eb2234',
                description: '',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'novita',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/notizie',
                    '@type': 'Document',
                    UID: '57083957163c455bbfa2e07c06b4dde4',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'notizie',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Notizie',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/avvisi',
                    '@type': 'Document',
                    UID: '36a22ae7ae5a4205b058bbd04296828e',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'avvisi',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Avvisi',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/comunicati',
                    '@type': 'Document',
                    UID: 'a5e1923b2f2f4737820da1cc7fdb50d0',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'comunicati',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Comunicati',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/test-ricorrenza',
                    '@type': 'Event',
                    UID: '41dd0fae62dd4ca792755c39fb8e9790',
                    description: 'desscrizione',
                    design_italia_meta_type: 'Evento',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'test-ricorrenza',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    start: '2024-01-31T13:00:00+00:00',
                    tipologia_evento: [
                      {
                        title: 'Evento culturale',
                        token: 'evento_culturale',
                      },
                    ],
                    title: 'test ricorrenza',
                    type_title: 'Evento',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/servizio-prova',
                    '@type': 'Servizio',
                    UID: '55e1041e61554902849f4192c8ac604a',
                    business_events: [],
                    description: 'sdfsdfsd',
                    design_italia_meta_type: 'Servizio',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'servizio-prova',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    person_life_events: [],
                    review_state: 'private',
                    title: 'servizio prova',
                    type_title: 'Servizio',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/prova-bando',
                    '@type': 'Bando',
                    UID: '6a4cb59c46e54ad6aafe0d8fde6ae4b7',
                    description: '',
                    design_italia_meta_type: 'Bando',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'prova-bando',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    tipologia_bando: 'beni_servizi',
                    title: 'prova bando',
                    type_title: 'Bando',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/evento-di-prova',
                    '@type': 'Event',
                    UID: '1261a59e1ddc4307859735066263a25c',
                    description: 'errore contact link',
                    design_italia_meta_type: 'Evento',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'evento-di-prova',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    start: '2024-04-16T08:00:00+00:00',
                    tipologia_evento: [
                      {
                        title: 'Evento culturale',
                        token: 'evento_culturale',
                      },
                    ],
                    title: 'evento di prova',
                    type_title: 'Evento',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'Novit\u00e0',
                type_title: 'Pagina',
              },
            ],
            showMoreLink: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/novita',
                '@type': 'Document',
                UID: 'ed4e079dc3ed4abb831d4326f3eb2234',
                description: '',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'novita',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/notizie',
                    '@type': 'Document',
                    UID: '57083957163c455bbfa2e07c06b4dde4',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'notizie',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Notizie',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/avvisi',
                    '@type': 'Document',
                    UID: '36a22ae7ae5a4205b058bbd04296828e',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'avvisi',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Avvisi',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/comunicati',
                    '@type': 'Document',
                    UID: 'a5e1923b2f2f4737820da1cc7fdb50d0',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'comunicati',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Comunicati',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/test-ricorrenza',
                    '@type': 'Event',
                    UID: '41dd0fae62dd4ca792755c39fb8e9790',
                    description: 'desscrizione',
                    design_italia_meta_type: 'Evento',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'test-ricorrenza',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    start: '2024-01-31T13:00:00+00:00',
                    tipologia_evento: [
                      {
                        title: 'Evento culturale',
                        token: 'evento_culturale',
                      },
                    ],
                    title: 'test ricorrenza',
                    type_title: 'Evento',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/servizio-prova',
                    '@type': 'Servizio',
                    UID: '55e1041e61554902849f4192c8ac604a',
                    business_events: [],
                    description: 'sdfsdfsd',
                    design_italia_meta_type: 'Servizio',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'servizio-prova',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    person_life_events: [],
                    review_state: 'private',
                    title: 'servizio prova',
                    type_title: 'Servizio',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/prova-bando',
                    '@type': 'Bando',
                    UID: '6a4cb59c46e54ad6aafe0d8fde6ae4b7',
                    description: '',
                    design_italia_meta_type: 'Bando',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'prova-bando',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    tipologia_bando: 'beni_servizi',
                    title: 'prova bando',
                    type_title: 'Bando',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/novita/evento-di-prova',
                    '@type': 'Event',
                    UID: '1261a59e1ddc4307859735066263a25c',
                    description: 'errore contact link',
                    design_italia_meta_type: 'Evento',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'evento-di-prova',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    start: '2024-04-16T08:00:00+00:00',
                    tipologia_evento: [
                      {
                        title: 'Evento culturale',
                        token: 'evento_culturale',
                      },
                    ],
                    title: 'evento di prova',
                    type_title: 'Evento',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'Novit\u00e0',
                type_title: 'Pagina',
              },
            ],
            showMoreText: 'Vedi tutto',
            title: 'Novit\u00e0',
            visible: true,
          },
          {
            blocks: {
              'c0f720b7-81e0-4856-b260-59cf278393e7': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['c0f720b7-81e0-4856-b260-59cf278393e7'],
            },
            id_lighthouse: 'all-services',
            linkUrl: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/servizi',
                '@type': 'Document',
                UID: 'b9831cfefc1d4af2a349f9e886e56b0e',
                description: '',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'servizi',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/anagrafe-e-stato-civile',
                    '@type': 'Document',
                    UID: 'faeb6fc34cc246298b7f53b0a7536ad6',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'anagrafe-e-stato-civile',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Anagrafe e stato civile',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/cultura-e-tempo-libero',
                    '@type': 'Document',
                    UID: 'e3eb6aa51400444d8f237533e7b752ea',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'cultura-e-tempo-libero',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Cultura e tempo libero',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/vita-lavorativa',
                    '@type': 'Document',
                    UID: '98b251d125a04fcf80349379d0caac94',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'vita-lavorativa',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Vita lavorativa',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/imprese-e-commercio',
                    '@type': 'Document',
                    UID: '0fcda9ec960e424c8834fcc01158bd8b',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'imprese-e-commercio',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Imprese e commercio',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/appalti-pubblici',
                    '@type': 'Document',
                    UID: '483f4061374a4c3ba6abd8e1c601ed7d',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'appalti-pubblici',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Appalti pubblici',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/edilizia-sue',
                    '@type': 'Document',
                    UID: '6b3d5496fdc741c68bb5117ddc293f17',
                    description:
                      "Include lo Sportello Unico per l'Edilizia (SUE), rivolto a tutti i cittadini e professionisti che devono effettuare interventi edilizi nel territorio comunale.",
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'edilizia-sue',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Edilizia Privata',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/turismo',
                    '@type': 'Document',
                    UID: '17a28ac2367549bb892cbd4334e1cbf2',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'turismo',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Turismo',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/mobilita-e-trasporti',
                    '@type': 'Document',
                    UID: 'af26740bef5b4deba91a64138f2b30f5',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'mobilita-e-trasporti',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Mobilit\u00e0 e trasporti',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/educazione-e-formazione',
                    '@type': 'Document',
                    UID: 'a9c2e19802614b5fa6f8dc10c904638e',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'educazione-e-formazione',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Educazione e formazione',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/tributi-finanze-e-contravvenzioni',
                    '@type': 'Document',
                    UID: '04da5f9ae78c49939fdfdb1dadda4c87',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'tributi-finanze-e-contravvenzioni',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Tributi, finanze e contravvenzioni',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/giustizia-e-sicurezza-pubblica',
                    '@type': 'Document',
                    UID: '74eeb31027904a7da2b8f5a09d90e742',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'giustizia-e-sicurezza-pubblica',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Giustizia e sicurezza pubblica',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/ambiente-casa',
                    '@type': 'Document',
                    UID: '6a9ddb739b894dd982ab8053e794a7c4',
                    description:
                      'Ufficio di riferimento per la gestione del verde urbano e delle questioni a carattere ambientale, tra cui la guida del canile intercomunale e il servizio alloggi. ',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'ambiente-casa',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Ambiente e Casa',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/salute-benessere-e-assistenza',
                    '@type': 'Document',
                    UID: 'b2232fc9342149d0abd57be5174ae2ee',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'salute-benessere-e-assistenza',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Salute, benessere e assistenza',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/autorizzazioni',
                    '@type': 'Document',
                    UID: '0de92b44c0f742d589ba832a107083be',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'autorizzazioni',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Autorizzazioni',
                    type_title: 'Pagina',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'Servizi',
                type_title: 'Pagina',
              },
            ],
            mode: 'simpleLink',
            navigationRoot: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/servizi',
                '@type': 'Document',
                UID: 'b9831cfefc1d4af2a349f9e886e56b0e',
                description: '',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'servizi',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/anagrafe-e-stato-civile',
                    '@type': 'Document',
                    UID: 'faeb6fc34cc246298b7f53b0a7536ad6',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'anagrafe-e-stato-civile',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Anagrafe e stato civile',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/cultura-e-tempo-libero',
                    '@type': 'Document',
                    UID: 'e3eb6aa51400444d8f237533e7b752ea',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'cultura-e-tempo-libero',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Cultura e tempo libero',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/vita-lavorativa',
                    '@type': 'Document',
                    UID: '98b251d125a04fcf80349379d0caac94',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'vita-lavorativa',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Vita lavorativa',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/imprese-e-commercio',
                    '@type': 'Document',
                    UID: '0fcda9ec960e424c8834fcc01158bd8b',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'imprese-e-commercio',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Imprese e commercio',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/appalti-pubblici',
                    '@type': 'Document',
                    UID: '483f4061374a4c3ba6abd8e1c601ed7d',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'appalti-pubblici',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Appalti pubblici',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/edilizia-sue',
                    '@type': 'Document',
                    UID: '6b3d5496fdc741c68bb5117ddc293f17',
                    description:
                      "Include lo Sportello Unico per l'Edilizia (SUE), rivolto a tutti i cittadini e professionisti che devono effettuare interventi edilizi nel territorio comunale.",
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'edilizia-sue',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Edilizia Privata',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/turismo',
                    '@type': 'Document',
                    UID: '17a28ac2367549bb892cbd4334e1cbf2',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'turismo',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Turismo',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/mobilita-e-trasporti',
                    '@type': 'Document',
                    UID: 'af26740bef5b4deba91a64138f2b30f5',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'mobilita-e-trasporti',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Mobilit\u00e0 e trasporti',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/educazione-e-formazione',
                    '@type': 'Document',
                    UID: 'a9c2e19802614b5fa6f8dc10c904638e',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'educazione-e-formazione',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Educazione e formazione',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/tributi-finanze-e-contravvenzioni',
                    '@type': 'Document',
                    UID: '04da5f9ae78c49939fdfdb1dadda4c87',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'tributi-finanze-e-contravvenzioni',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Tributi, finanze e contravvenzioni',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/giustizia-e-sicurezza-pubblica',
                    '@type': 'Document',
                    UID: '74eeb31027904a7da2b8f5a09d90e742',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'giustizia-e-sicurezza-pubblica',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Giustizia e sicurezza pubblica',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/ambiente-casa',
                    '@type': 'Document',
                    UID: '6a9ddb739b894dd982ab8053e794a7c4',
                    description:
                      'Ufficio di riferimento per la gestione del verde urbano e delle questioni a carattere ambientale, tra cui la guida del canile intercomunale e il servizio alloggi. ',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'ambiente-casa',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Ambiente e Casa',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/salute-benessere-e-assistenza',
                    '@type': 'Document',
                    UID: 'b2232fc9342149d0abd57be5174ae2ee',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'salute-benessere-e-assistenza',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Salute, benessere e assistenza',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/autorizzazioni',
                    '@type': 'Document',
                    UID: '0de92b44c0f742d589ba832a107083be',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'autorizzazioni',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Autorizzazioni',
                    type_title: 'Pagina',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'Servizi',
                type_title: 'Pagina',
              },
            ],
            showMoreLink: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/servizi',
                '@type': 'Document',
                UID: 'b9831cfefc1d4af2a349f9e886e56b0e',
                description: '',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'servizi',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/anagrafe-e-stato-civile',
                    '@type': 'Document',
                    UID: 'faeb6fc34cc246298b7f53b0a7536ad6',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'anagrafe-e-stato-civile',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Anagrafe e stato civile',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/cultura-e-tempo-libero',
                    '@type': 'Document',
                    UID: 'e3eb6aa51400444d8f237533e7b752ea',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'cultura-e-tempo-libero',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Cultura e tempo libero',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/vita-lavorativa',
                    '@type': 'Document',
                    UID: '98b251d125a04fcf80349379d0caac94',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'vita-lavorativa',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Vita lavorativa',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/imprese-e-commercio',
                    '@type': 'Document',
                    UID: '0fcda9ec960e424c8834fcc01158bd8b',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'imprese-e-commercio',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Imprese e commercio',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/appalti-pubblici',
                    '@type': 'Document',
                    UID: '483f4061374a4c3ba6abd8e1c601ed7d',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'appalti-pubblici',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Appalti pubblici',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/edilizia-sue',
                    '@type': 'Document',
                    UID: '6b3d5496fdc741c68bb5117ddc293f17',
                    description:
                      "Include lo Sportello Unico per l'Edilizia (SUE), rivolto a tutti i cittadini e professionisti che devono effettuare interventi edilizi nel territorio comunale.",
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'edilizia-sue',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Edilizia Privata',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/turismo',
                    '@type': 'Document',
                    UID: '17a28ac2367549bb892cbd4334e1cbf2',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'turismo',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Turismo',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/mobilita-e-trasporti',
                    '@type': 'Document',
                    UID: 'af26740bef5b4deba91a64138f2b30f5',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'mobilita-e-trasporti',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Mobilit\u00e0 e trasporti',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/educazione-e-formazione',
                    '@type': 'Document',
                    UID: 'a9c2e19802614b5fa6f8dc10c904638e',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'educazione-e-formazione',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Educazione e formazione',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/tributi-finanze-e-contravvenzioni',
                    '@type': 'Document',
                    UID: '04da5f9ae78c49939fdfdb1dadda4c87',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'tributi-finanze-e-contravvenzioni',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Tributi, finanze e contravvenzioni',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/giustizia-e-sicurezza-pubblica',
                    '@type': 'Document',
                    UID: '74eeb31027904a7da2b8f5a09d90e742',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'giustizia-e-sicurezza-pubblica',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Giustizia e sicurezza pubblica',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/ambiente-casa',
                    '@type': 'Document',
                    UID: '6a9ddb739b894dd982ab8053e794a7c4',
                    description:
                      'Ufficio di riferimento per la gestione del verde urbano e delle questioni a carattere ambientale, tra cui la guida del canile intercomunale e il servizio alloggi. ',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'ambiente-casa',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Ambiente e Casa',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/salute-benessere-e-assistenza',
                    '@type': 'Document',
                    UID: 'b2232fc9342149d0abd57be5174ae2ee',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'salute-benessere-e-assistenza',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Salute, benessere e assistenza',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/servizi/autorizzazioni',
                    '@type': 'Document',
                    UID: '0de92b44c0f742d589ba832a107083be',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'autorizzazioni',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Autorizzazioni',
                    type_title: 'Pagina',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'Servizi',
                type_title: 'Pagina',
              },
            ],
            showMoreText: 'Vedi tutto',
            title: 'Servizi',
            visible: true,
          },
          {
            blocks: {
              'bb91a850-0820-4218-890c-2820bd6c01ed': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['bb91a850-0820-4218-890c-2820bd6c01ed'],
            },
            id_lighthouse: 'live',
            linkUrl: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/vivere-novellara',
                '@type': 'Document',
                UID: 'e916fa5b556c44848518d91b8c79ff54',
                description: '',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'vivere-novellara',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/vivere-novellara/eventi',
                    '@type': 'Document',
                    UID: 'b847294bdf054d41ba5cfd7cef6d67d2',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'eventi',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Eventi',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/vivere-novellara/luoghi',
                    '@type': 'Document',
                    UID: '9e27de90f37243f1b73de30510cd6651',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'luoghi',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Luoghi',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/vivere-novellara/esempio-pagina-con-indice',
                    '@type': 'Document',
                    UID: 'c1f4128b88564d65994ff7c1cf054417',
                    description: '',
                    design_italia_meta_type: 'Pagina',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'esempio-pagina-con-indice',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    title: 'Esempio pagina con indice',
                    type_title: 'Pagina',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/vivere-novellara/daniel-mccullough-fpfq_trr2y-unsplash.jpg',
                    '@type': 'Image',
                    UID: '90a7bc889fda43268d1605e5f7e3c999',
                    description: '',
                    design_italia_meta_type: 'Immagine',
                    enhanced_links_enabled: true,
                    getObjSize: '2.2 MB',
                    id: 'daniel-mccullough-fpfq_trr2y-unsplash.jpg',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-6000-ea6f9b64bcbedbe4b5c2c3358a399b3a.jpeg',
                          filename:
                            'daniel-mccullough--FPFq_trr2Y-unsplash.jpg',
                          height: 3376,
                          scales: {
                            gallery: {
                              download:
                                '@@images/image-250-cd79290bf05e446e3cce97e89b894863.jpeg',
                              height: 140,
                              width: 250,
                            },
                            great: {
                              download:
                                '@@images/image-1200-6cacfa5be7e24f0bfebb6773a6833923.jpeg',
                              height: 675,
                              width: 1200,
                            },
                            huge: {
                              download:
                                '@@images/image-1600-caee223cba211968e1576e15cfb7847e.jpeg',
                              height: 900,
                              width: 1600,
                            },
                            icon: {
                              download:
                                '@@images/image-32-7333d97fa0cbe0aa3360edfecda9c775.jpeg',
                              height: 18,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-9919e79893a4184580ad26f0bebde5e7.jpeg',
                              height: 450,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-532bde2051f6c136a123d145fcf5e333.jpeg',
                              height: 562,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-cf3ea557b2c92ed92922bc0d21b7af33.jpeg',
                              height: 9,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-617707eaf87493fd40cf09609b734116.jpeg',
                              height: 168,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-455f50b09817baaa17d862611c6f27fe.jpeg',
                              height: 112,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-ef7dd7d5eeaef35ab134beec43de5fa7.jpeg',
                              height: 225,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-5ef273370a14175596583bf362e882b0.jpeg',
                              height: 337,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-cda7a738d39166c7da80c14d6044b57c.jpeg',
                              height: 72,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-b05a88f763e7462d127d1094bbd954fc.jpeg',
                              height: 36,
                              width: 64,
                            },
                          },
                          size: 2307282,
                          width: 6000,
                        },
                      ],
                    },
                    mime_type: 'image/jpeg',
                    review_state: null,
                    title: 'daniel-mccullough--FPFq_trr2Y-unsplash.jpg',
                    type_title: 'Immagine',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/vivere-novellara/dell-1o5mzblcp50-unsplash.jpg',
                    '@type': 'Image',
                    UID: '292ac4a2ebf54d9db45180f18540946f',
                    description: '',
                    design_italia_meta_type: 'Immagine',
                    enhanced_links_enabled: true,
                    getObjSize: '614.9 KB',
                    id: 'dell-1o5mzblcp50-unsplash.jpg',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-3264-0d961001401b44cbdac3619361eb9c37.jpeg',
                          filename: 'dell-1o5MZblCP50-unsplash.jpg',
                          height: 2176,
                          scales: {
                            gallery: {
                              download:
                                '@@images/image-250-384c297ce1d7a48d8fe50f0ad76d45db.jpeg',
                              height: 166,
                              width: 250,
                            },
                            great: {
                              download:
                                '@@images/image-1200-8a4863889d17a38f194e09da5d7cb2ea.jpeg',
                              height: 800,
                              width: 1200,
                            },
                            huge: {
                              download:
                                '@@images/image-1600-21cacd0a309386897be10267c8af3bbf.jpeg',
                              height: 1066,
                              width: 1600,
                            },
                            icon: {
                              download:
                                '@@images/image-32-c96790e828457f2b521053b7661d4904.jpeg',
                              height: 21,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-d4271c6d002303cea3d25a844a93a4ee.jpeg',
                              height: 533,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-7473be247f5adccd127f7d9615d7c6d9.jpeg',
                              height: 666,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-47fefe8d98223a30dd70e9acc741fe05.jpeg',
                              height: 10,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-d341931fac9d1b210ae86e9564d3e68e.jpeg',
                              height: 200,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-15ccf222b84861579e614a48e6448fc9.jpeg',
                              height: 133,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-80f47472bebd5f6c10ce9e8bdebd8c66.jpeg',
                              height: 266,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-74eda38a85c0e460b39d84bb810ead98.jpeg',
                              height: 400,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-f001ad4d1b06869d7e9d3b2f041bfc31.jpeg',
                              height: 85,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-b59040871f952829357dfc865f3dfa52.jpeg',
                              height: 42,
                              width: 64,
                            },
                          },
                          size: 629666,
                          width: 3264,
                        },
                      ],
                    },
                    mime_type: 'image/jpeg',
                    review_state: null,
                    title: 'dell-1o5MZblCP50-unsplash.jpg',
                    type_title: 'Immagine',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/vivere-novellara/mailchimp-04x1yp9hnh8-unsplash.jpg',
                    '@type': 'Image',
                    UID: '543b0c07e1de42329029186b8bf4399a',
                    description: '',
                    design_italia_meta_type: 'Immagine',
                    enhanced_links_enabled: true,
                    getObjSize: '1.1 MB',
                    id: 'mailchimp-04x1yp9hnh8-unsplash.jpg',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-5760-c81938e578fdfae61a3774dd4faf559a.jpeg',
                          filename: 'mailchimp-04X1Yp9hNH8-unsplash.jpg',
                          height: 3840,
                          scales: {
                            gallery: {
                              download:
                                '@@images/image-250-c2bf68d567ba0c69dafb2c83b5219349.jpeg',
                              height: 166,
                              width: 250,
                            },
                            great: {
                              download:
                                '@@images/image-1200-0e514e39d58f2dd6976354262c947202.jpeg',
                              height: 800,
                              width: 1200,
                            },
                            huge: {
                              download:
                                '@@images/image-1600-0a56c81f5099da0bb4dad9c45aab2dbf.jpeg',
                              height: 1066,
                              width: 1600,
                            },
                            icon: {
                              download:
                                '@@images/image-32-6543514738f60d9b90c3da8cf9548f7b.jpeg',
                              height: 21,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-35375132eec79943d2a5a15cd63d475c.jpeg',
                              height: 533,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-46202e51c9f15430ef4d6bf46df5d7c5.jpeg',
                              height: 666,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-0d74809fda6d63a73a46801c6b3bffb9.jpeg',
                              height: 10,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-5fb27eb7c901c43e4b5db9ccde9ff1e2.jpeg',
                              height: 200,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-257f3c271fa22ca53437172724f4e6e1.jpeg',
                              height: 133,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-6b7d5aeef891e1aba82541e0f0c7280c.jpeg',
                              height: 266,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-4a62668cba71cdb7e55a86b02f95e62d.jpeg',
                              height: 400,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-2e5ab42ae7a069a5ff89865f724040ea.jpeg',
                              height: 85,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-ad4fc625c769e1797d8c27019e081c48.jpeg',
                              height: 42,
                              width: 64,
                            },
                          },
                          size: 1161691,
                          width: 5760,
                        },
                      ],
                    },
                    mime_type: 'image/jpeg',
                    review_state: null,
                    title: 'mailchimp-04X1Yp9hNH8-unsplash.jpg',
                    type_title: 'Immagine',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/vivere-novellara/hannah-busing-zyx1bk9mqma-unsplash.jpg',
                    '@type': 'Image',
                    UID: '8fd6ae76a2c146438ba0692429fce2ef',
                    description: '',
                    design_italia_meta_type: 'Immagine',
                    enhanced_links_enabled: true,
                    getObjSize: '3.6 MB',
                    id: 'hannah-busing-zyx1bk9mqma-unsplash.jpg',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-5040-6de0a4aa0974f2caa6b684c56fdd0669.jpeg',
                          filename: 'hannah-busing-Zyx1bK9mqmA-unsplash.jpg',
                          height: 3360,
                          scales: {
                            gallery: {
                              download:
                                '@@images/image-250-7b46c901e41544fed13503d80640852e.jpeg',
                              height: 166,
                              width: 250,
                            },
                            great: {
                              download:
                                '@@images/image-1200-c30730497eeca226f6c5e288179e362d.jpeg',
                              height: 800,
                              width: 1200,
                            },
                            huge: {
                              download:
                                '@@images/image-1600-88c7505aef6f97b5040a90128b921a32.jpeg',
                              height: 1066,
                              width: 1600,
                            },
                            icon: {
                              download:
                                '@@images/image-32-3df2f738c9dbdfbbd220d010440affe9.jpeg',
                              height: 21,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-4f543a7778d1c6d88f9cb3c7a7269c79.jpeg',
                              height: 533,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-99772088b09cbc0b6dd71fb076b43f5a.jpeg',
                              height: 666,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-77337d081ca6a15fbef96f3da856ff7b.jpeg',
                              height: 10,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-c82d0a8e19db17546ca4a9193b3446ac.jpeg',
                              height: 200,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-bfdc57992b2b92aa18e86f24ae218112.jpeg',
                              height: 133,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-f2774d1ea7f5abe26f1c5346516291ea.jpeg',
                              height: 266,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-9a53718910103672fdf31856e65b1722.jpeg',
                              height: 400,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-1a2b7a2e2a37d4ba5a909b9c39e1d235.jpeg',
                              height: 85,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-76c2da9c5b6ac17fdfe99dbdd856a2ff.jpeg',
                              height: 42,
                              width: 64,
                            },
                          },
                          size: 3788506,
                          width: 5040,
                        },
                      ],
                    },
                    mime_type: 'image/jpeg',
                    review_state: null,
                    title: 'hannah-busing-Zyx1bK9mqmA-unsplash.jpg',
                    type_title: 'Immagine',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/vivere-novellara/mailchimp-hv9cs6kzayq-unsplash.jpg',
                    '@type': 'Image',
                    UID: 'b068506fcc8b4f888db8381ba64a5e35',
                    description: '',
                    design_italia_meta_type: 'Immagine',
                    enhanced_links_enabled: true,
                    getObjSize: '4.8 MB',
                    id: 'mailchimp-hv9cs6kzayq-unsplash.jpg',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-8256-49ba20ce7c47b622a127d521fe2d91f8.jpeg',
                          filename: 'mailchimp-Hv9CS6KZayQ-unsplash.jpg',
                          height: 5504,
                          scales: {
                            gallery: {
                              download:
                                '@@images/image-250-ba5037136f6b96f2c124634c980f115c.jpeg',
                              height: 166,
                              width: 250,
                            },
                            great: {
                              download:
                                '@@images/image-1200-97a3a0eb8b34d04e22c9affa24cde27d.jpeg',
                              height: 800,
                              width: 1200,
                            },
                            huge: {
                              download:
                                '@@images/image-1600-da1decab7fd78d7dc8a1a1a32b14c5fe.jpeg',
                              height: 1066,
                              width: 1600,
                            },
                            icon: {
                              download:
                                '@@images/image-32-41d209510363180f6b87db7c114b0c76.jpeg',
                              height: 21,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-a543d13a5ff35d056168468e818686ce.jpeg',
                              height: 533,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-89e47ee5d7b31dd1beafd54064235729.jpeg',
                              height: 666,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-df37ce3b496b1f8fd2d3ffbdf2cd8ee8.jpeg',
                              height: 10,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-df43c7d7745aaadacf1d6170dd74c624.jpeg',
                              height: 200,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-5b74cc1c67ac3f8ba61254b11f74373d.jpeg',
                              height: 133,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-9d6de291aeed0bca018c8d22e169fd19.jpeg',
                              height: 266,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-ba23d8e39dbf506dee40abb7b4acfa34.jpeg',
                              height: 400,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-03475765ba0a30280a4da3b864cd1bb2.jpeg',
                              height: 85,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-5d602e2fc62632100018a52bdaa15568.jpeg',
                              height: 42,
                              width: 64,
                            },
                          },
                          size: 5032366,
                          width: 8256,
                        },
                      ],
                    },
                    mime_type: 'image/jpeg',
                    review_state: null,
                    title: 'mailchimp-Hv9CS6KZayQ-unsplash.jpg',
                    type_title: 'Immagine',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/vivere-novellara/evento-che-dura-un-anno',
                    '@type': 'Event',
                    UID: '86ed707b4b044dfe96d095c006e2c49e',
                    description: 'ciao',
                    design_italia_meta_type: 'Evento',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'evento-che-dura-un-anno',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'private',
                    start: '2024-02-01T08:00:00+00:00',
                    tipologia_evento: [
                      {
                        title: 'Evento culturale',
                        token: 'evento_culturale',
                      },
                    ],
                    title: 'Evento che dura un anno',
                    type_title: 'Evento',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/vivere-novellara/visita-guidata-biblioteca-u-mazzini',
                    '@type': 'Event',
                    UID: '0ce4271531ba4551906287321923a53d',
                    description:
                      'La Biblioteca \u201cU. Mazzini\u201d organizza una visita guidata gratuita alle bellezze architettoniche di Palazzo Crozza, in Corso Cavour 251, le sue eleganti sale affrescate e alcuni dei tesori custoditi dalla biblioteca, che vanta un prezioso patrimonio librari',
                    design_italia_meta_type: 'Evento',
                    enhanced_links_enabled: null,
                    getObjSize: '912.1 KB',
                    id: 'visita-guidata-biblioteca-u-mazzini',
                    image_field: 'preview_image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-1920-5fa9df74b49c4676848d037fe1177c6d.jpeg',
                          filename: '49350006-cd32-41ca-81c4-d5676f251ddb.jpeg',
                          height: 1080,
                          scales: {
                            gallery: {
                              download:
                                '@@images/image-250-83b8477c488c34036f9f2b61ee4ab22e.jpeg',
                              height: 140,
                              width: 250,
                            },
                            great: {
                              download:
                                '@@images/image-1200-56d704c2d0f017eb50e718bff9889881.jpeg',
                              height: 675,
                              width: 1200,
                            },
                            huge: {
                              download:
                                '@@images/image-1600-8e089414e70251359e660ca42edd807b.jpeg',
                              height: 900,
                              width: 1600,
                            },
                            icon: {
                              download:
                                '@@images/image-32-69850bfbd8e9a6d9d7137d2b055778f9.jpeg',
                              height: 18,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-120db6f1c1d6bbe9052dc927467bd6ee.jpeg',
                              height: 450,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-9668e5c6db90a8264acb17e5090e2056.jpeg',
                              height: 562,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-67409a38d94c5dda6ae11c3f81112d30.jpeg',
                              height: 9,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-bd285fa3acd50bc26200ef83210ecccf.jpeg',
                              height: 168,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-638def5141a2c1f426666a7690281410.jpeg',
                              height: 112,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-71283cc5895abc4453115c1ad6edc721.jpeg',
                              height: 225,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-333fba36578b33cff5bbb811d614ab5e.jpeg',
                              height: 337,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-e93577b008db95809167dcc68136c26e.jpeg',
                              height: 72,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-110f5e38456384bd0f089207b9ca1e29.jpeg',
                              height: 36,
                              width: 64,
                            },
                          },
                          size: 467010,
                          width: 1920,
                        },
                      ],
                      preview_image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/preview_image-1920-46f7b4f683780ed1c8c7ba689a8db907.jpeg',
                          filename: '49350006-cd32-41ca-81c4-d5676f251ddb.jpeg',
                          height: 1080,
                          scales: {
                            gallery: {
                              download:
                                '@@images/preview_image-250-8e45ce1eef2a2e0c0e9c3d86b659691e.jpeg',
                              height: 140,
                              width: 250,
                            },
                            great: {
                              download:
                                '@@images/preview_image-1200-daaa2c18cf1ba581c9b26a5a51a18549.jpeg',
                              height: 675,
                              width: 1200,
                            },
                            huge: {
                              download:
                                '@@images/preview_image-1600-5bf678f5c4698a886562afc614b70c61.jpeg',
                              height: 900,
                              width: 1600,
                            },
                            icon: {
                              download:
                                '@@images/preview_image-32-ee62c6b334f432c5540d7a9400179bc8.jpeg',
                              height: 18,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/preview_image-800-d6989b56452203b62f178ce8e052d671.jpeg',
                              height: 450,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/preview_image-1000-fa8675e1ea3adbc4e8c4e78620f592fc.jpeg',
                              height: 562,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/preview_image-16-73a9fda1100cfd949e8535bfdbae6960.jpeg',
                              height: 9,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/preview_image-300-0c31b64bcd8642cfeb8f99a8e22f3e11.jpeg',
                              height: 168,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/preview_image-200-8d31f7150b2fbcdacc91307825161b73.jpeg',
                              height: 112,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/preview_image-400-a7de3d41d4545754945a8fee77763802.jpeg',
                              height: 225,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/preview_image-600-364373c9c2d0a649f632b41387985e92.jpeg',
                              height: 337,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/preview_image-128-e61f3468044dfd95e345c11b5d2c9a0b.jpeg',
                              height: 72,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/preview_image-64-12f660ad19ca7d015b0fa4bc7dd84fd3.jpeg',
                              height: 36,
                              width: 64,
                            },
                          },
                          size: 467010,
                          width: 1920,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    review_state: 'published',
                    start: '2024-04-05T14:00:00+00:00',
                    tipologia_evento: [
                      {
                        title: 'Evento culturale',
                        token: 'evento_culturale',
                      },
                      {
                        title: 'Evento culturale\u241fManifestazione artistica',
                        token: 'manifestazione_artistica',
                      },
                      {
                        title:
                          'Evento culturale\u241fManifestazione artistica\u241fMostra',
                        token: 'mostra',
                      },
                    ],
                    title: 'Visita guidata Biblioteca "U. Mazzini"',
                    type_title: 'Evento',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'Vivere Novellara',
                type_title: 'Pagina',
              },
            ],
            mode: 'simpleLink',
            title: 'Vivere Novellara',
            visible: true,
          },
        ],
        rootPath: '/',
      },
      {
        items: [
          {
            blocks: {
              'c358f85d-91fc-4d48-a235-f0a095494823': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['c358f85d-91fc-4d48-a235-f0a095494823'],
            },
            linkUrl: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/front-page',
                '@type': 'Document',
                UID: 'cc0474919f004290bcbae4d6bf3ce0cb',
                description:
                  "Congratulazioni! Hai completato con successo l'installazione di Plone.",
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'front-page',
                image_field: null,
                image_scales: null,
                items: [],
                mime_type: null,
                review_state: 'published',
                title: 'Benvenuto in Plone',
                type_title: 'Pagina',
              },
            ],
            mode: 'simpleLink',
            title: 'Voce 1',
            visible: true,
          },
        ],
        rootPath: '/test-martina/replica-bug-48970/geologia',
      },
      {
        items: [
          {
            blocks: {
              'ddc4f4c1-ee5b-403c-ac5f-f2f33e7fd55d': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['ddc4f4c1-ee5b-403c-ac5f-f2f33e7fd55d'],
            },
            linkUrl: [
              {
                '@id':
                  'https://v3.io-comune.redturtle.it/api/sottosito-di-prova-2/pagina-interna-sottosito',
                '@type': 'Document',
                UID: 'f54ab941ef9b447ab83d966ad3fc4510',
                description: '',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'pagina-interna-sottosito',
                image_field: null,
                image_scales: null,
                items: [],
                mime_type: null,
                review_state: 'private',
                title: 'pagina interna sottosito',
                type_title: 'Pagina',
              },
            ],
            mode: 'simpleLink',
            title: 'Pagina interna sottositov',
            visible: true,
          },
        ],
        rootPath: '/sottosito-di-prova',
      },
      {
        items: [
          {
            blocks: {
              '50bc7530-b0f5-491c-8e1c-7f2288007cb3': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['50bc7530-b0f5-491c-8e1c-7f2288007cb3'],
            },
            linkUrl: [],
            mode: 'dropdown',
            navigationRoot: [
              {
                '@id':
                  'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun',
                '@type': 'Document',
                UID: '4151665faf7e424ab2087b0a47cf7ff9',
                description: '',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'every-ct-under-the-sun',
                image_field: null,
                image_scales: null,
                items: [
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/argomento',
                    '@type': 'Pagina Argomento',
                    UID: '1e6d32d633aa40f592e52a8b19832cf4',
                    description: 'Argomento',
                    design_italia_meta_type: 'Argomento',
                    enhanced_links_enabled: null,
                    getObjSize: '1 KB',
                    id: 'argomento',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'ARGOMENTO',
                    type_title: 'Argomento',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/bando',
                    '@type': 'Bando',
                    UID: '66f0a6338ca0456dba4fc2a47e9ea1ff',
                    description: 'Lorem ipsum',
                    design_italia_meta_type: 'Bando',
                    enhanced_links_enabled: null,
                    getObjSize: '35.0 KB',
                    id: 'bando',
                    image_field: 'preview_image',
                    image_scales: {
                      preview_image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/preview_image-1092-ef2d68d4cae3004e65baed9f678ce9a3.jpeg',
                          filename:
                            'coughing-cat-dcbc3e50b235f7aa3793bfa07959fb7a-meme.jpeg',
                          height: 612,
                          scales: {
                            icon: {
                              download:
                                '@@images/preview_image-32-dbe1ca5a6ca642ea41d4065aae21f27d.jpeg',
                              height: 17,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/preview_image-800-66eb1c712985678ef1fc281e97ae2ea2.jpeg',
                              height: 448,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/preview_image-1000-26007363f7526fa56ab3af736f2361d8.jpeg',
                              height: 560,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/preview_image-16-f0ee172d0c9d69bbe6af53a19a97ea9a.jpeg',
                              height: 8,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/preview_image-300-864ab7aa648775488896fbbc553fbb2a.jpeg',
                              height: 168,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/preview_image-200-9859e33d322457eab509197097a74ebb.jpeg',
                              height: 112,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/preview_image-400-f6f3f858032b91fbeab78436bf622656.jpeg',
                              height: 224,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/preview_image-600-06a7778a5ce4481f76f59862c084ee7f.jpeg',
                              height: 336,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/preview_image-128-db8deede5effd2e75cfc14ef23de4701.jpeg',
                              height: 71,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/preview_image-64-9f7460751fc379db916ed9ac3abaa9ec.jpeg',
                              height: 35,
                              width: 64,
                            },
                          },
                          size: 35857,
                          width: 1092,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    review_state: 'published',
                    tipologia_bando: 'beni_servizi',
                    title: 'Bando',
                    type_title: 'Bando',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/cartella',
                    '@type': 'Folder',
                    UID: '347c7dc9f3734b8aa0d7f5327eee9414',
                    description: 'Lorem ipsum',
                    design_italia_meta_type: 'Cartella',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'cartella',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Cartella',
                    type_title: 'Cartella',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/cartella-faq',
                    '@type': 'FaqFolder',
                    UID: 'f3f2c34c948c461887c8ee1a99f6d233',
                    description: 'ABC',
                    design_italia_meta_type: 'Cartella Faq',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'cartella-faq',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Cartella FAQ',
                    type_title: 'Cartella Faq',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/cartella-modulistica',
                    '@type': 'CartellaModulistica',
                    UID: '612e974628844ec7a48cfdec71166e19',
                    description: 'Description',
                    design_italia_meta_type: 'Cartella Modulistica',
                    enhanced_links_enabled: null,
                    getObjSize: '35.0 KB',
                    id: 'cartella-modulistica',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-1092-cdcf4c02c2f9c4b7b49a23e4ddf3ed1d.jpeg',
                          filename:
                            'coughing-cat-dcbc3e50b235f7aa3793bfa07959fb7a-meme.jpeg',
                          height: 612,
                          scales: {
                            icon: {
                              download:
                                '@@images/image-32-7b80a0d1140ddc5dbff0a90f27943d92.jpeg',
                              height: 17,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-345bb9c142f13be58d741561356789e3.jpeg',
                              height: 448,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-3a592ed4afce5211f16aa4739cf8b8ab.jpeg',
                              height: 560,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-7d703706ce96d62662ad3df0073aabee.jpeg',
                              height: 8,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-3c4b2244fa1521f43f64f0b857731d64.jpeg',
                              height: 168,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-20b6118747f5f6da8e0bd6059693b347.jpeg',
                              height: 112,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-b97e1a87311a71ff3d5536c87bd1fa5e.jpeg',
                              height: 224,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-39cae11a656f5039a5bd81503d8ddca3.jpeg',
                              height: 336,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-dd4830e7dae1553c74ea30e3c9e51a2c.jpeg',
                              height: 71,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-0b1fc6c45c4046d76966a7dfa0b26e80.jpeg',
                              height: 35,
                              width: 64,
                            },
                          },
                          size: 35857,
                          width: 1092,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Cartella Modulistica',
                    type_title: 'Cartella Modulistica',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/collegamento',
                    '@type': 'Link',
                    UID: '1753bf68e4af4ac898238572c49f41d5',
                    description: 'Descrizione',
                    design_italia_meta_type: 'Collegamento',
                    enhanced_links_enabled: null,
                    getObjSize: '35.0 KB',
                    getRemoteUrl:
                      'https://v3.io-comune.redturtle.it/api/amministrazione',
                    id: 'collegamento',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-1092-cdcf4c02c2f9c4b7b49a23e4ddf3ed1d.jpeg',
                          filename:
                            'coughing-cat-dcbc3e50b235f7aa3793bfa07959fb7a-meme.jpeg',
                          height: 612,
                          scales: {
                            icon: {
                              download:
                                '@@images/image-32-7b80a0d1140ddc5dbff0a90f27943d92.jpeg',
                              height: 17,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-345bb9c142f13be58d741561356789e3.jpeg',
                              height: 448,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-3a592ed4afce5211f16aa4739cf8b8ab.jpeg',
                              height: 560,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-7d703706ce96d62662ad3df0073aabee.jpeg',
                              height: 8,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-3c4b2244fa1521f43f64f0b857731d64.jpeg',
                              height: 168,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-20b6118747f5f6da8e0bd6059693b347.jpeg',
                              height: 112,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-b97e1a87311a71ff3d5536c87bd1fa5e.jpeg',
                              height: 224,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-39cae11a656f5039a5bd81503d8ddca3.jpeg',
                              height: 336,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-dd4830e7dae1553c74ea30e3c9e51a2c.jpeg',
                              height: 71,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-0b1fc6c45c4046d76966a7dfa0b26e80.jpeg',
                              height: 35,
                              width: 64,
                            },
                          },
                          size: 35857,
                          width: 1092,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    remoteUrl:
                      'https://v3.io-comune.redturtle.it/api/amministrazione',
                    review_state: 'published',
                    title: 'Collegamento',
                    type_title: 'Collegamento',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/documento',
                    '@type': 'Documento',
                    UID: 'da95c2d905be466fba9868bfbf3751b1',
                    business_events: [
                      {
                        title: 'Avvio impresa',
                        token: 'avvio_impresa',
                      },
                    ],
                    description: 'Documento',
                    design_italia_meta_type: 'Documento',
                    enhanced_links_enabled: null,
                    getObjSize: '35.0 KB',
                    id: 'documento',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-1092-cdcf4c02c2f9c4b7b49a23e4ddf3ed1d.jpeg',
                          filename:
                            'coughing-cat-dcbc3e50b235f7aa3793bfa07959fb7a-meme.jpeg',
                          height: 612,
                          scales: {
                            icon: {
                              download:
                                '@@images/image-32-7b80a0d1140ddc5dbff0a90f27943d92.jpeg',
                              height: 17,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-345bb9c142f13be58d741561356789e3.jpeg',
                              height: 448,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-3a592ed4afce5211f16aa4739cf8b8ab.jpeg',
                              height: 560,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-7d703706ce96d62662ad3df0073aabee.jpeg',
                              height: 8,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-3c4b2244fa1521f43f64f0b857731d64.jpeg',
                              height: 168,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-20b6118747f5f6da8e0bd6059693b347.jpeg',
                              height: 112,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-b97e1a87311a71ff3d5536c87bd1fa5e.jpeg',
                              height: 224,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-39cae11a656f5039a5bd81503d8ddca3.jpeg',
                              height: 336,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-dd4830e7dae1553c74ea30e3c9e51a2c.jpeg',
                              height: 71,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-0b1fc6c45c4046d76966a7dfa0b26e80.jpeg',
                              height: 35,
                              width: 64,
                            },
                          },
                          size: 35857,
                          width: 1092,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    person_life_events: [
                      {
                        title:
                          'Iscrizione Scuola/Universit\u00e0 e/o richiesta borsa di studio',
                        token:
                          'iscrizione_scuola_universita_richiesta_borsa_di_studio',
                      },
                    ],
                    review_state: 'published',
                    tipologia_documenti_albopretorio: [
                      {
                        title: 'Atto amministrativo',
                        token: 'atto_amministrativo',
                      },
                      {
                        title: 'Atto amministrativo\u241fDecreto',
                        token: 'decreto',
                      },
                      {
                        title:
                          'Atto amministrativo\u241fDecreto\u241fDecreto del Dirigente',
                        token: 'decreto_del_dirigente',
                      },
                    ],
                    tipologia_documento: [
                      {
                        title: 'Modulistica',
                        token: 'modulistica',
                      },
                    ],
                    tipologia_licenze: [
                      {
                        title: 'Licenza aperta',
                        token: 'licenza_aperta',
                      },
                      {
                        title: 'Licenza aperta\u241fPubblico dominio',
                        token: 'pubblico_dominio',
                      },
                    ],
                    title: 'Documento',
                    type_title: 'Documento',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/evento',
                    '@type': 'Event',
                    UID: '9a760f2a06ce44f0b67e3805c7519a02',
                    description: 'Descrizione',
                    design_italia_meta_type: 'Evento',
                    enhanced_links_enabled: null,
                    getObjSize: '58.9 KB',
                    id: 'evento',
                    image_field: 'preview_image',
                    image_scales: {
                      preview_image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/preview_image-640-6b2033c4c400ed69a603ff59ef04c656.jpeg',
                          filename: 'ba927ff34cd961ce2c184d47e8ead9f6.jpeg',
                          height: 638,
                          scales: {
                            gallery: {
                              download:
                                '@@images/preview_image-250-a444d81bc1a38f55dedb40051bbb3900.jpeg',
                              height: 249,
                              width: 250,
                            },
                            icon: {
                              download:
                                '@@images/preview_image-32-d51085543c26c4a25e6ac1720ccdd2d0.jpeg',
                              height: 31,
                              width: 32,
                            },
                            listing: {
                              download:
                                '@@images/preview_image-16-94f61ef24b2a46d3791c86d67b75c82f.jpeg',
                              height: 15,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/preview_image-300-7b213e02bc53efdcacd58e2a4a30eb86.jpeg',
                              height: 299,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/preview_image-200-dd1ea06f8c739a856905787b0f44248d.jpeg',
                              height: 199,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/preview_image-400-9d65e1289b1b2a3869f563a22a69c236.jpeg',
                              height: 398,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/preview_image-600-3fc037236d16e9db58ad206cc1482fc2.jpeg',
                              height: 598,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/preview_image-128-350e97f4110eb0732e4c2dc2c542d5e0.jpeg',
                              height: 127,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/preview_image-64-ecc29a26e7e46344a69c5b0a0957b94f.jpeg',
                              height: 63,
                              width: 64,
                            },
                          },
                          size: 60316,
                          width: 640,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    review_state: 'published',
                    start: '2024-07-01T08:00:00+00:00',
                    tipologia_evento: [
                      {
                        title: 'Evento culturale',
                        token: 'evento_culturale',
                      },
                    ],
                    title: 'Evento',
                    type_title: 'Evento',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/persona-pubblica',
                    '@type': 'Persona',
                    UID: '37401bed42304359990c9bd3810325e7',
                    description: 'Lorem ipsum',
                    design_italia_meta_type: 'Persona pubblica',
                    enhanced_links_enabled: null,
                    getObjSize: '19.0 KB',
                    id: 'persona-pubblica',
                    image_field: 'foto_persona',
                    image_scales: {
                      foto_persona: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/foto_persona-448-d76f3db4d4406179f5ef97530d2d3852.jpeg',
                          filename:
                            'WhatsApp Image 2024-01-10 at 14.34.45 copy.jpeg',
                          height: 429,
                          scales: {
                            gallery: {
                              download:
                                '@@images/foto_persona-250-d8352bb438314907becab8adaf4f0278.jpeg',
                              height: 239,
                              width: 250,
                            },
                            icon: {
                              download:
                                '@@images/foto_persona-32-38108137e8cce264e3d2a78423bcfa5d.jpeg',
                              height: 30,
                              width: 32,
                            },
                            listing: {
                              download:
                                '@@images/foto_persona-16-d095eb501ee8e8e98effdb3bd30761ae.jpeg',
                              height: 15,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/foto_persona-300-6b61a1aa7d1710fc79a3ee8e56eac7a4.jpeg',
                              height: 287,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/foto_persona-200-eb49268c591cee198060f12ba0f73fcb.jpeg',
                              height: 191,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/foto_persona-400-1df861a1a0c37b99456f3a90ac9eb2ba.jpeg',
                              height: 383,
                              width: 400,
                            },
                            thumb: {
                              download:
                                '@@images/foto_persona-128-fc50c07f6a91a099e2497675190f7642.jpeg',
                              height: 122,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/foto_persona-64-586b2ea25b8692643a13bfaf2bc15e99.jpeg',
                              height: 61,
                              width: 64,
                            },
                          },
                          size: 18652,
                          width: 448,
                        },
                      ],
                    },
                    incarichi: 'Incarico',
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'Persona pubblica',
                    type_title: 'Persona pubblica',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/unita-organizzativa',
                    '@type': 'UnitaOrganizzativa',
                    UID: '9fae79c327584c54a1ce0ffa62bcc85b',
                    description: 'Lorem ipsum',
                    design_italia_meta_type: 'Unita Organizzativa',
                    enhanced_links_enabled: null,
                    getObjSize: '61.8 KB',
                    id: 'unita-organizzativa',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-1280-d2ff16b142d8d9b117265d700307b57a.jpeg',
                          filename:
                            'WhatsApp Image 2024-01-10 at 14.34.45.jpeg',
                          height: 720,
                          scales: {
                            gallery: {
                              download:
                                '@@images/image-250-97a4cc880284b90fcf3a742b2d61eae0.jpeg',
                              height: 140,
                              width: 250,
                            },
                            great: {
                              download:
                                '@@images/image-1200-6533f9828f9fea4a11c2d9dc664e7815.jpeg',
                              height: 675,
                              width: 1200,
                            },
                            icon: {
                              download:
                                '@@images/image-32-d0bfaeadd4e4ad839f4998cb5e616f97.jpeg',
                              height: 18,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-801cf079d47c6f70752473ee3f078437.jpeg',
                              height: 450,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-9b329e566d64551296b2bf0655bac720.jpeg',
                              height: 562,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-2bb18862c3673433af77a5fc7463be34.jpeg',
                              height: 9,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-5fe041e3c6283f292ad4a588b7e159c8.jpeg',
                              height: 168,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-5e192f7a1a0bddeab65e7d92a88f79ef.jpeg',
                              height: 112,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-2864bbf342fc7caa7d717b3df31b4dfe.jpeg',
                              height: 225,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-d88e530b14cfb0af0629419deeda0bbc.jpeg',
                              height: 337,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-a0e657adadd6f5487e22effede6e4c57.jpeg',
                              height: 72,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-2ebeca6a1daaec209759074e8eed76c1.jpeg',
                              height: 36,
                              width: 64,
                            },
                          },
                          size: 63246,
                          width: 1280,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    review_state: 'published',
                    tipologia_organizzazione: [
                      {
                        title: 'Struttura amministrativa',
                        token: 'struttura_amministrativa',
                      },
                    ],
                    title: 'Unit\u00e0 organizzativa',
                    type_title: 'Unita Organizzativa',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/luogo',
                    '@type': 'Venue',
                    UID: '13336191e9904a95a35de409fa9e2b42',
                    description: 'Lorem ipsum',
                    design_italia_meta_type: 'Luogo',
                    enhanced_links_enabled: null,
                    getObjSize: '5.0 MB',
                    id: 'luogo',
                    image_field: 'preview_image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-1000-fc20a59ed28de1857dac263850bf0051.jpeg',
                          filename: 'photo-1544005313-94ddf0286df2.jpeg',
                          height: 1498,
                          scales: {
                            icon: {
                              download:
                                '@@images/image-32-2cb2babd18a8c0fecbf87f048a2417a0.jpeg',
                              height: 32,
                              width: 21,
                            },
                            large: {
                              download:
                                '@@images/image-800-955306c8b30366a1656f07aa90eae627.jpeg',
                              height: 1198,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-1a0d791b3e5408c8658dc6ee71b24575.jpeg',
                              height: 1498,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-f8d59a3f8923512985345a9a95c5048b.jpeg',
                              height: 16,
                              width: 11,
                            },
                            midi: {
                              download:
                                '@@images/image-300-d4d76ab607295437a82d1684f6808a61.jpeg',
                              height: 449,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-cf4f27c065dfb2c964598d75a9013fd7.jpeg',
                              height: 299,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-b738dfb993ac2a76d0dfc5704a4f183a.jpeg',
                              height: 599,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-81896186c7a370b7aa645380ecb37183.jpeg',
                              height: 898,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-0ec688a143eddaa06f42a1b86c6844d3.jpeg',
                              height: 191,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-989bd8fc14596a1fcda75a84a9b7cafb.jpeg',
                              height: 64,
                              width: 43,
                            },
                          },
                          size: 255385,
                          width: 1000,
                        },
                      ],
                      preview_image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/preview_image-4016-3dc3121736d84151370be4a3d0c7b22e.jpeg',
                          filename:
                            'christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg',
                          height: 6016,
                          scales: {
                            great: {
                              download:
                                '@@images/preview_image-1200-29e81c7c2e511d02716abd371163cf0f.jpeg',
                              height: 1797,
                              width: 1200,
                            },
                            huge: {
                              download:
                                '@@images/preview_image-1600-e22fb7008074ec41d26fd8481d5e52ba.jpeg',
                              height: 2396,
                              width: 1600,
                            },
                            icon: {
                              download:
                                '@@images/preview_image-32-c205f535fcd2d91f72d1e4ab12d1b352.jpeg',
                              height: 32,
                              width: 21,
                            },
                            large: {
                              download:
                                '@@images/preview_image-800-425f0fdd275d1885bf5d87c7bc9a4c11.jpeg',
                              height: 1198,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/preview_image-1000-738cf1d439e2364faf551b74513b9c19.jpeg',
                              height: 1498,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/preview_image-16-18f3299c5e4d11099935de522060b5e0.jpeg',
                              height: 16,
                              width: 11,
                            },
                            midi: {
                              download:
                                '@@images/preview_image-300-238a91e11e0a65666aebf79324c5ce9c.jpeg',
                              height: 449,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/preview_image-200-e01d18a529b0283ad4d98e210752fe69.jpeg',
                              height: 299,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/preview_image-400-7d613c9000aa958b445019ce1b043134.jpeg',
                              height: 599,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/preview_image-600-810658f6fe2b65fef157e36717a19596.jpeg',
                              height: 898,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/preview_image-128-545c0851be7c2e032f57925ad8c7f222.jpeg',
                              height: 191,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/preview_image-64-14270b100154aad781c52b710d149916.jpeg',
                              height: 64,
                              width: 43,
                            },
                          },
                          size: 5001861,
                          width: 4016,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    review_state: 'published',
                    tipologia_luogo: [
                      {
                        title: 'Architettura Militare e fortificata',
                        token: 'architettura_militare_e_fortificata',
                      },
                    ],
                    title: 'Luogo',
                    type_title: 'Luogo',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/notizie',
                    '@type': 'News Item',
                    UID: '5e7f9d7bd0c1448882bbfa89d363e532',
                    description: 'Descrizione',
                    design_italia_meta_type: 'Comunicato (stampa)',
                    enhanced_links_enabled: null,
                    getObjSize: '35.0 KB',
                    id: 'notizie',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-1092-cdcf4c02c2f9c4b7b49a23e4ddf3ed1d.jpeg',
                          filename:
                            'coughing-cat-dcbc3e50b235f7aa3793bfa07959fb7a-meme.jpeg',
                          height: 612,
                          scales: {
                            icon: {
                              download:
                                '@@images/image-32-7b80a0d1140ddc5dbff0a90f27943d92.jpeg',
                              height: 17,
                              width: 32,
                            },
                            large: {
                              download:
                                '@@images/image-800-345bb9c142f13be58d741561356789e3.jpeg',
                              height: 448,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-3a592ed4afce5211f16aa4739cf8b8ab.jpeg',
                              height: 560,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-7d703706ce96d62662ad3df0073aabee.jpeg',
                              height: 8,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-3c4b2244fa1521f43f64f0b857731d64.jpeg',
                              height: 168,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-20b6118747f5f6da8e0bd6059693b347.jpeg',
                              height: 112,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-b97e1a87311a71ff3d5536c87bd1fa5e.jpeg',
                              height: 224,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-39cae11a656f5039a5bd81503d8ddca3.jpeg',
                              height: 336,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-dd4830e7dae1553c74ea30e3c9e51a2c.jpeg',
                              height: 71,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-0b1fc6c45c4046d76966a7dfa0b26e80.jpeg',
                              height: 35,
                              width: 64,
                            },
                          },
                          size: 35857,
                          width: 1092,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    review_state: 'published',
                    tipologia_notizia: [
                      {
                        title: 'Comunicato (stampa)',
                        token: 'comunicato_stampa',
                      },
                    ],
                    title: 'Notizie',
                    type_title: 'Notizie e comunicati stampa',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/pdc',
                    '@type': 'PuntoDiContatto',
                    UID: 'f3fbb1e0858e4992a271b72b65c96853',
                    description: 'PDC',
                    design_italia_meta_type: 'Punto di Contatto',
                    enhanced_links_enabled: null,
                    getObjSize: '0 KB',
                    id: 'pdc',
                    image_field: '',
                    image_scales: null,
                    mime_type: 'text/plain',
                    review_state: 'published',
                    title: 'PDC',
                    type_title: 'Punto di Contatto',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/servizio',
                    '@type': 'Servizio',
                    UID: 'c8a28f08c8b04b3bb8c5e89303ca569a',
                    business_events: [
                      {
                        title: 'Avvio nuova attivit\u00e0 professionale',
                        token: 'avvio_nuova_attivita_professionale',
                      },
                    ],
                    description: 'Servizio',
                    design_italia_meta_type: 'Servizio',
                    enhanced_links_enabled: null,
                    getObjSize: '59.7 KB',
                    id: 'servizio',
                    image_field: 'image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-640-0ef2aae2cfbc0482fb4f484c72a0347d.jpeg',
                          filename: 'ba927ff34cd961ce2c184d47e8ead9f6.jpeg',
                          height: 638,
                          scales: {
                            gallery: {
                              download:
                                '@@images/image-250-a81913b570e476d88533cc66b1efade6.jpeg',
                              height: 249,
                              width: 250,
                            },
                            icon: {
                              download:
                                '@@images/image-32-7b80a0d1140ddc5dbff0a90f27943d92.jpeg',
                              height: 31,
                              width: 32,
                            },
                            listing: {
                              download:
                                '@@images/image-16-7d703706ce96d62662ad3df0073aabee.jpeg',
                              height: 15,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/image-300-3c4b2244fa1521f43f64f0b857731d64.jpeg',
                              height: 299,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-20b6118747f5f6da8e0bd6059693b347.jpeg',
                              height: 199,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-b97e1a87311a71ff3d5536c87bd1fa5e.jpeg',
                              height: 398,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-39cae11a656f5039a5bd81503d8ddca3.jpeg',
                              height: 598,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-dd4830e7dae1553c74ea30e3c9e51a2c.jpeg',
                              height: 127,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-0b1fc6c45c4046d76966a7dfa0b26e80.jpeg',
                              height: 63,
                              width: 64,
                            },
                          },
                          size: 60316,
                          width: 640,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    person_life_events: [
                      {
                        title: 'Invalidit\u00e0',
                        token: 'invalidita',
                      },
                    ],
                    review_state: 'published',
                    title: 'Servizio',
                    type_title: 'Servizio',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/luogo-test',
                    '@type': 'Venue',
                    UID: '4a203508bd374c74acfdc52962c57ee6',
                    description: 'Luogo test',
                    design_italia_meta_type: 'Luogo',
                    enhanced_links_enabled: null,
                    getObjSize: '7.3 MB',
                    id: 'luogo-test',
                    image_field: 'preview_image',
                    image_scales: {
                      image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/image-4016-38fa7bc3c73d131dc86c2004a78f84af.jpeg',
                          filename:
                            'christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg',
                          height: 6016,
                          scales: {
                            great: {
                              download:
                                '@@images/image-1200-49712760ec4dd29469e78f6215ac63cb.jpeg',
                              height: 1797,
                              width: 1200,
                            },
                            huge: {
                              download:
                                '@@images/image-1600-a57949a340f71da30760068a764d3542.jpeg',
                              height: 2396,
                              width: 1600,
                            },
                            icon: {
                              download:
                                '@@images/image-32-8e0a7dd6bbb6e1f092ca39f6fbb8afc2.jpeg',
                              height: 32,
                              width: 21,
                            },
                            large: {
                              download:
                                '@@images/image-800-c43a2308162033dcf66d9a33a5cda25e.jpeg',
                              height: 1198,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/image-1000-ed2a991012cc84d8a9bbaee76e6f2ebc.jpeg',
                              height: 1498,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/image-16-2ed2e6cd7743ebd53607a4bfeac9dd25.jpeg',
                              height: 16,
                              width: 11,
                            },
                            midi: {
                              download:
                                '@@images/image-300-5b8f86a654920ab9a84fdd609926b057.jpeg',
                              height: 449,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/image-200-f2a46e2cb74ec266f58465d55e37f1c9.jpeg',
                              height: 299,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/image-400-c884334a42afea33839e261c04843695.jpeg',
                              height: 599,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/image-600-4045f134b991337f89b01d42153939a7.jpeg',
                              height: 898,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/image-128-19c7b49bdd0ef118976e47e6ad08d3e9.jpeg',
                              height: 191,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/image-64-d17e005254c550a9241937254dfe2d1e.jpeg',
                              height: 64,
                              width: 43,
                            },
                          },
                          size: 5001861,
                          width: 4016,
                        },
                      ],
                      preview_image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/preview_image-1934-b0e0ef1c8fa72032fce737f8b6dc078d.jpeg',
                          filename: 'Ginger_european_cat.jpeg',
                          height: 2579,
                          scales: {
                            great: {
                              download:
                                '@@images/preview_image-1200-3675f90f361d38e31a0518a6b5b0ecb8.jpeg',
                              height: 1600,
                              width: 1200,
                            },
                            huge: {
                              download:
                                '@@images/preview_image-1600-6fcb2f10eaf888ba1bdc6bb633feb0e0.jpeg',
                              height: 2133,
                              width: 1600,
                            },
                            icon: {
                              download:
                                '@@images/preview_image-32-9a0a8c61db79ea9c0e345a5888785700.jpeg',
                              height: 32,
                              width: 24,
                            },
                            large: {
                              download:
                                '@@images/preview_image-800-c9562fb61712eb5e3032c4f7bf830397.jpeg',
                              height: 1066,
                              width: 800,
                            },
                            larger: {
                              download:
                                '@@images/preview_image-1000-02aefebf1787f5cac780f5d7b3ab29d9.jpeg',
                              height: 1333,
                              width: 1000,
                            },
                            listing: {
                              download:
                                '@@images/preview_image-16-49c4ecc333ede1db0854035994c47c79.jpeg',
                              height: 16,
                              width: 12,
                            },
                            midi: {
                              download:
                                '@@images/preview_image-300-e508ee5f498b851bb4f054bfcf56d711.jpeg',
                              height: 400,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/preview_image-200-064695babf941e610606aa0b79d01c56.jpeg',
                              height: 266,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/preview_image-400-f35d74187196672d3b3c3e19a35d01f8.jpeg',
                              height: 533,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/preview_image-600-cbd234725d7496199ac77514bf960feb.jpeg',
                              height: 800,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/preview_image-128-f36f29c209269f8190c6f8b3aef0fb25.jpeg',
                              height: 170,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/preview_image-64-a51cbe30ce791824bce650d63eaef2ac.jpeg',
                              height: 64,
                              width: 48,
                            },
                          },
                          size: 2621622,
                          width: 1934,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    review_state: 'published',
                    tipologia_luogo: [],
                    title: 'Luogo test',
                    type_title: 'Luogo',
                  },
                  {
                    '@id':
                      'https://v3.io-comune.redturtle.it/api/test-sabrina/every-ct-under-the-sun/evento-ricorrente',
                    '@type': 'Event',
                    UID: '2c7831cf9d2e41e1bb98902e2d376a87',
                    description: 'Descrizione',
                    design_italia_meta_type: 'Evento',
                    enhanced_links_enabled: null,
                    getObjSize: '58.9 KB',
                    id: 'evento-ricorrente',
                    image_field: 'preview_image',
                    image_scales: {
                      preview_image: [
                        {
                          'content-type': 'image/jpeg',
                          download:
                            '@@images/preview_image-640-08075d1ab465321fc620955d57591fce.jpeg',
                          filename: 'ba927ff34cd961ce2c184d47e8ead9f6.jpeg',
                          height: 638,
                          scales: {
                            gallery: {
                              download:
                                '@@images/preview_image-250-7d15f5115e9bb2976b91bffe46110579.jpeg',
                              height: 249,
                              width: 250,
                            },
                            icon: {
                              download:
                                '@@images/preview_image-32-76c3e3afea2e2f9201ba8ff7ecd58488.jpeg',
                              height: 31,
                              width: 32,
                            },
                            listing: {
                              download:
                                '@@images/preview_image-16-15f863cdc067218f873a157805518846.jpeg',
                              height: 15,
                              width: 16,
                            },
                            midi: {
                              download:
                                '@@images/preview_image-300-5b8a7f7376a6bac30d7860beaa61e99b.jpeg',
                              height: 299,
                              width: 300,
                            },
                            mini: {
                              download:
                                '@@images/preview_image-200-00acfadd061fc1bd7ceff6fc0076b45a.jpeg',
                              height: 199,
                              width: 200,
                            },
                            preview: {
                              download:
                                '@@images/preview_image-400-7dbe92a0b5dd7bbdddb21bf869f346f5.jpeg',
                              height: 398,
                              width: 400,
                            },
                            teaser: {
                              download:
                                '@@images/preview_image-600-1725bd11935d40a8b3e2e84f960f5d62.jpeg',
                              height: 598,
                              width: 600,
                            },
                            thumb: {
                              download:
                                '@@images/preview_image-128-9e2a5105c55a6d91d57ed7d89fb591c0.jpeg',
                              height: 127,
                              width: 128,
                            },
                            tile: {
                              download:
                                '@@images/preview_image-64-3ed044a3fa1506580e05ddb82981ba9c.jpeg',
                              height: 63,
                              width: 64,
                            },
                          },
                          size: 60316,
                          width: 640,
                        },
                      ],
                    },
                    mime_type: 'text/plain',
                    review_state: 'private',
                    start: '2023-11-24T09:00:00+00:00',
                    tipologia_evento: [
                      {
                        title: 'Evento culturale',
                        token: 'evento_culturale',
                      },
                    ],
                    title: 'Evento ricorrente',
                    type_title: 'Evento',
                  },
                ],
                mime_type: null,
                review_state: 'published',
                title: 'EVERY CT UNDER THE SUN',
                type_title: 'Pagina',
              },
            ],
            title: 'CTs',
            visible: true,
          },
        ],
        rootPath: '/test-sabrina',
      },
    ],
  },
  secondaryMenu: {
    result: [
      {
        items: [
          {
            id_lighthouse: 'all-topics',
            inEvidence: true,
            linkUrl: [
              {
                '@id': 'https://v3.io-comune.redturtle.it/api/argomenti',
                '@type': 'Document',
                UID: 'c52b5966cb2b4c4881ec77549a0c0df8',
                description: '',
                design_italia_meta_type: 'Pagina',
                enhanced_links_enabled: null,
                getObjSize: null,
                id: 'argomenti',
                image_field: null,
                image_scales: null,
                mime_type: null,
                review_state: 'published',
                title: 'Argomenti',
                type_title: 'Pagina',
              },
            ],
            title: 'Tutti gli argomenti...',
            visible: true,
          },
        ],
        rootPath: '/',
      },
    ],
  },
});
const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

export default {
  title: 'Layout/Header',
  component: Header,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ maxWidth: '1800px' }}>{Story()}</div>
      </Provider>
    ),
  ],
};
