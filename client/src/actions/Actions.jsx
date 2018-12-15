
export const LOAD_TEST = 'LOAD_TEST';
export const TEST_LOADED = 'TEST_LOADED';
export const LOAD_USERS = 'LOAD_USERS';
export const USERS_LOADED = 'USERS_LOADED';
export const LOAD_TWEET_STREAM = 'LOAD_TWEET_STREAM';
export const TWEET_STREAM_LOADED = 'TWEET_STREAM_LOADED';
export const LOAD_TWEETS = 'LOAD_TWEETS';
export const TWEETS_LOADED = 'TWEETS_LOADED';

export function loadTestAction(): Object {
  return {
    type: LOAD_TEST
  }
}

export function loadUsersAction(): Object {
  //console.log('this fired');
  return {
    type: LOAD_USERS
  }
}

export function loadStreamTweetAction(): Object {
  //console.log('this fired');
  return {
    type: LOAD_TWEET_STREAM
  }
}

export function loadTweetsAction(): Object {
  console.log('this fired');
  return {
    type: LOAD_TWEETS
  }
}
