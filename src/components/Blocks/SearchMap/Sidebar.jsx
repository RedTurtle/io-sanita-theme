import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, FormattedMessage } from 'react-intl';

import { BlockDataForm } from '@plone/volto/components/manage/Form';

const Sidebar = (props) => {
  const {
    blocksConfig,
    data,
    block,
    onChangeBlock,
    navRoot,
    contentType,
    blocksErrors,
  } = props;
  const intl = useIntl();

  const schema = blocksConfig[data['@type']].schema({ intl, formData: data });

  return (
    <>
      <header className="header pulled">
        <h2>
          <FormattedMessage
            id="Ricerca con mappa"
            defaultMessage="Ricerca con mappa"
          />
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
    </>
  );
};

Sidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default Sidebar;
