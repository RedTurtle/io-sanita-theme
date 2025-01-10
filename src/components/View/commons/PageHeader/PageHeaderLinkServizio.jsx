import { defineMessages, useIntl } from 'react-intl';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

const messages = defineMessages({
  prenota_online_deafult_label: {
    id: 'prenota_online_deafult_label',
    defaultMessage: 'Prenota online',
  },
});

const PageHeaderLinkServizio = ({ content }) => {
  const intl = useIntl();

  return content['@type'] === 'Servizio' && content?.prenota_online_link ? (
    <div className="mb-4">
      <UniversalLink
        className="btn btn-primary btn-lg"
        href={content.prenota_online_link}
        data-element="service-online-access"
      >
        {content?.prenota_online_label
          ? content.prenota_online_label
          : intl.formatMessage(messages.prenota_online_deafult_label)}
      </UniversalLink>
    </div>
  ) : null;
};

export default PageHeaderLinkServizio;
