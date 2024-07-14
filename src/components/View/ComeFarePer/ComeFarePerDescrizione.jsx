import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichText,
  RichTextSection,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  panoramica: {
    id: 'come_fare_per_panoramica',
    defaultMessage: 'Panoramica',
  },
});

const ComeFarePerDescrizione = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.descrizione_estesa) ? (
    <RichTextSection
      tag_id="panoramica"
      title={intl.formatMessage(messages.panoramica)}
    >
      {richTextHasContent(content?.descrizione_estesa) && (
        <div className="mt-4">
          <div className="mb-5">
            <RichText
              data={content?.descrizione_estesa}
            />
          </div>
        </div>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

export default ComeFarePerDescrizione;

ComeFarePerDescrizione.propTypes = {
  content: PropTypes.shape({
    /* TO DO: verificare che sia cambiato in 'panoramica' invece che 'descrizione_estesa' */
    panoramica: PropTypes.shape({
      'content-type': PropTypes.string,
      data: PropTypes.string,
      encoding: PropTypes.string,
    }),
  }).isRequired,
};
