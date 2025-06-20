/*Reusable widget, to enable different configurations per-path */
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

import './pathsWidget.scss';

const messages = defineMessages({
  addRootPath: {
    id: 'quicksearchwidget-add-rootpath',
    defaultMessage: 'Aggiungi radice di navigazione',
  },
  deleteRootPath: {
    id: 'quicksearchwidget-delete-rootpath',
    defaultMessage: 'Rimuovi radice di navigazione',
  },
  root_path: {
    id: 'quicksearchwidget-rootpath',
    defaultMessage: 'Radice di navigazione',
  },
  emptyActiveRootPath: {
    id: 'quicksearchwidget-emptyActiveRootPath',
    defaultMessage: 'Seleziona un percorso',
  },
});

const PathsWidget = ({
  value,
  id,
  onChange,
  required,
  title,
  description,
  orientation = 'horizontal', //horizontal | vertical. Se si passa 'vertical' il widget occupa tutta la larghezza disponibile perchè viene posizinato sotto al titolo del campo
  defaultRootConfiguration = (/*title*/) => {},
  onClickRoot = () => {}, //action on clicking root path
  children,
}) => {
  const intl = useIntl();
  const _defaultRootConfiguration = (title) => ({
    rootPath: '/',
    ...(defaultRootConfiguration ? defaultRootConfiguration(title) : {}),
  });
  const defaultConfiguration = [_defaultRootConfiguration()];

  const [configuration, setConfiguration] = useState(
    value?.length > 0 && value !== '""'
      ? JSON.parse(value)
      : defaultConfiguration,
  );

  const [activeRoot, setActiveRoot] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const handleChangeConfiguration = (value) => {
    setConfiguration(value);
    onChange(id, JSON.stringify(value));
  };

  const addRootPath = (e) => {
    e.preventDefault();
    const itemsNumber = configuration.length;
    const rootItem = `/tab${itemsNumber}`;
    let newRootConfiguration = [
      ...configuration,
      {
        ..._defaultRootConfiguration(`Tab ${itemsNumber}`),
        rootPath: rootItem,
      },
    ];

    handleChangeConfiguration(newRootConfiguration);
    setActiveRoot(newRootConfiguration.length - 1);
  };

  const deleteRootPath = (e, index) => {
    e.preventDefault();
    let newRootConfiguration = [...configuration];
    newRootConfiguration.splice(index, 1);

    if (activeRoot === index) {
      setTimeout(() => setActiveRoot(index > 0 ? index - 1 : 0), 0);
    }

    handleChangeConfiguration(newRootConfiguration);
  };

  const onChangeRootPath = (index, root) => {
    let newRootConfiguration = [...configuration];
    newRootConfiguration[index] = root;

    handleChangeConfiguration(newRootConfiguration);
  };

  const onChangePathConfig = (newValue, pathIndex) => {
    let newRootConfiguration = [...configuration];
    newRootConfiguration[pathIndex] = newValue;

    handleChangeConfiguration(newRootConfiguration);
  };

  return (
    <div className="paths-configuration-widget">
      <Form.Field inline id={id}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={orientation == 'vertical' ? '12' : '4'}>
              <div className="wrapper">
                <label htmlFor="paths-configuration">{title}</label>
              </div>
            </Grid.Column>
            <Grid.Column
              width={orientation == 'vertical' ? '12' : '8'}
              className="paths-configuration-widget"
            >
              <div id="paths-configuration">
                <Menu pointing secondary className="rootpath-menu">
                  {configuration.map((root, idx) => (
                    <Menu.Item
                      key={`root-path-${idx}`}
                      name={root.rootPath}
                      active={activeRoot === idx}
                      onClick={() => {
                        setActiveRoot(idx);
                        onClickRoot(idx);
                      }}
                    >
                      <span>
                        {root?.rootPath ? flattenToAppURL(root?.rootPath) : '/'}
                      </span>
                    </Menu.Item>
                  ))}
                  <Menu.Item
                    active={false}
                    name={intl.formatMessage(messages.addRootPath)}
                    onClick={addRootPath}
                  >
                    <Icon name="plus" />
                  </Menu.Item>
                </Menu>
                <Segment>
                  {activeRoot > -1 && activeRoot < configuration.length ? (
                    <>
                      <Grid className="root-path-configuration">
                        <Grid.Column
                          width={12}
                          className="paths-rootpath-segment"
                        >
                          <TextWidget
                            id="rootPath"
                            title={intl.formatMessage(messages.root_path)}
                            description=""
                            required={true}
                            value={
                              configuration?.[activeRoot]?.rootPath
                                ? flattenToAppURL(
                                    configuration[activeRoot].rootPath,
                                  )
                                : '/'
                            }
                            onChange={(id, value) => {
                              onChangeRootPath(activeRoot, {
                                ...configuration[activeRoot],
                                rootPath: value?.length ? value : '/',
                              });
                            }}
                          />
                        </Grid.Column>
                        <Grid.Column
                          width={12}
                          textAlign="right"
                          className="delete-root-path-container"
                        >
                          <Button
                            icon="trash"
                            size="mini"
                            negative
                            onClick={(e) => deleteRootPath(e, activeRoot)}
                            id="delete-rootpath"
                            content={intl.formatMessage(
                              messages.deleteRootPath,
                            )}
                          />
                        </Grid.Column>
                      </Grid>

                      <div className="root-path-content">
                        {children({
                          configuration,
                          activeRoot,
                          onChangePathConfig,
                        })}
                      </div>
                    </>
                  ) : (
                    <span className="empty-active-root-path">
                      {intl.formatMessage(messages.emptyActiveRootPath)}
                    </span>
                  )}
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>
          {description && (
            <Grid.Row stretched>
              <Grid.Column stretched width="12">
                <p className="help">{description}</p>
              </Grid.Column>
            </Grid.Row>
          )}
        </Grid>
      </Form.Field>
    </div>
  );
};

export default PathsWidget;
