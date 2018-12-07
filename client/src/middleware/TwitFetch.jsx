
// Endpoint
import { UsersEndpoint, TwitterEndpint, WatsonEndpoint, StandardEndpoint } from '../utils/Constants';

export function fetchUsers(): Promise {
  const endpoint: string = UsersEndpoint;
  return fetch(endpoint).then((response) => response.json().then((users) => users));
}
