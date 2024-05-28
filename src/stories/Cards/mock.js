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
