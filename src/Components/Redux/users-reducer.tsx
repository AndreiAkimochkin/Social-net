const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    // @ts-ignore
                    if (u.id === action.userID) {
                        // @ts-ignore
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    // @ts-ignore
                    if (u.id === action.userID) {
                        // @ts-ignore
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
            return {...state, currentPage:action.currentPage}

        }
        case SET_TOTAL_USERS : {
            return {...state, totalUsersCount:action.totalUsersCount}

        }
        default:
            return state;
    }

}

export const followAC = (userID: number) => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: string) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS, totalUsersCount})