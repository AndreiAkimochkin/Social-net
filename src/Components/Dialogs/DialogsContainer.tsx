import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


let mapStateToProps=(state: any)=>{
    return {
    dialogsPage: state.dialogsPage,
       }
}


const AuthRedirectComponent = withAuthRedirect(Dialogs)
let mapDispatchToProps=(dispatch:any)=>{
    return {
        onMessageChange: (text:any)=>{dispatch(updateNewMessageTextActionCreator(text))},
        addMessage: ()=>{ dispatch(addMessageActionCreator())}
    }
}
const DialogsContainer =connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer ;