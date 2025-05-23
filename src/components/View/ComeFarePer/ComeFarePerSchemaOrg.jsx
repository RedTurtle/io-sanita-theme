import { toPublicURL } from '@plone/volto/helpers';
import { useLoadSteps } from 'io-sanita-theme/components/View/ComeFarePer/Steps/helpers';
import {
  SchemaOrg,
  SchemaOrgUtils,
  richTextHasContent,
} from 'io-sanita-theme/helpers';

const ComeFarePerSchemaOrg = ({ content }) => {
  let description = [];
  let _yield = [];
  let steps = content?.items?.filter((item) => item['@type'] === 'Step') ?? [];
  const { loadedSteps } = useLoadSteps(steps);

  //description
  if (content.description) {
    description.push(content.description);
  }
  if (content.sottotitolo) {
    description.push(content.sottotitolo);
  }

  let schemaOrg = {
    '@type': 'HowTo',
    url: toPublicURL(content['@id']),
  };

  if (description.length > 0) {
    schemaOrg.description = description.join('. ');
  }

  //yield -- The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles.
  if (richTextHasContent(content.panoramica)) {
    _yield.push(SchemaOrgUtils.fieldDataToPlainText(content.panoramica));
  }
  if (_yield.length > 0) {
    schemaOrg.yield = _yield.join('. ');
  }

  if (richTextHasContent(content.come_fare)) {
    schemaOrg.conditionsOfAccess = SchemaOrgUtils.fieldDataToPlainText(
      content.come_fare,
    );
  }
  if (richTextHasContent(content.a_chi_si_rivolge)) {
    schemaOrg.audience = SchemaOrgUtils.fieldDataToPlainText(
      content.a_chi_si_rivolge,
    );
  }

  if (steps.length > 0 && Object.keys(loadedSteps).length === steps.length) {
    schemaOrg.step = Object.keys(loadedSteps).map((id, index) => {
      const step = loadedSteps[id];
      const stepSchemaOrg = {
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title ?? 'Step ' + (index + 1),
      };
      if (richTextHasContent(step.testo)) {
        stepSchemaOrg.text = SchemaOrgUtils.fieldDataToPlainText(step.testo);
      }
      return stepSchemaOrg;
    });
  }

  return <SchemaOrg content={content} schema={schemaOrg} />;
};

export default ComeFarePerSchemaOrg;
