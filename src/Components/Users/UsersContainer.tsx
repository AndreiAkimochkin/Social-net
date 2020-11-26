import React from 'react'
import {connect} from 'react-redux'
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    userType
} from "../Redux/users-reducer";
import * as axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

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
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void


}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber: number) => {

        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
        })
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
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);

