import {GET_PROFILE,SET_PROFILE , GET_PROFILE_REQUEST,GET_PROFILE_SUCCESS,GET_PROFILE_ERROR} from '../actions/AuthActionType'
const profile = JSON.parse(localStorage.getItem("profile"))

const initialState = {
    data: [],
    loading: true,
    error: null
}

// const initialState = profile ? profile : {
//     company_name : 'Prabhu Company', address_line1 : '', address_line2 : '', city : '', state : '', country : '', zipcode : '',
//     mobile : '', email : '', gstin : '', pan : '', terms : '',image : "../assets/img/faces/face-1.jpg"
// }
export default function (state = initialState, action){
    const { type, payload } = action
    switch (type){
        case GET_PROFILE:            
            return state
        case SET_PROFILE:                                                
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case GET_PROFILE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}