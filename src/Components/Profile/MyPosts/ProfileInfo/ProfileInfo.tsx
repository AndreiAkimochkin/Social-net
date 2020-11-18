import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <img src='https://picwalls.ru/img/gallery/22/thumbs/thumb_l_9666pw.jpg'/>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>

        </div>)
}

export default ProfileInfo;