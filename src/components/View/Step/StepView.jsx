/**
 * StepView view component.
 * @module components/theme/View/Step
 */

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
/**
 * StepView view component class.
 * @function StepView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const StepView = ({ content, location }) => {
  const history = useHistory();

  //fa semplicemente una redirect al suo contenuto padre, perchè non ha senso la vista del singolo step
  useEffect(() => {
    const parent = content.parent['@id'];
    history.replace(flattenToAppURL(parent));
  }, [content, history]);
  return <></>;
};

export default StepView;
