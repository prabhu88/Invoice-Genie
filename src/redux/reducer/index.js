import {combineReducers} from 'redux'
import auth from './authReducer'
import msg from './msgReducer'
import profile from './profileReducer'
export default combineReducers({auth,msg,profile})