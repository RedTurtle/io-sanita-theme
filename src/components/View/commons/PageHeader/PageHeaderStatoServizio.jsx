import { defineMessages, useIntl } from 'react-intl';
import { Chip, ChipLabel } from 'design-react-kit';
import { richTextHasContent, RichText } from 'io-sanita-theme/helpers';

const PageHeaderServizio = ({ content }) => {
  const intl = useIntl();

  return content['@type'] === 'Servizio' ? (
    <>
      <ul className="chip-wrapper list-unstyled my-4">
        <li>
          <Chip
            tag="div"
            simple
            color={content.stato_servizio ? 'danger' : 'primary'}
            data-element="service-status"
          >
            <ChipLabel>
              {content.stato_servizio
                ? intl.formatMessage(messages.service_off)
                : intl.formatMessage(messages.service_on)}
            </ChipLabel>
          </Chip>
        </li>
      </ul>
      {content.stato_servizio &&
        richTextHasContent(content.motivo_stato_servizio) && (
          <RichText data={content.motivo_stato_servizio} serif={false} />
        )}
    </>
  ) : null;
};

export default PageHeaderServizio;

const messages = defineMessages({
  service_on: {
    id: 'service_on',
    defaultMessage: 'Servizio attivo',
  },
  service_off: {
    id: 'service_off',
    defaultMessage: 'Servizio non attivo',
  },
});
