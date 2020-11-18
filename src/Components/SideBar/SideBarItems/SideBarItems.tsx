import React from "react";
import classes from "./../SideBar.module.css";
import {NavLink} from "react-router-dom";


type sideBarItemsProps = {
    name: string,
    id: number
}

const SideBarItems = (props: sideBarItemsProps) => {
    let path = '/friends' + props.id;
      return (
        <div className={classes.sideBar}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default SideBarItems;