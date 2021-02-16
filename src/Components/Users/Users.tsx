import React from "react";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";

export const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}: any) => {
    return (
        <div>

            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
            />

            {props.users.map((u:any) => <User key={u.id}
                                              user={u}
                                              followingInProgress={props.followingInProgress}
                                              unfollow={props.unfollow}
                                              follow={props.follow}/>)}

        </div>
    )
}
