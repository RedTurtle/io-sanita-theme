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
            color={content.servizio_attivo ? 'primary' : 'danger'}
            data-element="service-status"
          >
            <ChipLabel>
              {content.servizio_attivo
                ? intl.formatMessage(messages.service_on)
                : intl.formatMessage(messages.service_off)}
            </ChipLabel>
          </Chip>
        </li>
      </ul>
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
