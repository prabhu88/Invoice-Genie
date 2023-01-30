const settings = JSON.parse(localStorage.getItem("settings"))
const initialState = settings ? settings : { 
    canSave : true
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_SETTINGS:
            return state;
        case CLEAR_SETTINGS:
            return state;
        default:
            return state;
    }
}