import { UsersEndpoint, WatsonApiEndpoint, StandardEndpoint, TwitterApiEndpoint } from '../utils/Constants';

export function fetchAnalysis(endpoint: String): Promise {
  return new Promise( (resolve, reject) => {
    fetch(endpoint)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((analysis) => {
        console.log(analysis);
        resolve(analysis);
      })
  });
}
