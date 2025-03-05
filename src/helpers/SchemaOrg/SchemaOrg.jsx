import { useIntl } from 'react-intl';
import { Helmet } from '@plone/volto/helpers';
import { SiteProperty } from 'volto-site-settings';
import { getSiteProperty } from 'io-sanita-theme/helpers';

const fieldDataToPlainText = (field) => {
  return field.blocks_layout.items.reduce((accumulator, item, index) => {
    if (field.blocks[item]['@type'] === 'text') {
      if (index > 0) accumulator += ' ';
      accumulator += field.blocks[item].text?.blocks[0].text ?? '';
    }
    if (field.blocks[item]['@type'] === 'slate') {
      if (index > 0) accumulator += ' ';
      accumulator += field.blocks[item].plaintext ?? '';
    }
    return accumulator;
  }, '');
};

const getSiteTitle = () => {
  const intl = useIntl();
  let siteTitle = SiteProperty({
    property: 'site_title',
    getValue: true,
    defaultTitle: getSiteProperty('siteTitle', intl.locale),
  });
  return siteTitle?.replaceAll('\\n', ' - ') ?? '';
};

const SchemaOrg = ({ content, schema = {} }) => {
  const contentSchema = content ? { name: content.title } : {};
  let schemaOrg = {
    '@context': 'https://schema.org',
    ...contentSchema,
    ...schema,
  };

  return (
    <Helmet>
      <script type="application/ld+json" data-element="metatag">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;
export const SchemaOrgUtils = {
  getSiteTitle,
  fieldDataToPlainText,
};
