import React from 'react';
import { v4 as uuid } from 'uuid';
import { omit, without } from 'lodash';
import move from 'lodash-move';
import { useIntl, defineMessages } from 'react-intl';
import { Button } from 'semantic-ui-react';
import { Icon, FormFieldWrapper, DragDropList } from '@plone/volto/components';
import { emptyBlocksForm } from '@plone/volto/helpers';
import { ObjectListWidget } from '@plone/volto/components/manage/Widgets';

import addSVG from '@plone/volto/icons/add.svg';
import dragSVG from '@plone/volto/icons/drag.svg';
import trashSVG from '@plone/volto/icons/delete.svg';

import './panels-widget.less';
import { object } from 'prop-types';

const messages = defineMessages({
  add: { id: 'panels_widget_Add', defaultMessage: 'Add' },
  panelIndex: {
    id: 'panel_index',
    defaultMessage: 'Panel {panel_index}',
  },
});

export function moveItem(formData, source, destination) {
  return {
    ...formData,
    blocks_layout: {
      items: move(formData.blocks_layout?.items, source, destination),
    },
  };
}

const empty = () => {
  return [uuid(), emptyBlocksForm()];
};

const PanelsWidget = (props) => {
  const intl = useIntl();
  const { fieldSet, value = {}, id, onChange, schema } = props;
  const { blocks = {} } = value;
  const items = (value.blocks_layout?.items || []).map((id) => {
    return {
      '@id': id,
      ...blocks[id],
    };
  });

  const objectSchema = typeof schema === 'function' ? schema(props) : schema;

  return (
    <ObjectListWidget
      {...props}
      schema={objectSchema}
      value={items}
      onChange={(id, _value) => {
        let new_value = { ...value };
        new_value.blocks = _value.reduce((acc, v) => {
          const id = v['@id'];
          acc[id] = omit(v, ['@id']);
          if (Object.keys(acc[id]).length == 0) {
            const [newData] = empty();
            acc[id] = newData;
          }
          return acc;
        }, {});
        new_value.blocks_layout.items = Object.keys(new_value.blocks);

        onChange(id, new_value);
      }}
    />
  );
};

export default PanelsWidget;
