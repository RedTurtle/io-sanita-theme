import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { ExampleLink } from './mock';
import { CardGuide } from 'io-sanita-theme/components';

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
    <CardGuide {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  item: ExampleLink,
};

export default {
  title: 'Card/Guide',
  component: CardGuide,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ maxWidth: '400px' }}>{Story()}</div>
      </Provider>
    ),
  ],
};
