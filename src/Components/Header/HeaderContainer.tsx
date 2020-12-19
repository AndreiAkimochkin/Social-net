import React from "react";
import Header from "./Header";
import {userType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {getAuthUserData, logoutTC} from "../Redux/auth-reducer";


export type PropsHeaderContainerType = {
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
    withCredentials: boolean
}

class HeaderContainer extends React.Component<PropsHeaderContainerType> {
    componentDidMount() {

     // @ts-ignore
        this.props.getAuthUserData();
    }

    render() {
        // @ts-ignore
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {getAuthUserData, logoutTC})(HeaderContainer);