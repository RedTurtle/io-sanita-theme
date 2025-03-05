import { useIntl } from 'react-intl';
import { toPublicURL } from '@plone/volto/helpers';
import { SiteProperty } from 'volto-site-settings';
import { SchemaOrg, getSiteProperty } from 'io-sanita-theme/helpers';

const HomeSchemaOrg = ({ content }) => {
  const intl = useIntl();
  let schemaOrg = null;
  if (content['@type'] == 'Plone Site' || content['@type'] == 'LRF') {
    const name = SiteProperty({
      property: 'site_title',
      defaultValue: getSiteProperty('siteTitle', intl.locale),
      getValue: true,
    });
    const description = SiteProperty({
      property: 'site_subtitle',
      defaultValue: getSiteProperty('siteSubtitle', intl.locale),
      getValue: true,
    });

    schemaOrg = {
      '@type': 'MedicalOrganization',
      name: name,
      description: description,
      url: toPublicURL(content['@id']),
    };
  }
  return schemaOrg ? <SchemaOrg schema={schemaOrg} /> : <></>;
};

export default HomeSchemaOrg;
