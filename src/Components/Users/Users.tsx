import styles from "./users.module.css";
import React from "react";
import UserPhoto from '../Images/user.png';
import {NavLink} from "react-router-dom";

export const Users = (props: any) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
   

    return (
        <div>
            <div>
                {pages.map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
            {
                props.users.map((u: {
                    status: string,
                    location: { city: string, country: string },
                    name: string,
                    id: number,
                    photos: { small: string | undefined, large: string | undefined }
                    followed: boolean
                }) => <div key={u.id}>
                <span>
                 
                    <NavLink to={'/Profile'+ u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={styles.userPhoto}/>
                    </div>
                        </NavLink>
                    <div>
                        {u.followed ?
                            <button onClick={() => {

                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {

                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
                </div>)
            }

        </div>
    )
}