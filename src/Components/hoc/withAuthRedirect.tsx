import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect =(Component: Function)=> {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/Login'}/>
            return <Component {...this.props}/>
        }
    }


// @ts-ignore
   let ConnectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent
}