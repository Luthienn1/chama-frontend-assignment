import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR, FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR} from './types';

export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST
});

export const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    user: {...user, timestamp: Date.now()},
});

export const fetchUserError = error => ({
    type: FETCH_USER_ERROR,
    error: error
});

export const fetchReposRequest = () => ({
    type: FETCH_REPOS_REQUEST
});

export const fetchReposSuccess = userRepos => ({
    type: FETCH_REPOS_SUCCESS,
    userRepos: userRepos
});

export const fetchReposError = error => ({
    type: FETCH_REPOS_ERROR,
    error: error
});