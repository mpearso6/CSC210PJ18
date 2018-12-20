export function saveTweets(endpoint: String, term: String): Promise {
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
