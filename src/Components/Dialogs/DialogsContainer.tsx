import React from "react";
import {addMessageActionCreator} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps=(state: any)=>{
    return {
    dialogsPage: state.dialogsPage,
       }
}


let mapDispatchToProps=(dispatch:any)=>{
    return {
            addMessage: (newMessageBody: string)=>{ dispatch(addMessageActionCreator(newMessageBody))}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)
;