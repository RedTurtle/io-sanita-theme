export const ExampleNewsItem = {
  '@id': '/test-prova',
  '@type': 'News Item',
  title: 'Titolo dela card Notizia, anche su più righe',
  description:
    'Descrizione della card, contiene testo che riassume il contenuto della pagina di destinazione. Suggeriamo lunghezza massima 3 righe da desktop, dopodiché viene troncato con punti di sospensione.',
  topic: 'Categoria',
  effective: '2024-04-17T10:40:05+00:00',
};

export const ExampleEventItem = {
  '@id': '/test-prova-evento',
  '@type': 'Event',
  title: 'Titolo dela card Evento, anche su più righe',
  description:
    'Descrizione della card, contiene testo che riassume il contenuto della pagina di destinazione. Suggeriamo lunghezza massima 3 righe da desktop, dopodiché viene troncato con punti di sospensione.',
  topic: 'Categoria',
  effective: '2024-04-17T10:40:05+00:00',
  start: '2024-05-15T09:00:00+00:00',
  end: '2024-06-17T15:00:00+00:00',
  expires: '2023-05-15T14:05:00+00:00',
  open_end: false,
  // recurrence:
  //   'DTSTART:20240515T000000Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;UNTIL=20240617T000000Z;BYDAY=TU\nRDATE:20240531T000000Z\nEXDATE:20240530T000000Z',
};

export const ExampleStrrutturaItem = {
  '@id': '/test-prova-struttura',
  '@type': 'Struttura',
  title: 'Laboratorio analisi cliniche Santa Cecilia',
  category: {
    '@id': '/ambulatori-dei-medici-di-base',
    '@type': 'CategoriaStruttura',
    title: 'Ambulatori dei medici di base',
  },
  effective: '2024-04-17T10:40:05+00:00',
  circoscrizione: null,
  city: 'Palazzuolo sul senio',
  country: {
    title: 'Italia',
    token: '380',
  },
  geolocation: {
    latitude: 41.8337833,
    longitude: 12.4677863,
  },
  quartiere: null,
  street: 'Via Nome della via 23',
  zip_code: '44100',
};

export const ExamplePersonaItem = {
  '@id': 'https://slate.io-comune.redturtle.it/api/test-slate/persona-pubblica',
  '@type': 'Persona',
  UID: '16fe1967fcc4491e959ef699f1016fbf',
  description: '',
  id: 'persona-pubblica',
  incarico_principale: 'Direttore di Cardiochiururgia',
  mime_type: null,
  review_state: 'private',
  title: 'persona pubblica',
  type_title: 'Persona pubblica',
};

export const ExampleFileItem = {
  '@id':
    'https://slate.io-comune.redturtle.it/api/io-sanita/evento/documenti/schermata-2024-01-16-alle-15-36-28.png',
  '@type': 'File',
  UID: '48355357faa644988e4bbab3515d2335',
  created: '2024-01-25T14:54:18+00:00',
  description:
    'Descrizione del documento. Lunghezza suggerita massimo 3 righe, dopodiché viene troncata.',
  effective: '2024-06-27T10:58:07+00:00',
  expires: null,
  file: {
    'content-type': 'image/png',
    download:
      'https://slate.io-comune.redturtle.it/api/io-sanita/evento/documenti/schermata-2024-01-16-alle-15-36-28.png/@@download/file',
    enhanced_links_enabled: true,
    filename: 'Schermata 2024-01-16 alle 15.36.28.png',
    getObjSize: '116.8 KB',
    size: 119611,
  },
  id: 'schermata-2024-01-16-alle-15-36-28.png',
  is_folderish: false,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  modified: '2024-06-27T10:58:07+00:00',
  subjects: [],
  title: 'Schermata 2024-01-16 alle 15.36.28.png',
  type_title: 'File',
};

export const ExampleLink = {
  '@id': '/test-del-collegamento',
  '@type': 'Link',
  UID: '7651c76386aa4672aa2d693494d84a94',
  description: '',
  id: 'test-del-collegamento',
  review_state: 'private',
  title: 'Test del collegamento',
  type_title: 'Collegamento',
  remoteUrl: "/link-di-test"
};
