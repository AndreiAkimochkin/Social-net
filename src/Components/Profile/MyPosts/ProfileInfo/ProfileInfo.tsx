import React from "react";
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../../Common/Preloader/Preloader";


const ProfileInfo = (props:any) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.content}>
            <img src='https://picwalls.ru/img/gallery/22/thumbs/thumb_l_9666pw.jpg'/>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>ava+description</div>
            </div>

        </div>)
}

export default ProfileInfo;