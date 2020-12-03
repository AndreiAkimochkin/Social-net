import {usersAPI} from "../api/api";

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
                isAuth: true

            }

        default:
            return state;
    }

}

export const setUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
})


export const getAuthUserData = () => {
    return (dispatch: any) => {
        usersAPI.getAuth().then((response: any) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login));
            }
            })
    }
};
