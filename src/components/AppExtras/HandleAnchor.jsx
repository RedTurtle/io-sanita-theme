import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollIntoView, getMainOffset } from 'io-sanita-theme/helpers';

const HandleAnchor = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      // eslint-disable-next-line no-unused-expressions
      const _id = location.hash.replace('#', '');
      if (!_id.startsWith('query=')) {
        //nel blocco 'search' quando si applicano dei filtri, viene aggiunta all'url la query preceduta da '#query=' che in quel caso non si tratta di un'àncora
        const ref = document.querySelector('#' + _id);
        if (ref) {
          ref.focus();

          setTimeout(() => {
            scrollIntoView({ ref });
          }, 30);
        }
      }
    }
  }, [location]);
  return <></>;
};

export default HandleAnchor;
