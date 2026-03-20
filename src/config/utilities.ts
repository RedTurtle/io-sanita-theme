import type { ConfigType } from '@plone/registry';
import { viewDate } from 'io-sanita-theme/helpers';

export default function applyUtilitiesConfig(config: ConfigType) {
  config.registerUtility({
    name: 'viewDate',
    type: 'italia-viewDate',
    method: viewDate,
  });

  return config;
}

declare module '@plone/types' {
  interface UtilityTypeMap {
    'italia-viewDate': typeof viewDate;
  }
}
