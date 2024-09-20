import { Card, CardBody, CardTitle } from 'design-react-kit';
import { CardContatti, Icon } from 'io-sanita-theme/components';
import { PuntoDiContattoValue, RichTextSection } from 'io-sanita-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
  riferimento_telefonico_farmacia: {
    id: 'riferimento_telefonico_farmacia',
    defaultMessage: 'Telefono',
  },
  riferimento_telefonico_turno_farmacia: {
    id: 'riferimento_telefonico_turno_farmacia',
    defaultMessage: 'Telefono turno',
  },
});

const FarmaciaContacts = ({ content }) => {
  const intl = useIntl();

  return content?.telefono || content?.telefono_turno ? (
    <RichTextSection
      tag_id="contatti"
      title={intl.formatMessage(messages.contatti)}
    >
      <CardContatti
        item={{
          title: content.title,
          contatti: [
            {
              tipo: 'telefono',
              tipo_label: intl.formatMessage(
                messages.riferimento_telefonico_farmacia,
              ),
              valore: content.telefono,
            },
            {
              tipo: 'telefono',
              tipo_label: intl.formatMessage(
                messages.riferimento_telefonico_turno_farmacia,
              ),
              valore: content.telefono_turno,
            },
          ],
        }}
      />
    </RichTextSection>
  ) : (
    <></>
  );
};

export default FarmaciaContacts;
