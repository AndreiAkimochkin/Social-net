import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sideBarReducer} from "./sideBar-reducer";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import {appReducer} from "./app-reducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form : formReducer,
    app: appReducer
})

export const store: Store = createStore(reducers, applyMiddleware(thunkMiddleWare));