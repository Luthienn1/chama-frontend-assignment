import { combineReducers } from 'redux';
import user from '../reducers/userReducer';
//import repos from '../reducers/reposReducer';

export default combineReducers({
    user,
})