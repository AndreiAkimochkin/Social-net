import React from "react";
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}:any) => {
    if(!profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.content}>
            {/*<img src='https://picwalls.ru/img/gallery/22/thumbs/thumb_l_9666pw.jpg'/>*/}
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>

        </div>)
}

export default ProfileInfo;