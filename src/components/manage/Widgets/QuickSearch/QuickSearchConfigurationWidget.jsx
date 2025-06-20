import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  Icon,
  Grid,
  Menu,
  Form,
  Button,
  Segment,
  Header,
} from 'semantic-ui-react';
import { TextWidget } from '@plone/volto/components/manage/Widgets';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';

import { PathsWidget } from 'io-sanita-theme/components/manage/Widgets';
import QuickSearchConfigurationForm from 'io-sanita-theme/components/manage/Widgets/QuickSearch/QuickSearchConfigurationForm';
import './quickSearchConfigurationWidget.scss';

const messages = defineMessages({
  rootItemsHeader: {
    id: 'quicksearchwidget-items-header',
    defaultMessage: 'Scorciatoie',
  },
  addItem: {
    id: 'quicksearchwidget-additem',
    defaultMessage: 'Aggiungi scorciatoia',
  },
  moveItemUp: {
    id: 'quicksearchwidget-move-item-up',
    defaultMessage: 'Sposta prima',
  },
  moveItemDown: {
    id: 'quicksearchwidget-move-item-down',
    defaultMessage: 'Sposta dopo',
  },
  emptyActiveItem: {
    id: 'quicksearchwidget-emptyActiveItem',
    defaultMessage: 'Aggiungi una nuova scorciatoia, oppure selezionane una',
  },
});

const defaultSectionItem = (title) => ({
  title,
  linkUrl: null,
});

const defaultRootConfiguration = (title) => ({
  items: [defaultSectionItem(title)],
});

const defaultConfiguration = [defaultRootConfiguration()];

const QuickSearchConfigurationWidget = (props) => {
  const { value, id, onChange, required, title, description } = props;
  const intl = useIntl();
  const [activeItem, setActiveItem] = useState(0);

  const deleteItem = (
    e,
    configuration,
    pathIndex,
    onChangePathConfig,
    index,
  ) => {
    e.preventDefault();
    let newRootConfiguration = { ...configuration[pathIndex] };
    newRootConfiguration.items.splice(index, 1);

    if (activeItem === index) {
      setTimeout(() => setActiveItem(index > 0 ? index - 1 : 0), 0);
    }

    onChangePathConfig(newRootConfiguration, pathIndex);
  };

  const addItem = (e, configuration, pathIndex, onChangePathConfig) => {
    e.preventDefault();
    console.log(configuration, pathIndex);
    let newRootConfiguration = { ...configuration[pathIndex] };
    newRootConfiguration.items = [
      ...(newRootConfiguration?.items || []),
      defaultSectionItem(`New ${newRootConfiguration.items?.length || ''}`),
    ];

    setActiveItem(newRootConfiguration.items.length - 1);
    onChangePathConfig(newRootConfiguration, pathIndex);
  };

  const onChangeItem = (
    configuration,
    pathIndex,
    onChangePathConfig,
    itemIndex,
    item,
  ) => {
    let newRootConfiguration = { ...configuration[pathIndex] };
    newRootConfiguration.items[itemIndex] = item;
    onChangePathConfig(newRootConfiguration, pathIndex);
  };

  const moveItem = (
    e,
    configuration,
    pathIndex,
    onChangePathConfig,
    itemIndex,
    direction,
  ) => {
    e.preventDefault();
    const up = direction === 'up';
    let newRootConfiguration = { ...configuration[pathIndex] };

    let item = newRootConfiguration.items[itemIndex];
    newRootConfiguration.items.splice(itemIndex, 1);
    newRootConfiguration.items.splice(itemIndex + (up ? -1 : 1), 0, item);
    onChangePathConfig(newRootConfiguration, pathIndex);
  };

  return (
    <div className="quick-search-configuration-widget">
      <PathsWidget
        {...props}
        defaultRootConfiguration={defaultRootConfiguration}
        onClickRoot={() => {
          setActiveItem(0);
        }}
      >
        {({ configuration, activeRoot, onChangePathConfig }) => (
          <Grid className="items-list-menu-wrapper">
            <Grid.Column width={4}>
              <Header as="h5" className="items-header">
                {intl.formatMessage(messages.rootItemsHeader)}
              </Header>
              <Menu fluid vertical tabular className="root-items-menu">
                {configuration[activeRoot].items?.map((item, idx) => (
                  <Menu.Item
                    key={`item-${idx}`}
                    name={item.title}
                    active={activeItem === idx}
                    onClick={() => setActiveItem(idx)}
                  >
                    <Button.Group vertical className="move-buttons">
                      <Button
                        disabled={idx === 0}
                        size="tiny"
                        icon={<Icon name="arrow left" />}
                        title={intl.formatMessage(messages.moveItemUp)}
                        onClick={(e) =>
                          moveItem(
                            e,
                            configuration,
                            activeRoot,
                            onChangePathConfig,
                            idx,
                            'up',
                          )
                        }
                      />
                      <Button
                        disabled={
                          idx === configuration[activeRoot].items.length - 1
                        }
                        size="tiny"
                        icon={<Icon name="arrow right" />}
                        title={intl.formatMessage(messages.moveItemDown)}
                        onClick={(e) =>
                          moveItem(
                            e,
                            configuration,
                            activeRoot,
                            onChangePathConfig,
                            idx,
                            'down',
                          )
                        }
                      />
                    </Button.Group>
                    <span>{item.title}</span>
                  </Menu.Item>
                ))}
                <Menu.Item
                  name={intl.formatMessage(messages.addItem)}
                  onClick={(e) =>
                    addItem(e, configuration, activeRoot, onChangePathConfig)
                  }
                >
                  <Icon name="plus" />
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={8}>
              {activeItem > -1 &&
              activeItem < configuration[activeRoot].items?.length ? (
                <QuickSearchConfigurationForm
                  id={`${activeRoot}-${activeItem}`}
                  item={configuration[activeRoot].items[activeItem]}
                  onChange={(root) =>
                    onChangeItem(
                      configuration,
                      activeRoot,
                      onChangePathConfig,
                      activeItem,
                      root,
                    )
                  }
                  deleteItem={(e) =>
                    deleteItem(
                      e,
                      configuration,
                      activeRoot,
                      onChangePathConfig,
                      activeItem,
                    )
                  }
                />
              ) : (
                <span className="empty-active-item">
                  {intl.formatMessage(messages.emptyActiveItem)}
                </span>
              )}
            </Grid.Column>
          </Grid>
        )}
      </PathsWidget>
    </div>
  );
};

export default QuickSearchConfigurationWidget;
