import React from "react";
import classes from './Post.module.css';

type messageProps = {
    message: string
    likesCount: number
}
const Post = (props: messageProps) => {
    return (
        <div className={classes.item}>
            <img src='https://xakep.ru/wp-content/uploads/2013/12/085647.jpg'/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>

    )
}
export default Post