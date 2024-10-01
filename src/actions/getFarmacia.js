export const GET_FARMACIA = 'GET_FARMACIA';

export function getFarmacia(data = {}, page = 0) {
  return {
    type: GET_FARMACIA,
    request: {
      op: 'get',
      path: `/@searchfarmacie`,
      data: {},
    },
  };
}
