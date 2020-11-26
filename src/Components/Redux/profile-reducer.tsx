const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'


const initialState = {
    posts: [
        {id: 1, message: "Hi, how are u", likesCount: 5},
        {id: 2, message: "Fine ", likesCount: 3}
    ],
    newPostText: 'Hi!',
    profile: null
}

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5, message: state.newPostText, likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case
        UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case
        SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUsersProfile = (profile: any) => ({type: SET_USERS_PROFILE, profile})