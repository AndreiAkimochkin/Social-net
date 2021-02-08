import styles from "./users.module.css";
import React from "react";
import UserPhoto from '../Images/user.png';
import {NavLink} from "react-router-dom";

export const User = ({user, followingInProgress, unfollow, follow}: any) => {
      return (
        <div>
                <span>
                 
                    <NavLink to={'/Profile' + user.id}>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : UserPhoto} className={styles.userPhoto}/>
                    </div>
                        </NavLink>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                    onClick={() => {unfollow(user.id);}}>Unfollow</button> :

                            <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                    onClick={() => {follow(user.id);}}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>
                </span>
        </div>
)
}