import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  richTextHasContent,
  RichText,
  hasGeolocation,
} from 'io-sanita-theme/helpers';
import { Locations } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  dove: {
    id: 'evento_dove',
    defaultMessage: 'Dove',
  },
});

const EventoDove = ({ content }) => {
  const intl = useIntl();

  return content?.struttura_correlata?.length > 0 ||
    content?.nome_sede?.length > 0 ||
    content?.street?.length > 0 ||
    hasGeolocation(content) ||
    content?.zip_code?.length > 0 ||
    content?.city?.length > 0 ||
    content?.quartiere?.length > 0 ||
    content?.circoscrizione?.length > 0 ||
    content?.country?.length > 0 ||
    richTextHasContent(content?.webinar) ? (
    <RichTextSection tag_id="dove" title={intl.formatMessage(messages.dove)}>
      {richTextHasContent(content?.webinar) && (
        <div className="mb-4">
          <RichText data={content?.webinar} />
        </div>
      )}
      <Locations
        content={content}
        locations={content?.struttura_correlata ?? []}
      />
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoDove.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoDove;
