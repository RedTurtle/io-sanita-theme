import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection, hasGeolocation } from 'io-sanita-theme/helpers';
import { Locations } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  dove: {
    id: 'struttura_dove',
    defaultMessage: 'Dove',
  },
});

const StrutturaDove = ({ content }) => {
  const intl = useIntl();

  return content?.nome_sede?.length > 0 ||
    content?.street?.length > 0 ||
    hasGeolocation(content) ||
    content?.zip_code?.length > 0 ||
    content?.city?.length > 0 ||
    content?.quartiere?.length > 0 ||
    content?.circoscrizione?.length > 0 ||
    content?.country?.length > 0 ? (
    <RichTextSection tag_id="dove" title={intl.formatMessage(messages.dove)}>
      <Locations content={content} />
    </RichTextSection>
  ) : (
    <></>
  );
};

StrutturaDove.propTypes = {
  content: PropTypes.object.isRequired,
};

export default StrutturaDove;
