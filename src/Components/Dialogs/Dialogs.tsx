import React from "react";
import { Redirect } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import  {Field, reduxForm, InjectedFormProps} from "redux-form";


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

type MessageDataType = {
    newMessageBody: string

}


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

    let addNewMessage = (values: MessageDataType) => {
        props.addMessage(values.newMessageBody)
    }


    let onMessageChange = () => {
        let text = newMessageElement.current?.value;
        props.onMessageChange(text);
    }

    if (!props.isAuth) return <Redirect to ={'/Login'} />;



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}

            </div>

            <div className={classes.messages}>
                {messagesElements}
             <div>

                <AddMessageFormRedux onSubmit={addNewMessage} />
             </div>

            </div>
        </div>
    )
}

const AddMessageForm:React.FC<InjectedFormProps<MessageDataType>> =
    (props)=> {
    return(

    <form onSubmit={props.handleSubmit}>
        <Field  placeholder={'Send message'} name={'newMessageBody'} component={'textarea'}/>

        <div><button >Send message</button></div>
    </form>
    )
}
const AddMessageFormRedux = reduxForm<MessageDataType>({form: 'addMessageForm'})(AddMessageForm);
export default Dialogs;
