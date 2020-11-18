import React from "react";
import classes from "./SideBar.module.css";
import SideBarItems from "./SideBarItems/SideBarItems";



const SideBar = (props: any) => {

    // @ts-ignore
    let friendsList = props.state.sideBar.map(s => <SideBarItems name={s.name} id={s.id}/>)


    return (
        <div className={classes.sideBar}>
            <div className={classes.sideBarItems}>
                {friendsList}
            </div>

        </div>
    )
}

export default SideBar;

