import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { CardSimple } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
});

const StrutturaContatti = ({ content }) => {
  const intl = useIntl();

  return content?.pdc_correlato?.length > 0 ? (
    <RichTextSection
      tag_id="contatti"
      title={intl.formatMessage(messages.contatti)}
    >
      {/* Punto di contatto */}
      {content?.pdc_correlato.map((item, i) => (
        <CardSimple item={item} key={'contact_' + i} />
      ))}

    </RichTextSection>
  ) : null;
};

StrutturaContatti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default StrutturaContatti;
