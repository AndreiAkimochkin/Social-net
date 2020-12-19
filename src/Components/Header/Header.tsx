
import React from "react";
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header =(props: any) =>{
    return(
        <header className={classes.header}>
        <img src='https://i.pinimg.com/originals/9c/6b/2b/9c6b2b7f6bdfca569fcad7993c9c60b6.png'/>
        <div className={classes.loginBlock}>
            {props.isAuth ?   <div>{props.login} - <button onClick={props.logoutTC}>Log out</button></div>:
                <NavLink to ={'/Login'}>Login</NavLink>}
        </div>

        </header>)
}

export default Header;