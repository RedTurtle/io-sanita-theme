export const GET_IO_SANITA_SETTINGS = 'GET_IO_SANITA_SETTINGS';

export function getIoSanitaSettings() {
  return {
    type: GET_IO_SANITA_SETTINGS,
    request: {
      op: 'get',
      path: '/@iosanita-settings-data',
    },
  };
}
