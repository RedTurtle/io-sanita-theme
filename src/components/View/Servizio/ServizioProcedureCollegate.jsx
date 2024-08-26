import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {richTextHasContent, RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  procedure_collegate: {
    id: 'servizio_procedure_collegate',
    defaultMessage: "Procedure collegate all'esito",
  },
});

const ServizioProcedureCollegate = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.procedure_collegate_esito) ? (
    <RichTextSection
      tag_id="text-body"
      title={intl.formatMessage(messages.procedure_collegate)}
      show_title={true}
      data={content.procedure_collegate_esito}
    >
    </RichTextSection>
  ) : (
    <></>
  );
};

ServizioProcedureCollegate.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ServizioProcedureCollegate;
