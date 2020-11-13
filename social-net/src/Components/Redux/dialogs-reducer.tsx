// @ts-ignore
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
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

export const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case  UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        case  ADD_MESSAGE: {
            let newMessage = {
                id: 4, message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }

        default:
            return state;
    }

}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

// @ts-ignore
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})