import { toPublicURL, isInternalURL } from '@plone/volto/helpers';
import { useIntl } from 'react-intl';
import { SiteProperty } from 'volto-site-settings';
import {
  SchemaOrg,
  SchemaOrgUtils,
  richTextHasContent,
  getSiteProperty,
} from 'io-sanita-theme/helpers';

const ServizioSchemaOrg = ({ content }) => {
  const intl = useIntl();

  let siteTitle = SiteProperty({
    property: 'site_title',
    getValue: true,
    defaultTitle: getSiteProperty('siteTitle', intl.locale),
  });

  const schemaOrg = {
    '@type': 'Service',
    name: content.title,
    brand: {
      '@type': 'Organization',
      name: siteTitle,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: richTextHasContent(content.copertura_geografica)
        ? SchemaOrgUtils.fieldDataToPlainText(content.copertura_geografica)
        : siteTitle,
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      name: 'Dove rivolgersi',
      availableLanguage: {
        '@type': 'Language',
        name: 'Italian',
        alternateName: 'it',
      },
    },
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

  if (content.tipologia_servizio?.title) {
    schemaOrg.serviceType = content.tipologia_servizio.title;
  }

  // a chi si rivolge
  if (richTextHasContent(content.a_chi_si_rivolge)) {
    schemaOrg.audience = {
      '@type': 'Audience',
      audienceType: SchemaOrgUtils.fieldDataToPlainText(
        content.a_chi_si_rivolge,
      ),
    };
  }

  if (content.prenota_online_link) {
    schemaOrg.availableChannel.serviceUrl = isInternalURL(
      content.prenota_online_link,
    )
      ? toPublicURL(content.prenota_online_link)
      : content.prenota_online_link;
  }

  if (content.struttura_correlata.length > 0) {
    schemaOrg.availableChannel.serviceLocation =
      content.struttura_correlata.map((struttura) => {
        return {
          '@type': 'Place',
          name: struttura.title,
          url: toPublicURL(struttura['@id']),
          address: {
            '@type': 'PostalAddress',
            streetAddress: struttura?.street || null,
            postalCode: struttura?.zip_code || null,
            addressLocality: struttura?.city || null,
          },
        };
      });
  }

  // di UO se ne possono selezionare soltanto una
  if (content.uo_correlata.length > 0) {
    schemaOrg.provider = {
      '@type': 'Place',
      name: content.uo_correlata[0].title,
      url: toPublicURL(content.uo_correlata[0]['@id']),
      address: {
        '@type': 'PostalAddress',
        streetAddress: content.uo_correlata[0]?.street || null,
        postalCode: content.uo_correlata[0]?.zip_code || null,
        addressLocality: content.uo_correlata[0]?.city || null,
      },
    };
  }

  // costi o biglietti
  if (richTextHasContent(content.costi)) {
    schemaOrg.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      itemListElement: [
        {
          name: SchemaOrgUtils.fieldDataToPlainText(content.costi),
        },
      ],
    };
  }

  return <SchemaOrg content={content} schema={schemaOrg} />;
};

export default ServizioSchemaOrg;
