import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAILURE } from "./UserTypes";

const initialValue = {
    loading: false,
    user: [],
    error : ''
}

const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case USER_FETCH_REQUEST: return {
            ...state, 
            loading : true,
        }
        case USER_FETCH_SUCCESS: return {
            loading: false,
            user: action.payload,
            error : ''
        }
        case USER_FETCH_FAILURE: return {
            loading: false,
            user: [],
            error : action.payload,
        }
        default: return state
    }
}
export default userReducer;