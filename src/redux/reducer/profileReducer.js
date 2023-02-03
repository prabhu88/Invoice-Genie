import {GET_PROFILE,SET_PROFILE} from '../actions/AuthActionType'
const profile = JSON.parse(localStorage.getItem("profile"))
const initialState = profile ? profile : {
    company_name : 'Prabhu Company', address_line1 : '', address_line2 : '', city : '', state : '', country : '', zipcode : '',
    mobile : '', email : '', gstin : '', pan : '', terms : '',image : "../assets/img/faces/face-1.jpg"
}
export default function (state = initialState, action){
    const { type, payload } = action
    switch (type){
        case GET_PROFILE:
            console.log(state)
            return state
        case SET_PROFILE:                                    
            localStorage.setItem('profile',payload)
            return payload
        default:
            return state;
    }
}