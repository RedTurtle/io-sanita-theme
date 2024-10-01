import { Row, Col } from 'design-react-kit';
import { CardContatti } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  contatti: {
    id: 'farmacia_contatti',
    defaultMessage: 'Contatti',
  },
  riferimento_telefonico: {
    id: 'farmacia_riferimento_telefonico',
    defaultMessage: 'Telefono',
  },
  riferimento_telefonico_turno: {
    id: 'farmacia_riferimento_telefonico_turno',
    defaultMessage: 'Telefono turno',
  },
});

const FarmaciaContatti = ({ content }) => {
  const intl = useIntl();

  return content?.telefono || content?.telefono_turno ? (
    <RichTextSection
      tag_id="contatti"
      title={intl.formatMessage(messages.contatti)}
    >
      <Row>
        <Col lg={6} className="py-lg-2">
          <CardContatti
            show_title
            item={{
              title: content.title,
              contatti: [
                {
                  tipo: 'telefono',
                  tipo_label: intl.formatMessage(
                    messages.riferimento_telefonico,
                  ),
                  valore: content.telefono,
                },
                {
                  tipo: 'telefono',
                  tipo_label: intl.formatMessage(
                    messages.riferimento_telefonico_turno,
                  ),
                  valore: content.telefono_turno,
                },
              ],
            }}
          />
        </Col>
      </Row>
    </RichTextSection>
  ) : (
    <></>
  );
};

export default FarmaciaContatti;
