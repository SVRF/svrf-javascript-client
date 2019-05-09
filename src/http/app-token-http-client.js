/**
 * MakeAuthenticatedRequests modifies the authApi, adding a method to fetch the authentication headers
 * for this client.
 * @param {Object} authApi - HTTP Client to communicate with the API
 * @param {TokenService} tokenService - Service which provides methods for token storage
 * @returns {Object} - A modified HTTP client
 */
export default function MakeAuthenticatedRequests(authApi, tokenService) {
  const authenticatedAPIClient = async function(...args) {
    await authApi.authenticate();
    return authApi.httpClient(...args);
  }

  // eslint-disable-next-line no-param-reassign 
  authenticatedAPIClient._headers = () => ({'x-app-token': tokenService.getAppToken()});
  return authenticatedAPIClient;
}
