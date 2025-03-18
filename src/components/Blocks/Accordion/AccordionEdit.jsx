import cx from 'classnames';
import React from 'react';
import { Input } from 'semantic-ui-react';

import config from '@plone/volto/registry';
import { defineMessages, useIntl } from 'react-intl';
import {
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from 'design-react-kit';
import './accordion_edit.scss';

const messages = defineMessages({
  EnterTitle: {
    id: 'Enter Title',
    defaultMessage: 'Enter Title',
  },
});

const Heading = React.memo(({ type, children, ...props }) => {
  return React.createElement(type || 'h2', props, children);
});
Heading.defaultProps = {
  type: 'h2',
};

const AccordionEdit = (props) => {
  const {
    children,
    handleTitleChange,
    handleTitleClick,
    uid,
    panel,
    data,
    index,
    isActive,
    toggle,
  } = props;
  const intl = useIntl();

  const accordionConfig = config.blocks.blocksConfig.accordion;

  const html_id = uid + '-' + index;

  return (
    <AccordionItem {...accordionConfig.options}>
      <AccordionHeader
        active={isActive}
        onToggle={(e) => toggle(e, { index })}
        aria-controls={html_id}
      >
        <Heading type={data.title_size} id={html_id + '-title'}>
          {!data.readOnlyTitles ? (
            <Input
              fluid
              key={html_id + 'edit-title'}
              className="input-accordion-title"
              transparent
              placeholder={intl.formatMessage(messages.EnterTitle)}
              value={panel?.title || ''}
              onClick={(e) => {
                handleTitleClick();
                e.stopPropagation();
              }}
              onChange={(e) => handleTitleChange(e, [uid, panel])}
            />
          ) : (
            <span>{panel?.title}</span>
          )}
        </Heading>
      </AccordionHeader>

      <AccordionBody
        active={isActive}
        id={html_id}
        role="region"
        aria-labelledby={html_id + '-title'}
      >
        {children}
      </AccordionBody>
    </AccordionItem>
  );
};

export default React.memo(AccordionEdit);
