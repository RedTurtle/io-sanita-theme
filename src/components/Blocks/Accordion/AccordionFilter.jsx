import React from 'react';
import { Accordion, Input } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from './util';
import './editor.less';
import filterSVG from '@plone/volto/icons/filter.svg';
import clearSVG from '@plone/volto/icons/clear.svg';

const messages = defineMessages({
  placeholder: {
    id: 'Type to filter...',
    defaultMessage: 'Type to filter...',
  },
});

const AccordionFilter = ({
  config,
  data,
  filterValue,
  handleFilteredValueChange,
}) => {
  const intl = useIntl();

  return (
    <Accordion
      className={`styled ${
        data.styles ? data.styles.theme : config?.defaults?.theme
      }`}
    >
      <Accordion.Title className="accordion-title filter  align-arrow-right">
        <Icon
          name={filterValue === '' ? filterSVG : clearSVG}
          onClick={() => handleFilteredValueChange('')}
        />
        <Input
          fluid
          className="input-accordion-title"
          transparent
          placeholder={intl.formatMessage(messages.placeholder)}
          value={filterValue}
          onChange={(e) => handleFilteredValueChange(e.target.value)}
        />
      </Accordion.Title>
    </Accordion>
  );
};

export default AccordionFilter;
