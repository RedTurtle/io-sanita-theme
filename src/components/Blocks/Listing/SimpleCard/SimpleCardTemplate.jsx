import React from 'react';

import PropTypes from 'prop-types';

import SimpleCardTemplateDefault from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplateDefault';
import SimpleCardTemplateCompact from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplateCompact';
import SimpleCardTemplateOneForRow from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplateOneForRow';

import SimpleCardTemplateGuide from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplateGuide';
import SimpleCardTemplateGhost from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplateGhost';
import SimpleCardTemplatePlace from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplatePlace';

import {
  SimpleCardTemplateAppearance_COMPACT,
  SimpleCardTemplateAppearance_ONEFORROW,
  SimpleCardTemplateAppearance_GUIDE,
  SimpleCardTemplateAppearance_GHOST,
  SimpleCardTemplateAppearance_PLACE,
} from 'io-sanita-theme/config/blocks/listing/ListingOptions';

import { ListingContainer } from 'io-sanita-theme/components/Blocks';
import './simpleCardTemplate.scss';

const SimpleCardTemplate = (data) => {
  let content = null;
  switch (data.appearance) {
    case SimpleCardTemplateAppearance_COMPACT:
      content = <SimpleCardTemplateCompact {...data} />;
      break;
    case SimpleCardTemplateAppearance_ONEFORROW:
      content = <SimpleCardTemplateOneForRow {...data} />;
      break;
    case SimpleCardTemplateAppearance_GUIDE:
      content = <SimpleCardTemplateGuide {...data} />;
      break;
    case SimpleCardTemplateAppearance_GHOST:
      content = <SimpleCardTemplateGhost {...data} />;
      break;
    case SimpleCardTemplateAppearance_PLACE:
      content = <SimpleCardTemplatePlace {...data} />;
      break;
    default:
      content = <SimpleCardTemplateDefault {...data} />;
  }

  return (
    <ListingContainer data={data} isEditMode={data.isEditMode}>
      {content}
    </ListingContainer>
  );
};

SimpleCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
};

export default SimpleCardTemplate;
