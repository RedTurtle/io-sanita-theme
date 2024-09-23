import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';
import { BackReferences } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  avvisi_e_notizie: {
    id: 'uo_avvisi_e_notizie',
    defaultMessage: 'Avvisi e notizie',
  },
});

const UONotizie = ({ content }) => {
  const intl = useIntl();

  return (
    <BackReferences
      type="News Item"
      content={content}
      id={'notizie_correlate'}
      title={intl.formatMessage(messages.avvisi_e_notizie)}
    />
  );
};

UONotizie.propTypes = {
  content: PropTypes.object.isRequired,
};

export default UONotizie;
