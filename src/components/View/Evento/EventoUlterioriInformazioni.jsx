import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';
import { HelpBox } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  ulteriori_informazioni: {
    id: 'evento_ulteriori_informazioni',
    defaultMessage: 'Ulteriori informazioni',
  },
  event_url: {
    id: 'event_url',
    defaultMessage: "Url dell'evento",
  },
});

const EventoUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.ulteriori_informazioni) ||
    content?.event_url ? (
    <RichTextSection
      tag_id="ulteriori_informazioni"
      title={intl.formatMessage(messages.ulteriori_informazioni)}
    >
      {richTextHasContent(content?.ulteriori_informazioni) && (
        <HelpBox text={content?.ulteriori_informazioni} />
      )}
      {content?.event_url && (
        <div className="mt-4">
          <h3 className="h5">{intl.formatMessage(messages.event_url)}</h3>
          <UniversalLink href={content.event_url}>
            {content.event_url}
          </UniversalLink>
        </div>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

export default EventoUlterioriInformazioni;

EventoUlterioriInformazioni.propTypes = {
  content: PropTypes.shape({
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
    event_url: PropTypes.string,
  }).isRequired,
};
