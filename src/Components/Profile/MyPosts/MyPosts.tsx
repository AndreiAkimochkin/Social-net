import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";

type PostDataType = {
    newPostText: string

}
const MyPosts = (props: any) => {

    // @ts-ignore
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)


    let onAddPost = (values:PostDataType ) => {
        props.addPost( values.newPostText)}


    return <div className={classes.posts}>
        <div className={classes.item}>
            <div>
                MyPost
            </div>
 <AddNewPostFormRedux onSubmit={onAddPost}/>
            {postsElements}
        </div>
    </div>
}

const AddNewPostForm:React.FC<InjectedFormProps<PostDataType>> =
    (props)=> {
        return(

            <Form onSubmit={props.handleSubmit}>
                <Field
                    placeholder={'Send message'} name={'newPostText'} component={'textarea'}/>
                <div>
                    <button >Send message</button>
                </div>
            </Form>
        )
    }
const  AddNewPostFormRedux = reduxForm<PostDataType>({form: 'AddNewPostForm'})( AddNewPostForm);

export default MyPosts