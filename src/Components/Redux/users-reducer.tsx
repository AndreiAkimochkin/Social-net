import React from "react";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type photosType = {
    small: string | null
    large: string | null
}

export type userType = {
    id: number
    name: string
    status: string
    photos: photosType
}

const initialState = {
    users: [] as Array<userType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
type initialState = typeof initialState;
export const usersReducer = (state = initialState, action: any): initialState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}

        }
        case SET_TOTAL_USERS : {
            return {...state, totalUsersCount: action.totalUsersCount}

        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {

            return {
                ...state,
                // @ts-ignore
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state;
    }

}

export const followSuccess = (userID: number) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsers = (users: string) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching: boolean, userID: number) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID})

export const getUsers = (page: number, pageSize: number)=> {
   return (dispatch: any) => {
    dispatch(toggleIsFetching(true));
       dispatch(setCurrentPage(page))
    usersAPI.getUsers(page, pageSize).then(
        (data: { items: string; totalCount: number; }) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
}
};

export const follow = (userID: number)=> {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userID));

        usersAPI.follow(userID).then((response: { data: { resultCode: number; }; }) => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userID))
            }
           dispatch(toggleIsFollowingProgress(false, userID));
        });
    }
};

export const unfollow = (userID: number)=> {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userID));

        usersAPI.unfollow(userID).then((response: { data: { resultCode: number; }; }) => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userID))
            }
            dispatch(toggleIsFollowingProgress(false, userID));
        });
    }
};
