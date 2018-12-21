
export const LOAD_TEST = 'LOAD_TEST';
export const TEST_LOADED = 'TEST_LOADED';
export const LOAD_USERS = 'LOAD_USERS';
export const USERS_LOADED = 'USERS_LOADED';

export const ANALYSIS_SAVED = 'ANALYSIS_SAVED';
export const SAVE_ANALYSIS = 'SAVE_ANALYSIS';

export const TWEETS_SAVED = 'TWEETS_SAVED';
export const SAVE_TWEETS = 'SAVE_TWEETS';

export const LOAD_USER = 'LOAD_USER';
export const USER_LOADED = 'USER_LOADED';

export const LOAD_ANALYSIS = 'LOAD_ANALYSIS';
export const ANALYSIS_LOADED = 'ANALYSIS_LOADED';

export const SUBMIT_SEARCH_TERM = 'SUBMIT_SEARCH_TERM';
export const SUBMIT_STREAM_TERM = 'SUBMIT_STREAM_TERM';
export const SEARCH_TERM_SUBMITTED = 'SEARCH_TERM_SUBMITTED';
export const STREAM_TERM_SUBMITTED = 'STREAM_TERM_SUBMITTED';

export const LOAD_STREAM_TWEETS = 'LOAD_STREAM_TWEETS';
export const STREAM_TWEETS_LOADED = 'STREAM_TWEETS_LOADED';
export const LOAD_SEARCH_TWEETS = 'LOAD_SEARCH_TWEETS';
export const SEARCH_TWEETS_LOADED = 'SEARCH_TWEETS_LOADED';
export const CLEAR_SEARCH_TWEETS = 'CLEAR_SEARCH_TWEETS';
export const SEARCH_TWEETS_CLEARED = 'SEARCH_TWEETS_CLEARED';
export const CLEAR_STREAM_TWEETS = 'CLEAR_STREAM_TWEETS';
export const STREAM_TWEETS_CLEARED = 'STREAM_TWEETS_CLEARED';

export function loadTestAction(): Object {
  return {
    type: LOAD_TEST
  }
}

export function loadUsersAction(): Object {
  return {
    type: LOAD_USERS
  }
}

export function loadUserAction(): Object {
  return {
    type: LOAD_USER
  }
}

export function loadStreamTweetsAction(): Object {
  return {
    type: LOAD_STREAM_TWEETS
  }
}

export function loadSearchTweetsAction(): Object {
  return {
    type: LOAD_SEARCH_TWEETS
  }
}

export function clearSearchTweetsAction(): Object {
  return {
    type: CLEAR_SEARCH_TWEETS
  }
}

export function clearStreamTweetsAction(): Object {
  return {
    type: CLEAR_STREAM_TWEETS
  }
}

export function submitSearchTweetAction(term: String): Object {
  return {
    term: term,
    type: SUBMIT_SEARCH_TERM
  }
}

export function submitStreamTweetAction(term: String): Object {
  return {
    term: term,
    type: SUBMIT_STREAM_TERM
  }
}

export function loadAnalysisAction(tweetArray: Array): Object {
  return {
    tweetArray: tweetArray,
    type: LOAD_ANALYSIS
  }
}

export function saveTweetsAction(tweetArray: Array): Object {
  return {
    tweetArray: tweetArray,
    type: SAVE_TWEETS
  }
}

export function saveTweetsAnalysisAction(tweetArray: Array): Object {
  return {
    tweetArray: tweetArray,
    type: SAVE_ANALYSIS
  }
}