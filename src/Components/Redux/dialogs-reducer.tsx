import {DialogsPageType} from "./dialogs-reducer.test";
import {usersAPI} from "../api/api";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


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
    ]
}

export const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case  UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
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
export const updateNewMessageTextActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
