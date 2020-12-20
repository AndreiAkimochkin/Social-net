import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

export type authType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
type initialState = typeof initialState;
export const authReducer = (state = initialState, action: any): initialState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        default:
            return state;
    }

}

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
})


export const getAuthUserData = () => {
    return (dispatch: any) => {
        usersAPI.getAuth().then((response: any) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
        })
    }
};

export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe).then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
};

export const logoutTC = () => {
    return (dispatch: any) => {
        authAPI.logout().then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        })
    }
};