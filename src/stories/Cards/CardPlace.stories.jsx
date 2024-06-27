import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { ExampleStrrutturaItem } from './mock';
import { CardPlace } from 'io-sanita-theme/components';

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
    <CardPlace {...args} />
  </>
);

export const Complete = Template.bind({});
Complete.args = {
  type: 'complete',
  showDistance: true,
  item: ExampleStrrutturaItem,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  item: ExampleStrrutturaItem,
};

export const Essential = Template.bind({});
Essential.args = {
  type: 'essential',
  item: ExampleStrrutturaItem,
};

export const Synthetic = Template.bind({});
Synthetic.args = {
  type: 'synthetic',

  item: ExampleStrrutturaItem,
};

export const SyntheticWithDistance = Template.bind({});
SyntheticWithDistance.args = {
  type: 'synthetic',
  showDistance: true,
  item: ExampleStrrutturaItem,
};
export const SyntheticNoAddress = Template.bind({});
SyntheticNoAddress.args = {
  type: 'synthetic',
  showAddress: false,
  item: ExampleStrrutturaItem,
};

export default {
  title: 'Card/Place',
  component: CardPlace,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ maxWidth: '700px' }}>{Story()}</div>
      </Provider>
    ),
  ],
  argTypes: {
    type: {
      options: ['complete', 'essential', 'synthetic'],
      control: { type: 'radio' },
    },
    size: {
      options: ['big', 'small'],
      control: { type: 'radio' },
    },
    showDistance: {
      options: [true, false],
      control: { type: 'radio' },
    },
    showAddress: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};
