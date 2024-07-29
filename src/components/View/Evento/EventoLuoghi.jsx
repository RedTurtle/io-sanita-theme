import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import { RichTextSection } from 'io-sanita-theme/helpers';
import { Locations } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  dove: {
    id: 'dove',
    defaultMessage: 'Dove',
  },
});

const EventoLuoghi = ({ content }) => {
  const intl = useIntl();

  return content?.luoghi_correlati?.length > 0 ||
    content?.nome_sede?.length > 0 ||
    content?.street?.length > 0 ||
    (content?.geolocation?.latitude && content?.geolocation?.longitude) ||
    content?.zip_code?.length > 0 ||
    content?.city?.length > 0 ||
    content?.quartiere?.length > 0 ||
    content?.circoscrizione?.length > 0 ||
    content?.country?.length > 0 ? (
    <RichTextSection
      tag_id="luoghi"
      title={intl.formatMessage(messages.dove)}
    >
      <Locations
        content={content}
        locations={content?.luoghi_correlati ?? []}
      />
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoLuoghi.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoLuoghi;
