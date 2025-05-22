import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { getContent, resetContent } from '@plone/volto/actions/content/content';

export const useLoadSteps = (steps = []) => {
  const dispatch = useDispatch();
  const subrequests = useSelector((state) => state.content?.subrequests);
  const [loadedSteps, setLoadedSteps] = useState({});

  // one request is made for every step
  useEffect(() => {
    steps.forEach((item) => {
      const url = flattenToAppURL(item['@id']);
      const subrequest_id = item['@id'];
      const requested =
        subrequests?.[subrequest_id]?.loading ||
        subrequests?.[subrequest_id]?.loaded;

      if (!requested) {
        dispatch(getContent(url, null, subrequest_id));
      }
    });

    return () => {
      steps.forEach((item) => {
        dispatch(resetContent(item['@id']));
      });
    };
  }, []);

  useEffect(() => {
    steps.forEach((item) => {
      const subrequest_id = item['@id'];
      const step = subrequests?.[subrequest_id]?.data;
      if (subrequests?.[subrequest_id]?.loaded && step) {
        setLoadedSteps({ ...loadedSteps, [item['@id']]: step });
      }
    });
  }, [subrequests]);

  return { loadedSteps };
};
