import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import {Route} from "react-router-dom";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";


import {initializeApp} from "./Components/Redux/app-reducer";
import {Preloader} from "./Components/Common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {

        // @ts-ignore
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/Dialogs' render={() => {
                       return <React.Suspense  fallback={<Preloader />}>
                           <DialogsContainer/>
                       </React.Suspense>
                    }}/>
                    <Route path='/profile/:userId?' render={() => {
                        return <React.Suspense  fallback={<Preloader />}>
                            <ProfileContainer/>
                            </React.Suspense>
                        }}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/Login' render={() => <Login/>}/>

                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);
