import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components/manage/Form';

import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  linkMoreTitle: {
    id: 'linkMoreTitle',
    defaultMessage: 'Titolo per il link ad altro',
  },
  linkMore: {
    id: 'linkMore',
    defaultMessage: 'Link ad altro',
  },
  bg_color: {
    id: 'bg_color',
    defaultMessage: 'Colore di sfondo',
  },
});

const Sidebar = ({
  data,
  block,
  onChangeBlock,
  onChangeSubBlock,
  openObjectBrowser,
  blocksConfig,
  navRoot,
  contentType,
  blocksErrors,
}) => {
  const intl = useIntl();
  const schema = blocksConfig[data['@type']].schema({
    intl,
    formData: data,
    onChangeBlock,
    openObjectBrowser,
    block,
  });

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="contacts_block" defaultMessage="Contatti" />
        </h2>
      </header>
      <BlockDataForm
        schema={schema}
        title={schema.title}
        onChangeField={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
        onChangeBlock={onChangeBlock}
        formData={data}
        block={block}
        blocksConfig={blocksConfig}
        navRoot={navRoot}
        contentType={contentType}
        errors={blocksErrors}
      />
    </Segment.Group>
  );
};

Sidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  block: PropTypes.string,
  onChangeBlock: PropTypes.func,
  selected: PropTypes.any,
  setSelected: PropTypes.func,
};

export default injectIntl(Sidebar);
