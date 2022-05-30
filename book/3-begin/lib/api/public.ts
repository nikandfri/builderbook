import sendRequestAndGetResponse from '../sendRequestAndGetResponse.ts';

const BASE_PATH = '/api/v1/public';

// eslint-disable-next-line no-unused-vars
export const getUserApiMethod = (request) => {
  sendRequestAndGetResponse(`${BASE_PATH}/get-user`, {
    request,
    method: 'GET',
  });
};
