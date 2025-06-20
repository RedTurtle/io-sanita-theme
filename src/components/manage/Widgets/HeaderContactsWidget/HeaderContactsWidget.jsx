import React, { useEffect } from 'react';
import schema from './schema.js';
import { ObjectListWidget } from '@plone/volto/components/manage/Widgets';
import { PathsWidget } from 'io-sanita-theme/components/manage/Widgets';

const HeaderContactsWidget = (props) => {
  const { id, value, onChange } = props;

  const defaultRootConfiguration = (title) => {
    return {};
  };
  const onClickRoot = (routeIdx) => {};

  return (
    <div className="header-contacts-widget">
      <PathsWidget
        {...props}
        defaultRootConfiguration={defaultRootConfiguration}
        onClickRoot={onClickRoot}
        orientation="vertical"
      >
        {({ configuration, activeRoot, onChangePathConfig }) => (
          <>
            <ObjectListWidget
              wrapped={false}
              schema={schema}
              block={'contatti_testata' + activeRoot}
              value={configuration[activeRoot].items ?? []}
              onChange={(id, value) => {
                onChangePathConfig(
                  {
                    ...configuration[activeRoot],
                    items: value,
                  },
                  activeRoot,
                );
              }}
              id={id + activeRoot}
              title="Contatti in testata"
            />
          </>
        )}
      </PathsWidget>
    </div>
  );
};

export default HeaderContactsWidget;
