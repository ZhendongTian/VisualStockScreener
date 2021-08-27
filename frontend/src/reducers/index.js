import { combineReducers } from "redux";
import postReducer from './postReducer';
import filterReducer from './filterReducer'
export default combineReducers({
    posts: postReducer,
    filters:filterReducer
})