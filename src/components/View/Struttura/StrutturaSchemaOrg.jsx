import { toPublicURL } from '@plone/volto/helpers';
import {
  SchemaOrgUtils,
  richTextHasContent,
  SchemaOrg,
} from 'io-sanita-theme/helpers';

const StrutturaSchemaOrg = ({ content }) => {
  let siteTitle = SchemaOrgUtils.getSiteTitle();

  let schemaOrg = {
    '@type': 'MedicalOrganization',
    url: toPublicURL(content['@id']),
    name: siteTitle,
    additionalType: content.tipologia_struttura?.title,
    address: {
      '@type': 'PostalAddress',
      streetAddress: content.street,
      postalCode: content.zip_code,
      addressLocality: content.city,
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

  if (content.pdc_correlato?.length > 0) {
    schemaOrg.contactPoint = content.pdc_correlato.map((pdc) => {
      const contact = {
        '@type': 'ContactPoint',
        contactType: pdc.type_title,
        name: pdc.title,
      };

      pdc.contatti?.forEach((c) => {
        if (c.tipo === 'email') {
          if (!contact.email) contact.email = c.valore;
          else if (typeof contact.email === 'string') {
            contact.email = [contact.email, c.valore];
          } else {
            contact.email.push(c.valore);
          }
        } else if (c.tipo === 'telefono') {
          contact.telephone = c.valore;
        } else if (c.tipo === 'url') {
          contact.url = c.valore.startsWith('http')
            ? c.valore
            : `https://${c.valore}`;
        }
      });

      return contact;
    });
  }

  return <SchemaOrg content={content} schema={schemaOrg} />;
};

export default StrutturaSchemaOrg;
