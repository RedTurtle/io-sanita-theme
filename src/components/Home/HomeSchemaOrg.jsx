import { useIntl } from 'react-intl';
import { toPublicURL } from '@plone/volto/helpers';
import { useSelector } from 'react-redux';
import { SiteProperty } from 'volto-site-settings';
import { SchemaOrg, getSiteProperty } from 'io-sanita-theme/helpers';

const HomeSchemaOrg = ({ content }) => {
  const intl = useIntl();
  const socialSettings = useSelector((state) => state.socialSettings?.results);

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

  let schemaOrg = null;
  if (content?.['@type'] == 'Plone Site' || content?.['@type'] == 'LRF') {
    let socialLinks = null;
    if (socialSettings && socialSettings?.length > 0) {
      socialLinks = socialSettings.map((item) => item.url);
    }

    schemaOrg = {
      '@graph': [
        {
          '@type': 'WebSite',
          url: toPublicURL(content['@id']),
          name: name,
          alternateName: content?.title || null,
          description: content?.description || null,
          potentialAction: {
            '@type': 'SearchAction',
            target: toPublicURL(content['@id']) + '/search',
          },
        },
        {
          '@type': 'MedicalOrganization',
          name: name,
          alternateName: content?.title || null,
          description: description,
          url: toPublicURL(content['@id']),
          sameAs: socialLinks,
        },
      ],
    };
  }

  return schemaOrg ? <SchemaOrg schema={schemaOrg} /> : <></>;
};

export default HomeSchemaOrg;
