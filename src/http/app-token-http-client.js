/**
 * AttachHeaderService modifies the httpClient, adding a method to fetch the authentication headers
 * for this client.
 * @param {Object} httpClient - HTTP Client to communicate with the API
 * @param {TokenService} tokenService - Service which provides methods for token storage
 * @returns {Object} - A modified HTTP client
 */
export default function AttachHeaderService(httpClient, tokenService) {
  // eslint-disable-next-line no-param-reassign
  httpClient._headers = () => ({'x-app-token': tokenService.getAppToken()});

  return httpClient;
}
