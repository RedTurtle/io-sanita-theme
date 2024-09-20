import { Card, CardBody, CardTitle } from 'design-react-kit';
import { Icon } from 'io-sanita-theme/components';
import { PuntoDiContattoValue } from 'io-sanita-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';

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
      {/* CONTATTI FARMACIA */}
      {(content?.telefono || content?.telefono_turno) && (
        <Card
          className="card card-teaser rounded shadow mt-3 mb-3"
          noWrapper={true}
          tag="div"
        >
          <CardTitle tag="h5">
            <Icon icon="it-telephone" padding={true} />
          </CardTitle>
          <CardBody tag="div" className={'card-body pr-3'}>
            {content.telefono && (
              <p className="card-text mt-3">
                {`${intl.formatMessage(messages.riferimento_telefonico_farmacia)}: `}
                <PuntoDiContattoValue
                  value={{ tipo: 'telefono', valore: content.telefono }}
                />
              </p>
            )}
            {content.telefono_turno && (
              <p className="card-text mt-3">
                {`${intl.formatMessage(
                  messages.riferimento_telefonico_turno_farmacia,
                )}: `}
                <PuntoDiContattoValue
                  value={{ tipo: 'telefono', valore: content.telefono_turno }}
                />
              </p>
            )}
          </CardBody>
        </Card>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

export default FarmaciaContacts;
