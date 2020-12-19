import * as axios from "axios";

// @ts-ignore
const instanse = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "fe58a20b-6990-4fee-a414-1ab0afb5a9c0"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});


export const usersAPI = {
    getUsers(currentPage= 1, pageSize=10) {

        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: { data: any; }) => response.data)
    },
    follow(userId: number) {

        return instanse.post(`follow/${userId}`, {},)
    },
    unfollow(userId: number) {

        return instanse.delete(`follow/${userId}`, {})
    },
    getAuth() {
        return instanse.get(`auth/me`)
    },
    getProfile( userId: number) {
        return profileAPI.getProfile( userId)

    }
}

export const profileAPI = {

    getProfile( userId: number) {
        return instanse.get(`profile/` + userId)

    },

    getStatus( userId: number) {
        return instanse.get(`profile/status/`  + userId)
    },
    updateStatus(status: string | number) {
        return instanse.put(`profile/status/`, {status} )
    }
}

export const authAPI = {
    login(email: string , password:string , rememberMe:boolean) {
        return instanse.post(`/auth/login`, {email, password, rememberMe} )
    },
    logout() {
        return instanse.delete(`/auth/login`)
    }
}