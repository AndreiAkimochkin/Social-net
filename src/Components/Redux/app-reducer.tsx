import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type appReducerType = {
    initialized: boolean
}

const initialState = {
    initialized:false
  }

type initialState = typeof initialState;

export const appReducer = (state = initialState, action: any): initialState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }

}

export const initializedSuccess= () => ({type: INITIALIZED_SUCCESS})


export const initializeApp = () =>(dispatch: any)=> {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise]).
        then(()=>{
        dispatch(initializedSuccess())
    })

};
