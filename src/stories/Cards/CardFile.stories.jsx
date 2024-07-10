import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { ExampleFileItem } from './mock';
import { CardFile } from 'io-sanita-theme/components';

const mockStore = configureStore();
const store = mockStore({
  userSession: {
    token: null,
  },
  intl: {
    locale: 'en',
    messages: {},
  },
});
const Template = (args) => (
  <>
    <CardFile {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  size: 'big',
  item: ExampleFileItem,
};

export const SVGFormat = Template.bind({});
SVGFormat.args = {
  size: 'big',
  item: {
    '@id':
      'https://slate.io-comune.redturtle.it/api/io-sanita/evento/documenti/schermata-2024-01-16-alle-15-36-28.png',
    '@type': 'File',
    UID: '48355357faa644988e4bbab3515d2335',
    created: '2024-01-25T14:54:18+00:00',
    description:
      'Descrizione del documento. Lunghezza suggerita massimo 3 righe, dopodiché viene troncata.',
    effective: '2024-06-27T10:58:07+00:00',
    title: 'File di tipo ods',
    file: {
      'content-type': 'image/png',
      download:
        'https://slate.io-comune.redturtle.it/api/io-sanita/evento/documenti/schermata-2024-01-16-alle-15-36-28.png/@@download/file',
      enhanced_links_enabled: true,
      filename: 'Schermata 2024-01-16 alle 15.36.28.ods',
      getObjSize: '116.8 KB',
      size: 119611,
    },
  },
};

export default {
  title: 'Card/File',
  component: CardFile,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ maxWidth: '400px' }}>{Story()}</div>
      </Provider>
    ),
  ],
};
