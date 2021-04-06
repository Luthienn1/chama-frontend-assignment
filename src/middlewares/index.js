import { fetchUserRequest, fetchUserSuccess, fetchUserError, fetchReposRequest, fetchReposSuccess, fetchReposError } from '../store/actions/index';

export const fetchUser = (username) => dispatch => {
    dispatch(fetchUserRequest());

    const fetchUrl = `https://api.github.com/users/${username}`; 

    fetch(fetchUrl, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(response => {
        dispatch(fetchUserSuccess(response));
    })
    .catch(err => dispatch(fetchUserError(err)));
};

export const fetchRepos = (username) => dispatch => {
    dispatch(fetchReposRequest());

    const fetchUrl = `https://api.github.com/users/${username}/repos`;

    fetch(fetchUrl, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
        dispatch(fetchReposSuccess(response));
    })
    .catch(err => dispatch(fetchReposError(err)));
};