import React from 'react';
import PropTypes from 'prop-types';
import Body from 'io-sanita-theme/components/Blocks/SearchBandi/Body';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import { getBaseUrl } from '@plone/volto/helpers/Url/Url';
import Sidebar from 'io-sanita-theme/components/Blocks/SearchBandi/Sidebar';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  no_filters: {
    id: 'bandi_search_no_filters',
    defaultMessage:
      'Nessun filtro da mostrare. Seleziona i filtri di ricerca da mostrare dalla sidebar laterale.',
  },
});

const Edit = ({
  data,
  id,
  block,
  onChangeBlock,
  selected,
  pathname,
  blocksConfig,
}) => {
  const intl = useIntl();

  return (
    <div className="bandi-search public-ui">
      {!data.filter_one && !data.filter_two && !data.filter_three && (
        <div>{intl.formatMessage(messages.no_filters)}</div>
      )}
      <Body
        data={data}
        id={id}
        path={getBaseUrl(pathname)}
        inEditMode={true}
        onChangeBlock={onChangeBlock}
        blocksConfig={blocksConfig}
      />
      <SidebarPortal selected={selected}>
        <Sidebar
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
          blocksConfig={blocksConfig}
        />
      </SidebarPortal>
    </div>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Edit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  block: PropTypes.string.isRequired,
  selected: PropTypes.any,
  intl: PropTypes.any,
  onChangeBlock: PropTypes.func.isRequired,
};

export default Edit;
