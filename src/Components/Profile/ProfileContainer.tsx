import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUsersProfile(userId);

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
});

const WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUsersProfile})(WithURLDataContainerComponent);