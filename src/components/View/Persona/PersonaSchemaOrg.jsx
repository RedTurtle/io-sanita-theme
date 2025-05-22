import { toPublicURL } from '@plone/volto/helpers';
import { SchemaOrg, SchemaOrgUtils } from 'io-sanita-theme/helpers';

const PersonaSchemaOrg = ({ content }) => {
  const siteTitle = SchemaOrgUtils.getSiteTitle();
  const siteUrl = toPublicURL('/');

  let name = [];
  let description = [];
  const role = content.incarico?.title
    ? content.incarico.title.split('»').pop().trim()
    : null;

  //name
  if (content.titolo_persona) {
    name.push(content.titolo_persona);
  }
  name.push(content.title);
  //description

  if (content.sottotitolo) {
    description.push(content.sottotitolo);
  }

  if (content.description) {
    description.push(content.description);
  }

  let schemaOrg = {
    '@type': 'Person',
    name: name.join(' '),
    url: toPublicURL(content['@id']),
    affiliation: {
      '@type': 'Organization',
      name: siteTitle,
      url: siteUrl,
    },
  };

  if (role) {
    schemaOrg.jobTitle = role;
  }

  if (description.length > 0) {
    schemaOrg.description = description.join('. ');
  }

  if (content.image?.scales?.large?.download) {
    schemaOrg.image = toPublicURL(content.image.scales.large.download);
  }

  return <SchemaOrg content={content} schema={schemaOrg} />;
};

export default PersonaSchemaOrg;
