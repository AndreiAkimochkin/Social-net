import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE-POST';


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
        case
        DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }

        default:
            return state;
    }

};

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText});
export const setUsersProfile = (profile: any) => ({type: SET_USERS_PROFILE, profile});
export const setStatus = (status: string | number) => ({type: SET_STATUS, status});
export const deletePostActionCreator = (postId: number) => ({type: DELETE_POST, postId})

export const getUsersProfile = (UserID: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(UserID)
    dispatch(setUsersProfile(response.data));
};

export const getStatus = (UserID: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(UserID)
    dispatch(setStatus(response.data));
};

export const updateStatus = (status: string | number) => async (dispatch: any) => {
       let response =await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
};