import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props: any) => {
// let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text: any) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//     }

//     return (<MyPosts
//         updateNewPostText={onPostChange}
//         addPost={addPost}
//         posts={state.profilePage.posts}
//         newPostText={state.profilePage.newPostText}/>)
// }

let mapStateToProps =(state: any)=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps =(dispatch:any)=>{
    return {
        updateNewPostText: (text:any)=> {dispatch(updateNewPostTextActionCreator(text))},
        addPost:()=> {dispatch(addPostActionCreator())}
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer