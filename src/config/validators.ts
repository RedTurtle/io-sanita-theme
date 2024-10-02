import { ConfigType } from '@plone/registry';
import { validateTempiScadenze } from 'io-sanita-theme/helpers/FormValidation/DataGrid';

export const registerIOSanitaValidators = (config: ConfigType) => {
  config.registerUtility({
    name: 'maxLength',
    type: 'validator',
    dependencies: { fieldName: 'timeline_tempi_scadenze' },
    method: validateTempiScadenze,
  });
};
