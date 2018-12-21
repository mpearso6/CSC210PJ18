const uuidv1 = require('uuid/v1');

export function saveTweets(endpoint: String, tweetsArray: Array): Promise {
  let saveTweetsAux = new Promise( (resolve, reject) => {
    let UserID = tweetsArray[0].user.id;
    let TwitterParams = tweetsArray[0].created_at;
    let TweetsReturned = tweetsArray[0].text;
    resolve(UserID, TwitterParams, TweetsReturned);
  });

  return new Promise( (resolve, reject) => {
    saveTweetsAux.then((UserID, TwitterParams, TweetsReturned) => {
      //console.log(data);
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          UserID: UserID,
          TwitterParams: TwitterParams,
          TweetsReturned: TweetsReturned
        })
      }).then(response => {
        resolve('resolved');
      })
    });
  });
}

export function saveTweetsAnalysis(endpoint: String, tweetsArray: Array): Promise {
  let saveWatsonAnalysisAux = new Promise( (resolve, reject) => {
    let SavedTweetsID = uuidv1();
    let WatsonDocumentAnalysis = '';
    let WatsonSentenceAnalysis = '';
    for (var i = 0; i < tweetsArray.length; i++) {
      WatsonDocumentAnalysis = WatsonDocumentAnalysis + ' ' + tweetsArray[0].document_tone[i].tone_id;
      WatsonSentenceAnalysis = WatsonSentenceAnalysis + ' ' + tweetsArray[0].sentences_tone[i].text;
    }
    resolve(SavedTweetsID, WatsonDocumentAnalysis, WatsonSentenceAnalysis);
  });

  return new Promise( (resolve, reject) => {
    saveWatsonAnalysisAux.then((SavedTweetsID, WatsonDocumentAnalysis, WatsonSentenceAnalysis) => {
      //console.log(data);
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          SavedTweetsID: SavedTweetsID,
          WatsonDocumentAnalysis: WatsonDocumentAnalysis,
          WatsonSentenceAnalysis: WatsonSentenceAnalysis
        })
      }).then(response => {
        resolve('resolved');
      })
    });
  });
}
