import React from 'react'
import {connect} from 'react-redux'
import {follow, getUsers, setCurrentPage, toggleIsFollowingProgress, unfollow, userType} from "../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import { compose } from 'redux';


export type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean

    users: Array<userType>

    setUsers: (users: string) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (TotalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: (isFetching: boolean) => void
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void


}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        // @ts-ignore
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber: number) => {
        // @ts-ignore
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                onPageChanged={this.onPageChanged}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                            followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


// export default withAuthRedirect (connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleIsFollowingProgress,
//     getUsers
// })(UsersContainer));

export default compose (

    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers
    }),
withAuthRedirect
    (UsersContainer))
