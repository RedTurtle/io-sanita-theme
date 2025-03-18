import React from 'react';
import { Input } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from './util';
import './editor.less';
import filterSVG from '@plone/volto/icons/filter.svg';
import clearSVG from '@plone/volto/icons/clear.svg';
import { Container, Row, Col } from 'design-react-kit';
import { SearchBar } from 'io-sanita-theme/components';

const messages = defineMessages({
  placeholder: {
    id: 'accordion-Type to filter...',
    defaultMessage: 'Type to filter...',
  },
  search_description: {
    id: 'accordion-filter description',
    defaultMessage: 'Insert a keyword to filter items below..',
  },
});

const AccordionFilter = ({
  config,
  data,
  filterValue,
  handleFilteredValueChange,
  block,
}) => {
  const intl = useIntl();

  return (
    <Container className="px-4">
      <Row>
        <Col>
          <SearchBar
            id={block + '-search-bar'}
            title={intl.formatMessage(messages.placeholder)}
            textDescription={intl.formatMessage(messages.search_description)}
            value={filterValue}
            onChange={(v) => {
              handleFilteredValueChange(v);
            }}
            showSubmit={false}
            ariaControls={block + '-accordion'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AccordionFilter;
