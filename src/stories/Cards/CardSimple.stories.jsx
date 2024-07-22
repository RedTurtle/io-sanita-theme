import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { ExampleSimpleItem, ExampleBandoItem } from './mock';
import { CardSimple } from 'io-sanita-theme/components';

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
    <CardSimple {...args} />
  </>
);

export const Basic = Template.bind({});
Basic.args = {
  item: ExampleBando,
};

export const List = Template.bind({});
List.args = {
  item: ExampleSimpleItem,
};

export const Services = Template.bind({});
Services.args = {
  item: ExampleServiceItem,
};

export default {
  title: 'Card/Simple',
  component: CardSimple,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ maxWidth: '700px' }}>{Story()}</div>
      </Provider>
    ),
  ],
};
