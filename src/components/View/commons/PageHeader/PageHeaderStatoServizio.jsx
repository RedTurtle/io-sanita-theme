import { BadgeStatusServizio } from 'io-sanita-theme/components/View/Servizio';

const PageHeaderServizio = ({ content }) => {
  return content['@type'] === 'Servizio' ? (
    <BadgeStatusServizio item={content} wrapperClassName="mb-3" />
  ) : null;
};

export default PageHeaderServizio;
