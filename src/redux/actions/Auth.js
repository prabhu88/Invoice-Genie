import {LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,SET_MESSAGE} from './AuthActionType'
//const baseURL = process.env.REACT_APP_PRODUCTION_AUTH_URL ?? process.env.REACT_APP_DEVELOPEMENT_AUTH_URL;
export const login = (username, password) => (dispatch) => {
    //return AuthService.login(username, password).then()
    // axios.post(baseURL + "signin", {username,password,})
    // .then((response)=>{
    //     if (response.data.accessToken){
    //         localStorage.setItem("user", JSON.stringify(response.data));
    //         dispatch({
    //             type: LOGIN_SUCCESS,
    //             payload: { user: response.data },
    //         });
    //     }
    // })
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
    }
    else{
        dispatch({
            type: LOGOUT,
        })
    }
}

export const logout = () => (dispatch) =>{
    console.log('called')
    dispatch({
        type: LOGOUT,
    })
}