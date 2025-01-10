import React, { useEffect } from 'react';
import schema from './schema.js';
import { ObjectListWidget } from '@plone/volto/components/manage/Widgets';

const HeaderContactsWidget = (props) => {
  const { id, value, onChange } = props;
  const onChangeField = (id, value) => {
    onChange(id, JSON.stringify(value));
  };

  useEffect(() => {
    if (!value || value?.length === 0) {
      onChangeField(id, [{ '@id': 'firstItem' }]);
    }
  }, [id, value, onChange]);

  return (
    <ObjectListWidget
      schema={schema}
      block={'contatti_testata'}
      value={JSON.parse(value) ?? []}
      onChange={onChangeField}
      id={id}
      title="Contatti in testata"
    />
  );
};

export default HeaderContactsWidget;
