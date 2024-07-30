import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Sponsors } from 'io-sanita-theme/components/View/Evento';
import {
  RichTextSection,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  sponsors: {
    id: 'sponsors',
    defaultMessage: 'Sponsor',
  },
});

const EventoSponsors = ({ content }) => {
  const intl = useIntl();

  return content?.items.some((e) => e.id === 'sponsor-evento') && (
    <RichTextSection
        tag_id="sponsors"
        title={intl.formatMessage(messages.sponsors)}
      >
      <Sponsors content={content} folder_name={'sponsor-evento'} />
    </RichTextSection>
  );
};

EventoSponsors.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoSponsors;
