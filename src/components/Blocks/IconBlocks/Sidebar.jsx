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
          <FormattedMessage
            id="icons_blocks"
            defaultMessage="Blocco con icone"
          />
        </h2>
      </header>

      <BlockDataForm
        data={data}
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

export default Sidebar;
