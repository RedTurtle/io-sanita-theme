/**
 * Steps view component.
 * @module components/theme/View/DocumentoView/Steps
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from 'design-react-kit';
import './steps.scss';

/**
 * Steps view component class.
 * @function Steps
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const Steps = ({ steps = [] }) => {
  const [activeItem, setActiveItem] = useState('');

  return steps.length > 0 ? (
    <div className="steps">
      <Accordion background="active">
        {steps.map((step, index) => {
          const itemIndex = index + 1;
          return (
            <AccordionItem>
              <AccordionHeader
                active={activeItem === itemIndex}
                onToggle={() =>
                  setActiveItem(activeItem !== itemIndex ? itemIndex : '')
                }
                append={
                  <>Mostra nascondi dettagli freccia click aria-expanded</>
                }
              >
                <div className="step-number">{itemIndex}</div>
                <div className="step-title">{step.title}</div>
              </AccordionHeader>
              <AccordionBody active={activeItem === itemIndex}>
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices
                eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget
                semper nibh. Proin enim nulla, egestas ac rutrum eget,
                ullamcorper nec turpis.
              </AccordionBody>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Steps.propTypes = {
  content: PropTypes.shape({
    items: PropTypes.array,
  }).isRequired,
};

export default Steps;
