const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export type photosType = {
    small: string | null
    large: string | null
}

export type userType = {
    id: number
    name: string
    status: string
    photos: photosType
}

const initialState = {
    users: [] as Array<userType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
type initialState = typeof initialState;
export const usersReducer = (state = initialState, action: any): initialState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}

        }
        case SET_TOTAL_USERS : {
            return {...state, totalUsersCount: action.totalUsersCount}

        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state;
    }

}

export const follow = (userID: number) => ({type: FOLLOW, userID})
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsers = (users: string) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})