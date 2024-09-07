import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';
import { BackReferences } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  strutture: {
    id: 'persona_strutture',
    defaultMessage: 'Strutture in cui opera',
  },
});

const PersonaStrutture = ({ content }) => {
  const intl = useIntl();

  return (
    <BackReferences
      type="persona_strutture"
      content={content}
      id={'persona_strutture'}
      title={intl.formatMessage(messages.strutture)}
    />
  );
};

PersonaStrutture.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PersonaStrutture;
