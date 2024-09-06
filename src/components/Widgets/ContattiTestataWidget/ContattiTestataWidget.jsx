import React, { useEffect } from 'react';
import schema from './schema.js';
import { ObjectListWidget } from '@plone/volto/components';

const ContattiTestataWidget = (props) => {
  const { id, value, onChange } = props;
  console.log(props);
  const onChangeField = (id, value) => {
    onChange(id, value);
  };

  useEffect(() => {
    if (!value || value?.length === 0) {
      onChangeField(id, [{ '@id': 'firstItem' }]);
    }
  }, [id, value, onChange]);

  return (
    <ObjectListWidget
      schema={schema()}
      block={'contatti_testata'}
      value={value ?? []}
      onChange={onChangeField}
      id={id}
    />
  );
};

export default ContattiTestataWidget;
