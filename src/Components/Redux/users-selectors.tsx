import React from "react";
import {createSelector} from "reselect";

export const getUsersSelector=(state: any)=> state.usersPage.users;

export const getUsersSuper = createSelector(getUsersSelector, (users)=> {
        return users.filter((u: boolean)=>true);
});

export const getPageSize=(state: any)=>state.usersPage.pageSize;

export const getTotalUsersCount=(state: any)=>state.usersPage.totalUsersCount;

export const getCurrentPage=(state: any)=>state.usersPage.currentPage;

export const getIsFetching=(state: any)=>state.usersPage.isFetching;

export const getFollowingInProgress=(state: any)=>state.usersPage.followingInProgress;

