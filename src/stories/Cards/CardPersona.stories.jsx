import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { ExamplePersonaItem } from './mock';
import { CardPersona } from 'io-sanita-theme/components';

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
    <CardPersona {...args} />
    <br />
    <CardPersona {...args} imgSrc={null} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  size: 'big',
  item: ExamplePersonaItem,
  imgSrc: 'https://picsum.photos/id/1/400/400',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  item: ExamplePersonaItem,
  imgSrc: 'https://picsum.photos/id/1/400/400',
};

export default {
  title: 'Card/Persona',
  component: CardPersona,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ maxWidth: '400px' }}>{Story()}</div>
      </Provider>
    ),
  ],
  argTypes: {
    size: {
      options: ['big', 'small'],
      control: { type: 'radio' },
    },
  },
};
