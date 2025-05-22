import { toPublicURL } from '@plone/volto/helpers';
import {
  SchemaOrg,
  SchemaOrgUtils,
  richTextHasContent,
} from 'io-sanita-theme/helpers';

const EventoSchemaOrg = ({ content }) => {
  let schemaOrg = {
    '@type': 'Event',
    name: content?.title,
    startDate: content?.start,
    endDate: content?.end,
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

  // se l'evento è online
  if (richTextHasContent(content.webinar)) {
    schemaOrg.eventAttendanceMode = SchemaOrgUtils.fieldDataToPlainText(
      content.webinar,
    );
  }
  // se l'evento è fisico priorità all'indirizzo scritto direttamente nel CT, in alternativa la prima struttura associata
  if (content.street && content.zip_code && content.city) {
    schemaOrg.location = {
      '@type': 'Place',
      name: content?.nome_sede || 'Sede',
      address: {
        '@type': 'PostalAddress',
        streetAddress: content.street,
        addressLocality: content.city,
        postalCode: content.zip_code,
        addressCountry: 'IT',
      },
    };
  } else if (content.struttura_correlata?.length > 0) {
    schemaOrg.location = {
      '@type': 'Place',
      name: content.struttura_correlata[0].title,
      address: {
        '@type': 'PostalAddress',
        // questi sono campi obbligatori per la struttura
        streetAddress: content.struttura_correlata[0].street,
        addressLocality: content.struttura_correlata[0].city,
        postalCode: content.struttura_correlata[0].zip_code,
        addressCountry: 'IT',
      },
    };
  }

  // organizzatore interno
  if (content.organizzato_da_interno?.length > 0) {
    schemaOrg.organizer = {
      '@type': 'Organization',
      name: content.organizzato_da_interno[0].title,
      url: toPublicURL(content.organizzato_da_interno[0]['@id']),
    };
  }

  // contributo esterno
  if (richTextHasContent(content.organizzato_da_esterno)) {
    schemaOrg.contributor = {
      '@type': 'Organization',
      name: SchemaOrgUtils.fieldDataToPlainText(content.organizzato_da_esterno),
    };
  }

  //chi partecipa
  let attendeeList = [];
  if (richTextHasContent(content.parteciperanno)) {
    attendeeList.push(
      SchemaOrgUtils.fieldDataToPlainText(content.parteciperanno),
    );
  }
  if (content.persona_correlata?.length > 0) {
    attendeeList.push(content.persona_correlata.map((item) => item.title));
  }
  if (attendeeList.length > 0) {
    schemaOrg.attendee = {
      '@type': 'Person',
      name: attendeeList.join(', '),
    };
  }

  // a chi si rivolge
  let audienceList = [];
  if (richTextHasContent(content.a_chi_si_rivolge)) {
    audienceList.push(
      SchemaOrgUtils.fieldDataToPlainText(content.a_chi_si_rivolge),
    );
  }
  if (content?.a_chi_si_rivolge_tassonomia?.length > 0) {
    audienceList.push(
      content.a_chi_si_rivolge_tassonomia.map((item) => item.title),
    );
  }
  if (audienceList.length > 0) {
    schemaOrg.audience = {
      '@type': 'Audience',
      audienceType: audienceList.join(', '),
    };
  }

  // costi o biglietti
  if (richTextHasContent(content.costo)) {
    schemaOrg.offers = {
      '@type': 'Offer',
      price: SchemaOrgUtils.fieldDataToPlainText(content.costo),
      priceCurrency: 'EUR',
    };
  }

  // sponsor
  if (richTextHasContent(content.patrocinato_da)) {
    schemaOrg.sponsor = {
      '@type': 'Organization',
      name: SchemaOrgUtils.fieldDataToPlainText(content.patrocinato_da),
    };
  }

  return <SchemaOrg content={content} schema={schemaOrg} />;
};

export default EventoSchemaOrg;
