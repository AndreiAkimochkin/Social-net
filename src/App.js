import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App(props) {
    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
                <Route path='/Login' render={() => <UsersContainer/>}/>

            </div>
        </div>

    );
}

export default App;
