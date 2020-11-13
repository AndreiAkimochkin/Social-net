import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type dialogsItemProps = {
    name: string,
    id: number
}

const DialogsItem = (props: dialogsItemProps) => {
    let path = '/dialogs' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;