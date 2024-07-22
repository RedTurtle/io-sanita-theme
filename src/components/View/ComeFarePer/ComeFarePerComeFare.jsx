import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichText,
  RichTextSection,
} from 'io-sanita-theme/helpers';
import { Steps } from 'io-sanita-theme/components/View/ComeFarePer';

const messages = defineMessages({
  come_fare: {
    id: 'come_fare_per_come_fare',
    defaultMessage: 'Come fare',
  },
});

/* TO DO: questo campo deve essere costruito con un accordion */

const ComeFarePerComeFare = ({ content }) => {
  const intl = useIntl();
  const steps = content.items ?? []; //?.filter((item) => item.id !== 'multimedia') ?? [];

  return richTextHasContent(content?.come_fare) || steps.length > 0 ? (
    <RichTextSection
      tag_id="come_fare"
      title={intl.formatMessage(messages.come_fare)}
    >
      {richTextHasContent(content?.come_fare) && (
        <div className="mt-4">
          <div className="mb-5">
            <RichText data={content?.come_fare} />
          </div>
        </div>
      )}
      <Steps steps={steps} />
    </RichTextSection>
  ) : (
    <></>
  );
};

export default ComeFarePerComeFare;

ComeFarePerComeFare.propTypes = {
  content: PropTypes.shape({
    /* TO DO: aggiungere lo schema che ritorna */
  }).isRequired,
};
