import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichText,
  RichTextSection,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  a_chi_si_rivolge: {
    id: 'come_fare_per_a_chi_si_rivolge',
    defaultMessage: 'A chi è rivolto',
  },
});

const ComeFarePerAChiERivolto = ({ content }) => {
  const intl = useIntl();

  /* TO DO: verificare che sia cambiato in 'panoramica' invece che 'AChiERivolto_estesa' */
  return richTextHasContent(content?.a_chi_si_rivolge) ? (
    <RichTextSection
      tag_id="a_chi_si_rivolge"
      title={intl.formatMessage(messages.a_chi_si_rivolge)}
    >
      {richTextHasContent(content?.a_chi_si_rivolge) && (
        <div className="mt-4">
          <div className="mb-5">
            <RichText
              title={intl.formatMessage(messages.a_chi_si_rivolge)}
              data={content?.a_chi_si_rivolge}
            />
          </div>
        </div>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

export default ComeFarePerAChiERivolto;

ComeFarePerAChiERivolto.propTypes = {
  content: PropTypes.shape({
    a_chi_si_rivolge: PropTypes.shape({
      'content-type': PropTypes.string,
      data: PropTypes.string,
      encoding: PropTypes.string,
    }),
  }).isRequired,
};
