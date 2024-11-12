import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import globeSVG from '@plone/volto/icons/globe.svg';
import { Icon } from '@plone/volto/components';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { Segment } from 'semantic-ui-react';

const messages = defineMessages({
  accordion_item: {
    id: 'accordion_item',
    defaultMessage: 'Elemento',
  },
});

const Sidebar = (props) => {
  const {
    data,
    block,
    blocksErrors,
    onChangeBlock,
    navRoot,
    contentType,
    blocksConfig,
  } = props;
  const intl = useIntl();
  const schema = blocksConfig.accordionItem.schema({ ...props, intl });

  return (
    <BlockDataForm
      schema={schema}
      title={data.title ?? intl.formatMessage(messages.accordion_item)}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
      navRoot={navRoot}
      contentType={contentType}
      errors={blocksErrors}
    />
  );
};

export default Sidebar;
