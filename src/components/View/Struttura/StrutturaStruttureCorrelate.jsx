import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import { RichTextSection, richTextHasContent, RichText } from 'io-sanita-theme/helpers';
import { Locations } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  struttura_correlata: {
    id: 'struttura_correlata',
    defaultMessage: 'Strutture correlate',
  },
});

const StrutturaStruttureCorrelate = ({ content }) => {
  const intl = useIntl();

  return content?.struttura_correlata?.length > 0 ? (
    <RichTextSection tag_id="dove" title={intl.formatMessage(messages.struttura_correlata)}>
      <Locations
        content={content}
        locations={content?.struttura_correlata ?? []}
      />
    </RichTextSection>
  ) : (
    <></>
  );
};

StrutturaStruttureCorrelate.propTypes = {
  content: PropTypes.object.isRequired,
};

export default StrutturaStruttureCorrelate;
