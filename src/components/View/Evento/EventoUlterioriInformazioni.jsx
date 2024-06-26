import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import { UniversalLink } from '@plone/volto/components';
import {
  richTextHasContent,
  RichText,
  RichTextSection,
} from 'io-sanita-theme/helpers';
import { HelpBox } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  ulteriori_informazioni: {
    id: 'event_ulteriori_informazioni',
    defaultMessage: 'Ulteriori informazioni',
  },
  event_url: {
    id: 'event_url',
    defaultMessage: "Url dell'evento",
  },
  patrocinato_da: {
    id: 'patrocinato_da',
    defaultMessage: 'Patrocinato da',
  },
});

const EventoUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();
  const view =
    richTextHasContent(content?.ulteriori_informazioni) ||
    content.event_url ||
    richTextHasContent(content?.patrocinato_da);

  return view ? (
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
      {richTextHasContent(content?.patrocinato_da) && (
        <div className="mt-4">
          <div className="mb-5">
            <RichText
              title={intl.formatMessage(messages.patrocinato_da)}
              data={content?.patrocinato_da}
            />
          </div>
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
    patrocinato_da: PropTypes.shape({
      'content-type': PropTypes.string,
      data: PropTypes.string,
      encoding: PropTypes.string,
    }),
    event_url: PropTypes.string,
  }).isRequired,
};
