import { toPublicURL } from '@plone/volto/helpers';
import {
  SchemaOrgUtils,
  richTextHasContent,
  SchemaOrg,
} from 'io-sanita-theme/helpers';

const NewsItemSchemaOrg = ({ content }) => {
  let siteTitle = SchemaOrgUtils.getSiteTitle();

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

  if (content.uo_correlata?.length > 0) {
    schemaOrg.author = content.uo_correlata.map((e) => {
      const author = {
        '@type': 'Organization',
        name: e.title,
      };

      return author;
    });
  }

  if (content.language) {
    schemaOrg.inLanguage = content.language.token;
  }

  schemaOrg.publisher = {
    '@type': 'Organization',
    name: siteTitle,
  };

  if (content.effective) {
    schemaOrg.datePublished = content.effective;
  }

  if (content.modified) {
    schemaOrg.dateModified = content.modified;
  }

  return <SchemaOrg content={content} schema={schemaOrg} />;
};

export default NewsItemSchemaOrg;
