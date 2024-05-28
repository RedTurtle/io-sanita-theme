import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { ExampleNewsItem } from './mock';
import { CardFeatured } from 'io-sanita-theme/components';

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
const Template = (args) => <CardFeatured {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  item: ExampleNewsItem,
  imgSrc: 'https://picsum.photos/id/1/1200/1200',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  item: ExampleNewsItem,
  imgSrc: 'https://picsum.photos/id/1/1200/1200',
};

export default {
  title: 'Card/Featured',
  component: CardFeatured,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ maxWidth: '1200px' }}>{Story()}</div>
      </Provider>
    ),
  ],
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
};
