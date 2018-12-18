
// Endpoint
import { UsersEndpoint, WatsonEndpoint, StandardEndpoint, TwitterEndpoint } from '../utils/Constants';

export function fetchUsers(): Promise {
  const endpoint: string = UsersEndpoint;
  return fetch(endpoint).then((response) => response.json().then((users) => users));
}

export function fetchSearchTweets(endpoint: String): Promise {
  return new Promise( (resolve, reject) => {
    fetch(endpoint)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((tweet) => {
        console.log(tweet);
        resolve(tweet);
      })
  });
}

export function fetchStreamTweets(endpoint: String): Promise {
  return new Promise( (resolve, reject) => {
    fetch(endpoint)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((tweet) => {
        console.log(tweet);
        resolve(tweet);
      })
  });
}

export function changeSearchTweetTerm(endpoint: String, term: String): Promise {
  return new Promise( (resolve, reject) => {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json; charset=utf-8'
      },
      body: JSON.stringify({term: term})
    }).then(resolve('resolved'))
  });
}

export function changeStreamTweetTerm(endpoint: String, term: Object): Promise {
  console.log(term);

  return new Promise( (resolve, reject) => {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json; charset=utf-8'
      },
      body: JSON.stringify({term: term})
    }).then(resolve('resolved'))
  });
}
