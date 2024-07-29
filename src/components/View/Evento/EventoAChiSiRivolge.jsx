import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichText,
  RichTextSection,
} from 'io-sanita-theme/helpers';

// import { TassonomiaUtenti } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  a_chi_si_rivolge: {
    id: 'a_chi_si_rivolge',
    defaultMessage: 'A chi si rivolge',
  },
});

const EventoAChiSiRivolge = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.a_chi_si_rivolge) ||
    content.a_chi_si_rivolge_tassonomia?.length > 0 ? (
    <RichTextSection
      tag_id="a_chi_si_rivolge"
      title={intl.formatMessage(messages.a_chi_si_rivolge)}
    >
      {richTextHasContent(content?.a_chi_si_rivolge) && (
        <div className="mt-4">
          <div className="mb-2">
            <RichText data={content?.a_chi_si_rivolge} />
          </div>
        </div>
      )}

      {/* <TassonomiaUtenti content={content} /> */}
      {/* TO DO: Da riattivare quando si mergia con il ct ComeFarePer */}
    </RichTextSection>
  ) : (
    <></>
  );
};

export default EventoAChiSiRivolge;

EventoAChiSiRivolge.propTypes = {
  content: PropTypes.shape({
    a_chi_si_rivolge: PropTypes.shape({
      'content-type': PropTypes.string,
      data: PropTypes.string,
      encoding: PropTypes.string,
    }),
    a_chi_si_rivolge_tassonomia: PropTypes.array,
  }).isRequired,
};
