import { useIntl } from 'react-intl';
import { Helmet, toPublicURL, isInternalURL } from '@plone/volto/helpers';
import { SiteProperty } from 'volto-site-settings';
import { getSiteProperty } from 'io-sanita-theme/helpers';
import { richTextHasContent } from 'io-sanita-theme/helpers';

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

const StrutturaMetatag = ({ content }) => {
  const intl = useIntl();
  let siteTitle = SiteProperty({
    property: 'site_title',
    getValue: true,
    defaultTitle: getSiteProperty('siteTitle', intl.locale),
  });
  siteTitle = siteTitle?.replaceAll('\\n', ' - ') ?? '';

  const typeStructure = content?.tipologia_struttura?.[0]?.title || '';
  let schemaType = 'MedicalOrganization';
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    additionalType: typeStructure
      ? `https://schema.org/${typeStructure.replace(/\s+/g, '')}`
      : undefined,
    name: content.title,
    description: richTextHasContent(content.descrizione)
      ? fieldDataToPlainText(content.descrizione)
      : '',
    address: content.indirizzo?.[0]
      ? {
          '@type': 'PostalAddress',
          streetAddress: content.indirizzo[0].street,
          postalCode: content.indirizzo[0].zip_code,
          addressLocality: content.indirizzo[0].city,
        }
      : undefined,
    telephone: content.telefono || undefined,
    email: content.email || undefined,
    url: toPublicURL(content['@id']),
    geo:
      content.indirizzo?.[0]?.latitude && content.indirizzo?.[0]?.longitude
        ? {
            '@type': 'GeoCoordinates',
            latitude: content.indirizzo[0].latitude,
            longitude: content.indirizzo[0].longitude,
          }
        : undefined,
  };

  return (
    <Helmet>
      <script type="application/ld+json" data-element="metatag">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};

export default StrutturaMetatag;
