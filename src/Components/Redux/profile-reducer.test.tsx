import {addPostActionCreator, profileReducer, setStatus} from "./profile-reducer";


test('new post should be added to the posts array', () => {
    const initialState = {
        posts: [
            {id: 1, message: "Hi, how are u", likesCount: 5},
            {id: 2, message: "Fine ", likesCount: 3}
        ],
        profile: null,
        status: ''
    }

    let newPostText = "Hi, friends!";
    const endState = profileReducer(initialState , addPostActionCreator(newPostText))

    expect(endState.posts.length).toBe(3);
    expect(endState.posts[2].id).toBeDefined();
    expect(endState.posts[2].message).toBe("Hi, friends!");
})

test('new status should be added to the posts array', () => {
    const initialState = {
        posts: [
            {id: 1, message: "Hi, how are u", likesCount: 5},
            {id: 2, message: "Fine ", likesCount: 3}
        ],
        profile: null,
        status: ''
    }

    let newStatusText = "Hi, friends!";
    const endState = profileReducer(initialState , setStatus(newStatusText))


    expect(endState.status).toBe("Hi, friends!");
})



