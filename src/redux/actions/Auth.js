import {LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,SET_MESSAGE} from './AuthActionType'
import {setMsg,clearMsg} from './Msg'
import axios from 'axios';
const baseURL = process.env.REACT_APP_PRODUCTION_AUTH_URL ? process.env.REACT_APP_DEVELOPEMENT_AUTH_URL : 'http://localhost:3011/auth/login';

export const login = (username, password) => (dispatch) => {    
    axios.post(baseURL + "signin", {username :username,password : password,})
    .then((response)=>{
        if (response){
            localStorage.setItem("user", JSON.stringify(response));
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: response },
            });
        }
    })
    if(username == "admin" && password == "admin@123"){        
        dispatch({
            type : LOGIN_SUCCESS,
            payload : {
                user : {
                    username : username,
                    password : password
                }
            }
        })
        dispatch(clearMsg())
    }
    else{
        dispatch({
            type: LOGOUT,
        })
        dispatch(setMsg('username or password incorrect'))
    }
}

export const logout = () => (dispatch) =>{    
    dispatch({
        type: LOGOUT,
    })
}