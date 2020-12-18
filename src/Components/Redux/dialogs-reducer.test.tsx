import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from "./dialogs-reducer";

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>


}

test('new message should be added to messages array', () => {
    const startState: DialogsPageType = {
        dialogs: [
            {id: 1, name: "Andrei"},
            {id: 2, name: "Bob"},
            {id: 3, name: "Ceva"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Eva"},
            {id: 6, name: "Fedor"}
        ],
        messages: [
            {id: 1, message: "Hi, how are u"},
            {id: 2, message: "Fine "},
            {id: 3, message: "Cooolllll"},
        ],

    }

    const endState = dialogsReducer(startState, addMessageActionCreator(newMessageText))

    expect(endState.messages.length).toBe(4);
    expect(endState.messages[3].id).toBeDefined();
    expect(endState.messages[3].message).toBe("Hi, friends!");
})


test('new message text should be update', () => {
    const startState: DialogsPageType = {
        dialogs: [
            {id: 1, name: "Andrei"},
            {id: 2, name: "Bob"},
            {id: 3, name: "Ceva"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Eva"},
            {id: 6, name: "Fedor"}
        ],
        messages: [
            {id: 1, message: "Hi, how are u"},
            {id: 2, message: "Fine "},
            {id: 3, message: "Cooolllll"},
        ],
        newMessageText: 'Hi, friends!'
    }

    let newMessageText = "HI";

    const endState = dialogsReducer(startState, updateNewMessageTextActionCreator(newMessageText))

       expect(endState.newMessageText).toBe("HI");
})
