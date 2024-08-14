import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'design-react-kit';
import SimpleCardTemplateDefault from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplateDefault';
import SimpleCardTemplateCompact from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplateCompact';
import SimpleCardTemplateOneForRow from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplateOneForRow';

import {
  SimpleCardTemplateAppearance_COMPACT,
  SimpleCardTemplateAppearance_ONEFORROW,
} from 'io-sanita-theme/config/blocks/listing/ListingOptions';
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
    default:
      content = <SimpleCardTemplateDefault {...data} />;
  }

  return <Container className="px-4">{content}</Container>;
};

SimpleCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
};

export default SimpleCardTemplate;
