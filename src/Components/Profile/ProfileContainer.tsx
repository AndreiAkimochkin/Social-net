import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, updateStatus} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import { compose } from "redux";



class ProfileContainer extends React.Component<any, any> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            // if(!userId) {
            //     this.props.history.push('/login')
            // }
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, {
        getUsersProfile,
        getStatus,
        updateStatus}),
        withRouter

)   (ProfileContainer)
