import { useIntl } from 'react-intl';
import { Helmet, toPublicURL } from '@plone/volto/helpers';
import { SiteProperty } from 'volto-site-settings';
import { getSiteProperty } from 'io-sanita-theme/helpers';

const NewsItemMetadati = ({ content }) => {
  const intl = useIntl();
  let siteTitle = SiteProperty({
    property: 'site_title',
    getValue: true,
    defaultTitle: getSiteProperty('siteTitle', intl.locale),
  });
  siteTitle = siteTitle?.replaceAll('\\n', ' - ') ?? '';

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: content.title,
    description: content.description || '',
    image: content.image ? [toPublicURL(content.image.download)] : [],
    author: {
      '@type': 'Organization',
      name: content.creators?.[0] || siteTitle,
    },
    publisher: {
      '@type': 'Organization',
      name: siteTitle,
    },
    datePublished: content.effective,
    dateModified: content.modified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': toPublicURL(content['@id']),
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json" data-element="metatag">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};

export default NewsItemMetadati;
