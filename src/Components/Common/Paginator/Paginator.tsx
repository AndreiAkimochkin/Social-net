import styles from "./Paginator.module.css";
import React from "react";

export const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}: any) => {

    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            // @ts-ignore
            return <span className={currentPage === p && styles.selectedPage}
                         onClick={(e) => {onPageChanged(p)}}>{p}</span>
        })}
    </div>
}
