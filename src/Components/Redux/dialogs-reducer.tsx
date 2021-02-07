import {DialogsPageType} from "./dialogs-reducer.test";

const ADD_MESSAGE = "ADD-MESSAGE";

let initialState: DialogsPageType = {
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
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case  ADD_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state;
    }

}
export const addMessageActionCreator = (newMessageBody: string) => ({type: ADD_MESSAGE, newMessageBody})

