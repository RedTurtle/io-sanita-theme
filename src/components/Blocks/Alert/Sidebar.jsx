import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components/manage/Form';

const Sidebar = ({
  data,
  block,
  onChangeBlock,
  openObjectBrowser,
  blocksConfig,
  navRoot,
  blocksErrors,
  contentType,
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
          <FormattedMessage id="Alert" defaultMessage="Alert" />
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

export default Sidebar;
