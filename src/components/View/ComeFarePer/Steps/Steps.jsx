/**
 * Steps view component.
 * @module components/theme/View/DocumentoView/Steps
 */

import React, { useState, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import PropTypes from 'prop-types';
import {
  richTextHasContent,
  RichText,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Button,
} from 'design-react-kit';
import { Icon, CardPlace, CardContatti } from 'io-sanita-theme/components';
import { Attachments } from 'io-sanita-theme/components/View/commons';

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
  where: {
    id: 'steps_where',
    defaultMessage: 'Dove',
  },
  contacts: {
    id: 'steps_contacts',
    defaultMessage: 'Contatti',
  },
  documents: {
    id: 'steps_documents',
    defaultMessage: 'Documenti',
  },
});
/**
 * Steps view component class.
 * @function Steps
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const Steps = ({ content, steps = [] }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState('');
  const [allOpen, setAllOpen] = useState(false);

  useEffect(() => {
    setActiveItem('');
  }, [allOpen]);

  const searchSteps = useSelector((state) => state.content?.subrequests);

  // one request is made for every step
  useEffect(() => {
    steps.forEach((item) => {
      const url = flattenToAppURL(item['@id']);
      const loaded = searchSteps?.[url]?.loading || searchSteps?.[url]?.loaded;

      if (!loaded) {
        dispatch(getContent(url, null, url));
      }
    });

    return () => {
      steps.forEach((item) => {
        dispatch(resetContent(flattenToAppURL(item['@id'])));
      });
    };
  }, []);

  return steps.length > 0 ? (
    <div className="steps">
      <Button
        color="link"
        className="btn-link-accent no-padding"
        size="xs"
        aria-expanded={allOpen}
        onClick={() => {
          setAllOpen(!allOpen);
        }}
      >
        {allOpen
          ? intl.formatMessage(messages.hide_all)
          : intl.formatMessage(messages.show_all)}{' '}
        <Icon icon={allOpen ? 'it-collapse' : 'it-expand'} size="sm" />
      </Button>
      <Accordion background="active">
        {steps.map((s, index) => {
          const step = searchSteps[flattenToAppURL(s['@id'])]?.data ?? s;
          const itemIndex = index + 1;
          const toggleItem = () => {
            setActiveItem(activeItem !== itemIndex ? itemIndex : '');
          };
          const isActive = () => {
            return activeItem === itemIndex || allOpen;
          };

          return (
            <AccordionItem key={'accordion' + itemIndex}>
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
                        <Icon
                          icon={isActive() ? 'it-collapse' : 'it-expand'}
                          size="sm"
                        />
                      </Button>
                    )}
                  </div>
                }
              >
                <div className="step-number">{itemIndex}</div>
                {step?.title && <div className="step-title">{step.title}</div>}
              </AccordionHeader>
              <AccordionBody active={isActive()}>
                {/* TESTO */}
                {richTextHasContent(step?.testo) && (
                  <div className="mt-4">
                    <div className="mb-5">
                      <RichText data={step?.testo} />
                    </div>
                  </div>
                )}

                {/* ALLEGATI */}
                {contentFolderHasItems(step, 'allegati') && (
                  <Attachments
                    as_section={false}
                    content={step}
                    folder_name="allegati"
                    title={intl.formatMessage(messages.documents)}
                  />
                )}

                {/* UFFICI CORRELATI */}
                {step?.uo_correlata?.length > 0 && (
                  <div className="mb-5">
                    <h4 className="h5">{intl.formatMessage(messages.where)}</h4>
                    {step.uo_correlata.map((uo, i) => {
                      return (
                        <CardPlace
                          item={uo}
                          className="my-2"
                          key={uo['@id'] + i}
                        />
                      );
                    })}
                  </div>
                )}

                {/* PDC CORRELATI */}
                {step?.pdc_correlato?.length > 0 && (
                  <div className="mb-5">
                    <h4 className="h5">
                      {intl.formatMessage(messages.contacts)}
                    </h4>
                    {step.pdc_correlato.map((pdc, i) => (
                      <CardContatti
                        item={pdc}
                        show_title={true}
                        key={pdc['@id'] + i}
                        className="my-2"
                      />
                    ))}
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
