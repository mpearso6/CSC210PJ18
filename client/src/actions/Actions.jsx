
export const LOAD_TEST = 'LOAD_TEST';
export const TEST_LOADED = 'TEST_LOADED';
export const LOAD_USERS = 'LOAD_USERS';
export const USERS_LOADED = 'USERS_LOADED';

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
