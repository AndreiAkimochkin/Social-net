import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props: any) => {
//     let state = props.store.getState().dialogsPage;
//
//     let addMessage =()=>{
//         props.store.dispatch(addMessageActionCreator());
//     }
//
//    let onMessageChange=(text:any)=>{
//         let action=updateNewMessageTextActionCreator(text);
//         props.store.dispatch(action);
//    }
//     return (<Dialogs
//         onMessageChange={onMessageChange}
//         addMessage={addMessage}
//         dialogsPage={state}/>)
// }

let mapStateToProps=(state: any)=>{
    return {
    dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps=(dispatch:any)=>{
    return {
        onMessageChange: (text:any)=>{dispatch(updateNewMessageTextActionCreator(text))},
        addMessage: ()=>{ dispatch(addMessageActionCreator())}
    }
}
const DialogsContainer =connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer ;