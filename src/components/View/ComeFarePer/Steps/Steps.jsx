/**
 * Steps view component.
 * @module components/theme/View/DocumentoView/Steps
 */

import React, { useState, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import {
  richTextHasContent,
  RichText,
} from 'io-sanita-theme/helpers';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Button,
} from 'design-react-kit';
import { Icon } from 'io-sanita-theme/components';
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

  // TO DO: fare la chiamata alla fullobject dello step

  return steps.length > 0 ? (
    <div className="steps">
      <Button
        color="link"
        className="btn-link-accent no-padding"
        size="xs"
        aria-expanded={allOpen === true}
        onClick={() => {
          setAllOpen(!allOpen);
        }}
      >
        {allOpen
          ? intl.formatMessage(messages.hide_all)
          : intl.formatMessage(messages.show_all)}{' '}
        <Icon icon={allOpen ? "it-collapse" : "it-expand"} size="sm" />
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
            <AccordionItem key={"accordion" + itemIndex}>
              <AccordionHeader
                active={isActive()}
                onToggle={() => toggleItem()}
                append={
                  <div className="accordion-wrap-btn">
                    {!allOpen && (
                      <Button
                        color="link"
                        className="btn-link-accent"
                        size="xs"
                        aria-expanded={isActive()}
                        onClick={() => toggleItem()}
                      >
                        {isActive()
                          ? intl.formatMessage(messages.hide_details)
                          : intl.formatMessage(messages.show_details)}{' '}
                        <Icon icon={isActive() ? "it-collapse" : "it-expand"} size="sm" />
                      </Button>
                    )}
                  </div>
                }
              >
                <div className="step-number">{itemIndex}</div>
                <div className="step-title">{step.title}</div>
              </AccordionHeader>
              <AccordionBody active={isActive()}>
                {richTextHasContent(step?.testo) && (
                  <div className="mt-4">
                    <div className="mb-5">
                      <RichText
                        data={step?.testo}
                      />
                    </div>
                  </div>
                )}
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
