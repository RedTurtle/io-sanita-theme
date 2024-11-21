import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { CardSimple } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { PuntoDiContattoValue } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  contatti: {
    id: 'pdc_contatti',
    defaultMessage: 'Contatti',
  },
  email: {
    id: 'email',
    defaultMessage: 'Email',
  },
  telefono: {
    id: 'telefono',
    defaultMessage: 'Telefono',
  },
  url: {
    id: 'sito web',
    defaultMessage: 'Sito web',
  },
  pec: {
    id: 'pec',
    defaultMessage: 'PEC',
  },
  whatsapp: {
    id: 'whatsapp',
    defaultMessage: 'Whatsapp',
  },
  telegram: {
    id: 'telegram',
    defaultMessage: 'Telegram',
  },
  skype: {
    id: 'skype',
    defaultMessage: 'Skype',
  },
  linkedin: {
    id: 'linkedin',
    defaultMessage: 'LinkedIn',
  },
  twitter: {
    id: 'twitter',
    defaultMessage: 'X',
  },
});

const PuntoDiContattoContatti = ({ content }) => {
  const intl = useIntl();

  return content?.contatti?.length > 0 ? (
    <RichTextSection
      tag_id="contatti"
      title={intl.formatMessage(messages.contatti)}
    >
      {content?.contatti?.map((pdc, i) => (
        <div key={i}>
          <div className="mt-2 d-flex">
            <h3 className="h6 text-capitalize">
              {messages[pdc?.tipo] === undefined
                ? pdc?.tipo
                : intl.formatMessage(messages[pdc.tipo.toLowerCase()])}
              :
            </h3>
            <span className="ms-1">
              <PuntoDiContattoValue value={pdc} />
            </span>
          </div>
          {pdc?.descrizione && <p className="mb-4">{pdc.descrizione}</p>}
        </div>
      ))}
    </RichTextSection>
  ) : null;
};

PuntoDiContattoContatti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PuntoDiContattoContatti;
