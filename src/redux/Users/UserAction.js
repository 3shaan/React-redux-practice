import axios from "axios";
import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAILURE } from "./UserTypes";
export const userRequest = () => {
    return {
        type : USER_FETCH_REQUEST
    };
}

export const userSuccess = (users) => {
    return {
        type: USER_FETCH_SUCCESS,
        payload : users
    };
}

export const userFailure = (error) => {
    return {
        type: USER_FETCH_FAILURE,
        payload : error
    };
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(userRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                const user = res.data
                dispatch(userSuccess(user));
            })
            .catch(err => {
                dispatch(userFailure(err.message))
            // console.log(err)
        })
    }
}