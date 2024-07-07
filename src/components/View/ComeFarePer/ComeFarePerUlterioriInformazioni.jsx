import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { HelpBox } from 'io-sanita-theme/components/View/commons';
import {
  richTextHasContent,
  RichTextSection,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  ulteriori_informazioni: {
    id: 'come_fare_per_ulteriori_informazioni',
    defaultMessage: 'Ulteriori informazioni',
  },
  parliamo_di: {
    id: 'come_fare_per_parliamo_di',
    defaultMessage: 'Parliamo di',
  },
});

const ComeFarePerUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();
  const view = richTextHasContent(content?.ulteriori_informazioni); // TO DO: || Parliamo Di

  return view ? (
    <RichTextSection
      tag_id="ulteriori_informazioni"
      title={intl.formatMessage(messages.ulteriori_informazioni)}
    >
      {richTextHasContent(content?.ulteriori_informazioni) && (
        <HelpBox text={content?.ulteriori_informazioni} />
      )}

      {/* TO DO:
        Da fare la vista per la tassonomia argomenti,
        la sezione utilizza le chips per restituire l'argomento con la quale è stato taggato il CT,
        aggiungere anche il titoletto {intl.formatMessage(messages.parliamo_di)}
      */}
    </RichTextSection>
  ) : (
    <></>
  );
};

export default ComeFarePerUlterioriInformazioni;

ComeFarePerUlterioriInformazioni.propTypes = {
  content: PropTypes.shape({
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};
