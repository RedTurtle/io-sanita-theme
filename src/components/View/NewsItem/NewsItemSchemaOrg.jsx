import { useIntl } from 'react-intl';
import { toPublicURL } from '@plone/volto/helpers';
import { SiteProperty } from 'volto-site-settings';
import {
  getSiteProperty,
  SchemaOrgUtils,
  richTextHasContent,
  SchemaOrg,
} from 'io-sanita-theme/helpers';

const NewsItemSchemaOrg = ({ content }) => {
  const intl = useIntl();
  console.log('content', content);

  let siteTitle = SiteProperty({
    property: 'site_title',
    getValue: true,
    defaultTitle: getSiteProperty('siteTitle', intl.locale),
  });

  siteTitle = siteTitle?.replaceAll('\\n', ' - ') ?? '';

  let schemaOrg = {
    '@type': 'NewsArticle',
    headline: content.title,
    url: toPublicURL(content['@id']),
  };

  let description = [];

  if (content.description) {
    description.push(content.description);
  }

  if (richTextHasContent(content.descrizione_estesa)) {
    description.push(
      SchemaOrgUtils.fieldDataToPlainText(content.descrizione_estesa),
    );
  }

  if (description.length > 0) {
    schemaOrg.description = description.join('. ');
  }

  if (Array.isArray(content.uo_correlata) && content.uo_correlata.length > 0) {
    schemaOrg.author = content.uo_correlata.map((e) => {
      const author = {
        '@type': 'Organization',
        name: e.title,
      };

      const address = {
        '@type': 'PostalAddress',
      };

      if (e.street) {
        address.streetAddress = e.street;
      }
      if (e.city) {
        address.addressLocality = e.city;
      }
      if (e.zip_code) {
        address.postalCode = e.zip_code;
      }
      if (e.provincia) {
        address.addressRegion = e.provincia;
      }

      if (
        address.streetAddress ||
        address.addressLocality ||
        address.postalCode ||
        address.addressRegion
      ) {
        address.addressCountry = 'IT';
        author.address = address;
      }

      return author;
    });
  }

  if (intl.locale) {
    schemaOrg.inLanguage = intl.locale;
  }

  if (siteTitle.length > 0) {
    schemaOrg.publisher = {
      '@type': 'Organization',
      name: siteTitle,
    };
  }

  if (content.effective) {
    schemaOrg.datePublished = content.effective;
  }

  if (content.modified) {
    schemaOrg.dateModified = content.modified;
  }

  return <SchemaOrg content={content} schema={schemaOrg} />;
};

export default NewsItemSchemaOrg;
