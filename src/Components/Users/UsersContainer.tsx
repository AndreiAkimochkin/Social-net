import React from 'react'
import {connect} from 'react-redux'
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../Redux/users-reducer";
import * as axios from "axios";
import {Users} from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            // @ts-ignore
            this.props.setUsers(response.data.items);
            // @ts-ignore
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChanged =(pageNumber:number)=> {
        // @ts-ignore
        this.props.setCurrentPage(pageNumber);
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            // @ts-ignore
            this.props.setUsers(response.data.items);
        })
    }
    render() {



        return <Users
            // @ts-ignore
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
            // @ts-ignore
            pageSize={this.props.pageSize}
            // @ts-ignore
            currentPage={this.props.currentPage}
            // @ts-ignore
            follow={this.props.follow}
            // @ts-ignore
            unfollow={this.props.unfollow}
            // @ts-ignore
            users={this.props.users}
        />
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)