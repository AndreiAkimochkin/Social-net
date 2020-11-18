import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sideBarReducer} from "./sideBar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are u", likesCount: 5},
                {id: 2, message: "Fine ", likesCount: 3}
            ],
            newPostText: 'Hi!'
        },
        dialogsPage: {
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
        },
        sideBar: [
            {id: 1, name: "Andrei"},
            {id: 2, name: "Bob"},
            {id: 3, name: "Ceva"}
        ]
    },
    _callSubscriber () { },

    getState() {
        return this._state;
    },
    subscriber (observer:any){
        this._callSubscriber=observer;
    },

dispatch(action:any){
    this._state.profilePage=profileReducer(this._state.profilePage,action);
    this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
    // @ts-ignore
    this._state.sideBar=sideBarReducer(this._state.sideBar,action);
    // @ts-ignore
    this._callSubscriber(this._state);

}
}

// @ts-ignore
window.store=store;