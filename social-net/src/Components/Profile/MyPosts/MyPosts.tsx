import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    // @ts-ignore
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let onAddPost = () => {
        props.addPost();
          }
    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text);
    }

    return <div className={classes.posts}>
        <div className={classes.item}>
            <div>
                MyPost
            </div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            <div>
                <button onClick={onAddPost}>Send message</button>
            </div>
            {postsElements}
        </div>
    </div>
}
export default MyPosts