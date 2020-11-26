import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";

// // type DialogsTypeProps = {
// //     id: number
// //     message: string
// //     name: string
// //     addMessage: () => void
// //     onMessageChange: (text: string) => void
// //     dialogs: { id: number, name: string}
// //     messages: {id: number, message: string}
// //     dialogsPage: Array<DialogsPageType>
// //     newMessageText: string
// }

const Dialogs = (props: any) => {
    let state = props.dialogsPage;
    // @ts-ignore
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)

// @ts-ignore
    let messagesElements = state.messages.map(m => <DialogsItem name={m.message} id={m.id} key={m.id}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current?.value;
        props.onMessageChange(text);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}

            </div>

            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                              value={state.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;