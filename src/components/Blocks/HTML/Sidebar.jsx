import { useIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components/manage/Form';

const HTMLSidebar = (props) => {
  const { block, blocksConfig, data, onChangeBlock, navRoot, contentType } =
    props;
  const intl = useIntl();

  const schema = blocksConfig[data['@type']].schema({ intl });
  const dataAdapter = blocksConfig[data['@type']].dataAdapter;

  return (
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
          : onChangeBlock(block, { ...data, [id]: value });
      }}
      formData={data}
      block={block}
      onChangeBlock={onChangeBlock}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default HTMLSidebar;
