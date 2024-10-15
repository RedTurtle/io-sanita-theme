import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, useIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components/manage/Form';

const Sidebar = ({
  blocksConfig,
  block,
  data,
  onChangeBlock,
  navRoot,
  contentType,
  blocksErrors,
}) => {
  const intl = useIntl();

  const schema = blocksConfig[data['@type']].schema({ intl, formData: data });

  return (
    <>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="block_Tutto per" defaultMessage="Tutto per" />
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
  data: PropTypes.objectOf(PropTypes.any),
  block: PropTypes.string,
  selected: PropTypes.any,
  setSelected: PropTypes.func,
};

export default injectIntl(Sidebar);
