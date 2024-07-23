/**
 * Steps view component.
 * @module components/theme/View/DocumentoView/Steps
 */

import React, { useState, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Button,
} from 'design-react-kit';
import './steps.scss';

const messages = defineMessages({
  show_all: {
    id: 'steps_show_all',
    defaultMessage: 'Mostra tutto',
  },
  hide_all: {
    id: 'steps_hide_all',
    defaultMessage: 'Nascondi tutto',
  },
  show_details: {
    id: 'steps_show_details',
    defaultMessage: 'Mostra dettagli',
  },
  hide_details: {
    id: 'steps_hide_details',
    defaultMessage: 'Nascondi dettagli',
  },
});
/**
 * Steps view component class.
 * @function Steps
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const Steps = ({ steps = [] }) => {
  const intl = useIntl();
  const [activeItem, setActiveItem] = useState('');
  const [allOpen, setAllOpen] = useState(false);

  useEffect(() => {
    setActiveItem('');
  }, [allOpen]);

  return steps.length > 0 ? (
    <div className="steps">
      <Button
        color="link"
        aria-expanded={allOpen === true}
        onClick={() => {
          setAllOpen(!allOpen);
        }}
      >
        {allOpen
          ? intl.formatMessage(messages.hide_all)
          : intl.formatMessage(messages.show_all)}{' '}
        (TODO: mettere il caret)
      </Button>
      <Accordion background="active">
        {steps.map((step, index) => {
          const itemIndex = index + 1;
          const toggleItem = () => {
            setActiveItem(activeItem !== itemIndex ? itemIndex : '');
          };
          const isActive = () => {
            return activeItem === itemIndex || allOpen == true;
          };

          return (
            <AccordionItem>
              <AccordionHeader
                active={isActive()}
                onToggle={() => toggleItem()}
                append={
                  <>
                    {!allOpen && (
                      <Button
                        color="link"
                        aria-expanded={isActive()}
                        onClick={() => toggleItem()}
                      >
                        {isActive()
                          ? intl.formatMessage(messages.hide_details)
                          : intl.formatMessage(messages.show_details)}{' '}
                        (TODO: mettere il caret)
                      </Button>
                    )}
                  </>
                }
              >
                <div className="step-number">{itemIndex}</div>
                <div className="step-title">{step.title}</div>
              </AccordionHeader>
              <AccordionBody active={isActive()}>
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
