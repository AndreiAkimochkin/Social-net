import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props: any) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;