import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';


const initialState = {
    posts: [
        {id: 1, message: "Hi, how are u", likesCount: 5},
        {id: 2, message: "Fine ", likesCount: 3}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5, message: action.newPostText, likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],

            };
        }
        case
             SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case
            SET_STATUS:
                return {
                    ...state,
                   status: action.status
                };

        default:
            return state;
    }

};

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText});
export const setUsersProfile = (profile: any) => ({type: SET_USERS_PROFILE, profile});
export const setStatus = (status: string|number) => ({type: SET_STATUS, status});

export const getUsersProfile = (UserID: number) => {
    return (dispatch:any)=> {
        usersAPI.getProfile(UserID).then((response: { data: any; }) => {
            dispatch(setUsersProfile(response.data));
        })
    }
};

export const getStatus= (UserID: number) => {
    return (dispatch:any)=> {
        profileAPI.getStatus(UserID).then((response: { data: any; }) => {

            dispatch(setStatus(response.data));
        })
    }
};

export const updateStatus= (status: string | number) => {
    return (dispatch:any)=> {
        profileAPI.updateStatus(status).then((response: { data: any; }) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
};