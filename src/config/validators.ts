import { ConfigType } from '@plone/registry';
import { validateTempiScadenze } from 'io-sanita-theme/helpers/FormValidation/DataGrid';

export const registerIOSanitaValidators = (config: ConfigType) => {
  //   esempio
  // config.registerUtility({
  //     name: 'maxLength',
  //     type: 'validator',
  //     dependencies: { fieldName: 'nome_del_campo', oppure  fieldType: 'tipo di campo' },
  //     method: ({ value, formatMessage }) => {
  //   const isValid = value.every((val, i) => val.milestone);
  //   return !isValid
  //     ? formatMessage(messages.field_validation_error)
  //     : null;
  // }
  //   });
};
