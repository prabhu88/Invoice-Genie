import {GET_PROFILE,SET_PROFILE,GET_PROFILE_REQUEST,GET_PROFILE_SUCCESS,GET_PROFILE_ERROR} from './AuthActionType'
import axios from 'axios';
const baseURL = process.env.REACT_APP_PRODUCTION_AUTH_URL ? process.env.REACT_APP_DEVELOPEMENT_AUTH_URL : 'http://localhost:3011/auth/';
export const setProfile = (formData) => (dispatch) => {    
    axios.post(baseURL+"updateProfile",{
        data : formData
    }).then(res=>{
        if (res.data.error_state){
            dispatch({
                type : GET_PROFILE_ERROR,
                payload : res.data.data
            })
        }

        dispatch({
            type : GET_PROFILE_SUCCESS,
            payload : res.data.data
        })
        
    }).catch(err => {
        dispatch({type : GET_PROFILE_ERROR,payload : err})
    })
}

export const getProfile = () => (dispatch) => { 
    dispatch({type : GET_PROFILE_REQUEST})
    axios.post(baseURL+"getProfile")
    .then(res => {
        if (res.data.error_state){
            dispatch({
                type : GET_PROFILE_ERROR,
                payload : res.data.data
            })
        }

        dispatch({
            type : GET_PROFILE_SUCCESS,
            payload : res.data.data
        })

    })
    .catch(err =>{
        dispatch({type : GET_PROFILE_ERROR,payload : err})
    })        
}