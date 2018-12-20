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

export function postToToneAnalyzer(endpoint: String, tweetsArray: Array): Promise {
  let data = '';
  let postToToneAnalyzerAux = new Promise( (resolve, reject) => {
    for (var i = 0; i < tweetsArray.length; i++) {
      data = data + ' ' + tweetsArray[i].text;
    }
    resolve(data);
  });

  return new Promise( (resolve, reject) => {
    postToToneAnalyzerAux.then(data => {
      console.log(data);
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json; charset=utf-8'
        },
        body: JSON.stringify({data: data})
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(analysis => {
        console.log(analysis);
        resolve(analysis);
      })
    });
  });
}
