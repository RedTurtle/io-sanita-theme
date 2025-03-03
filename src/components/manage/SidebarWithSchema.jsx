import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, FormattedMessage } from 'react-intl';

import { BlockDataForm } from '@plone/volto/components/manage/Form';

const SidebarWithSchema = (props) => {
  const {
    blocksConfig,
    data,
    block,
    onChangeBlock,
    navRoot,
    contentType,
    blocksErrors,
    sidebarTitle,
    openObjectBrowser,
  } = props;
  const intl = useIntl();

  const schema = blocksConfig[data['@type']].schema({
    intl,
    formData: data,
    onChangeBlock,
    openObjectBrowser,
    block,
  });
  const dataAdapter = blocksConfig[data['@type']].dataAdapter;

  return (
    <>
      {sidebarTitle && (
        <header className="header pulled">
          <h2>{sidebarTitle}</h2>
        </header>
      )}
      <BlockDataForm
        schema={schema}
        title={schema.title}
        onChangeField={(id, value) => {
          dataAdapter
            ? dataAdapter({
                block,
                data,
                id,
                onChangeBlock,
                value,
              })
            : onChangeBlock(block, {
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
    </>
  );
};

SidebarWithSchema.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default SidebarWithSchema;
