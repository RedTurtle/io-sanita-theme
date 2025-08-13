/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Spinner } from 'design-react-kit';

import './overlayLoading.scss';

const OverlayLoading = ({ loading }) => {
  return loading ? (
    <div className="overlay loading-results">
      <Spinner active />
    </div>
  ) : (
    <></>
  );
};

export default OverlayLoading;
