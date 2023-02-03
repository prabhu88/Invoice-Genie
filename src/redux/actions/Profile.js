import {GET_PROFILE,SET_PROFILE} from './AuthActionType'

export const setProfile = (formData) => (dispatch) => {    
    dispatch({
        type : SET_PROFILE,
        payload : formData
    })    
}