import { RichTextSection, hasGeolocation } from 'io-sanita-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';

import { Locations } from 'io-sanita-theme/components/View/commons';
import PropTypes from 'prop-types';
import React from 'react';

const messages = defineMessages({
  dove: {
    id: 'uo_dove',
    defaultMessage: 'Dove',
  },
});

const UODove = ({ content }) => {
  const intl = useIntl();

  return content?.struttura_correlata?.length > 0 ||
    content?.nome_sede?.length > 0 ||
    content?.street?.length > 0 ||
    hasGeolocation(content) ||
    content?.zip_code?.length > 0 ||
    content?.city?.length > 0 ||
    content?.quartiere?.length > 0 ||
    content?.country?.length > 0 ? (
    <RichTextSection tag_id="luoghi" title={intl.formatMessage(messages.dove)}>
      {/* INDIRIZZI E STRUTTURE */}
      <Locations
        content={content}
        locations={content?.struttura_correlata ?? []}
      />
    </RichTextSection>
  ) : (
    <></>
  );
};

UODove.propTypes = {
  content: PropTypes.object.isRequired,
};

export default UODove;
