import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollIntoView, getMainOffset } from 'io-sanita-theme/helpers';

const HandleAnchor = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      // eslint-disable-next-line no-unused-expressions
      const _id = location.hash.replace('#', '');
      const ref = document.querySelector('#' + _id);
      ref.focus();

      setTimeout(() => {
        scrollIntoView({ ref });
      }, 30);
    }
  }, [location]);
  return <></>;
};

export default HandleAnchor;
