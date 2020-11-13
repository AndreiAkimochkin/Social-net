import React from 'react'
import {connect} from 'react-redux'
import Users from "./UsersC";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../Redux/users-reducer";

export const UsersContainer = () => {

    return (
        <div>
            Users will be here!
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (usersID: number) => {

            dispatch(followAC(usersID));
        },
        unfollow: (usersID: number) => {

            dispatch(unfollowAC(usersID));
        },
        setUsers: (users: string) => {

            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount :number) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)