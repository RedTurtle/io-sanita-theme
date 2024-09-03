import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';
import { BackReferences } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  uo: {
    id: 'persona_uo_appartenenza',
    defaultMessage: 'Unità operativa di appartenenza',
  },
});

const PersonaUOAppartenenza = ({ content }) => {
  const intl = useIntl();

  return (
    <BackReferences
      type="uo"
      content={content}
      id={'persona_uo'}
      title={intl.formatMessage(messages.uo)}
    />
  );
};

PersonaUOAppartenenza.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PersonaUOAppartenenza;
