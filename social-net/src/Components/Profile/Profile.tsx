import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props: any) => {

    return (
        <div>
            <div><ProfileInfo/></div>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;