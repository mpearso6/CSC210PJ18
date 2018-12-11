
// Endpoint
import { UsersEndpoint, TwitterEndpint, WatsonEndpoint, StandardEndpoint, TwitterEndpoint } from '../utils/Constants';

export function fetchUsers(): Promise {
  const endpoint: string = UsersEndpoint;
  return fetch(endpoint).then((response) => response.json().then((users) => users));
}

export function fetchUserTweet(): Promise {
  const endpoint: string = TwitterEndpoint;
  return
    fetch(endpoint)
      .then((response) => {
        console.log(response);
        response.json().then((tweet) => tweet)
      });
}
