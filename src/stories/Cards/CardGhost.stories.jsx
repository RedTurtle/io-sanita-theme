import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { ExampleNewsItem, ExampleEventItem } from './mock';
import { CardGhost } from 'io-sanita-theme/components/Cards/CardGhost/CardGhost';

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

const Template = (args) => <CardGhost {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: ExampleNewsItem,
  imgSrc: 'https://picsum.photos/id/1/1200/1200',
};

export default {
  title: 'Card/Ghost',
  component: CardGhost,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ maxWidth: '500px' }}>{Story()}</div>
      </Provider>
    ),
  ],
};
