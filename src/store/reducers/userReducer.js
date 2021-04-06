import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR, FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR } from '../actions/types';

const initialState = {
    request: false,
    user: [],
    userHistory: [],
    userRepos: [],
    error: null
}

export default function user(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                request: true
            }

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                request: false,
                user: action.user,
                userHistory: [...state.userHistory, action.user],
            }

        case FETCH_USER_ERROR:
            return {
                ...state,
                request: false,
                error: action.error
            }

        case FETCH_REPOS_REQUEST:
            return {
                ...state,
                request: true
            }

        case FETCH_REPOS_SUCCESS:
            return {
                ...state,
                request: false,
                userRepos: action.userRepos
            }

        case FETCH_REPOS_ERROR:
            return {
                ...state,
                request: false,
                error: action.error
            }

        default:
            return state;
    }
}