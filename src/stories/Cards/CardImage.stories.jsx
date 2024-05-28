import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { ExampleNewsItem, ExampleEventItem } from './mock';
import { CardImage } from 'io-sanita-theme/components/Cards/CardImage/CardImage';

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

const Template = (args) => <CardImage {...args} />;

export const News = Template.bind({});
News.args = {
  item: ExampleNewsItem,
  imgSrc: 'https://picsum.photos/id/1/1200/1200',
};

export const NewsNoImage = Template.bind({});
NewsNoImage.args = {
  item: ExampleNewsItem,
};

export const NewsNoCategory = Template.bind({});
NewsNoCategory.args = {
  item: { ...ExampleNewsItem, topic: null },
  imgSrc: 'https://picsum.photos/id/1/1200/1200',
};

export const NewsNoCategoryNoImage = Template.bind({});
NewsNoCategoryNoImage.args = {
  item: { ...ExampleNewsItem, topic: null },
};

//event

export const Event = Template.bind({});
Event.args = {
  item: ExampleEventItem,
  imgSrc: 'https://picsum.photos/id/1/1200/1200',
};

export const EventNoImage = Template.bind({});
EventNoImage.args = {
  item: ExampleEventItem,
};

export const EventNoCategory = Template.bind({});
EventNoCategory.args = {
  item: { ...ExampleEventItem, topic: null },
  imgSrc: 'https://picsum.photos/id/1/1200/1200',
};

export const EventNoCategoryNoImage = Template.bind({});
EventNoCategoryNoImage.args = {
  item: { ...ExampleEventItem, topic: null },
};

export default {
  title: 'Card/Image',
  component: CardImage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ maxWidth: '500px' }}>{Story()}</div>
      </Provider>
    ),
  ],
};
