import React from 'react';
import Body from 'io-sanita-theme/components/Blocks/QuickSearch/Body';

const Edit = (props) => {
  return (
    <div className="public-ui">
      <Body {...props} isEditMode={true} />
    </div>
  );
};

export default Edit;
